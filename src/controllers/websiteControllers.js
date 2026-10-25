const db = require('../database/config');

// Create a new user-owned website from an existing template
const useTemplate = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  const { templateId, name } = req.body;
  if (!templateId) {
    return res.status(400).json({ success: false, message: 'Template ID is required' });
  }

  const client = await db.getClient();
  try {
    // 1. Verify source template exists
    const templateRes = await client.query(
      `SELECT id, name FROM templates WHERE id = $1`,
      [templateId]
    );

    if (templateRes.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Source template not found' });
    }

    const sourceTemplate = templateRes.rows[0];
    const websiteName = (name && name.trim()) || `${sourceTemplate.name || 'Template'} Website`;

    // 2. Start PostgreSQL Transaction for atomic creation
    await client.query('BEGIN');

    // 3. Create the user-owned website row
    const websiteRes = await client.query(
      `INSERT INTO websites (user_id, template_id, name)
       VALUES ($1, $2, $3)
       RETURNING id, user_id, template_id, name, created_at, updated_at`,
      [userId, templateId, websiteName]
    );
    const newWebsite = websiteRes.rows[0];
    const newWebsiteId = newWebsite.id;

    // 4. Fetch source template pages
    const pagesRes = await client.query(
      `SELECT id, name, slug FROM pages WHERE template_id = $1 ORDER BY created_at ASC`,
      [templateId]
    );

    const pageMapping = new Map(); // oldPageId -> newPageId
    let defaultPageId = null;

    if (pagesRes.rows.length > 0) {
      for (const p of pagesRes.rows) {
        const newPageRes = await client.query(
          `INSERT INTO pages (website_id, template_id, name, slug)
           VALUES ($1, NULL, $2, $3)
           RETURNING id`,
          [newWebsiteId, p.name, p.slug]
        );
        const newPId = newPageRes.rows[0].id;
        pageMapping.set(p.id, newPId);
        if (!defaultPageId) defaultPageId = newPId;
      }
    } else {
      // If template had no pages, create a default Home page for the website
      const homePageRes = await client.query(
        `INSERT INTO pages (website_id, template_id, name, slug)
         VALUES ($1, NULL, 'Home', 'home')
         RETURNING id`,
        [newWebsiteId]
      );
      defaultPageId = homePageRes.rows[0].id;
    }

    // 5. Fetch source template sections
    const sectionsRes = await client.query(
      `SELECT
        id,
        section_order,
        is_mandatory,
        section_type,
        section_html,
        changed_data,
        default_data,
        element_schema,
        page_id,
        collection_id
       FROM sections
       WHERE template_id = $1
       ORDER BY section_order ASC`,
      [templateId]
    );

    // 6. Clone all sections for the new website
    for (const s of sectionsRes.rows) {
      const mappedPageId = s.page_id ? (pageMapping.get(s.page_id) || defaultPageId) : null;
      // Merge initial changed_data with default_data
      const initialChangedData = s.changed_data || {};
      const initialDefaultData = s.default_data || {};
      const initialSchema = s.element_schema || {};

      await client.query(
        `INSERT INTO sections (
           website_id,
           template_id,
           section_order,
           is_mandatory,
           section_type,
           section_html,
           changed_data,
           default_data,
           element_schema,
           page_id,
           collection_id
         ) VALUES ($1, NULL, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
        [
          newWebsiteId,
          s.section_order,
          s.is_mandatory || false,
          s.section_type || 'other',
          s.section_html || '',
          initialChangedData,
          initialDefaultData,
          initialSchema,
          mappedPageId,
          s.collection_id || null
        ]
      );
    }

    await client.query('COMMIT');

    return res.status(201).json({
      success: true,
      message: 'Website created successfully',
      website: newWebsite,
      defaultPageId
    });

  } catch (error) {
    await client.query('ROLLBACK').catch(() => {});
    console.error('Error creating website from template:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error while creating website'
    });
  } finally {
    client.release();
  }
};

// Get all websites owned by the authenticated user
const getUserWebsites = async (req, res) => {
  const userId = req.user && req.user.id;
  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const result = await db.query(
      `SELECT
         w.id,
         w.user_id,
         w.template_id,
         w.name,
         w.created_at,
         w.updated_at,
         t.name AS template_name
       FROM websites w
       LEFT JOIN templates t ON w.template_id = t.id
       WHERE w.user_id = $1
       ORDER BY w.updated_at DESC, w.id DESC`,
      [userId]
    );

    return res.status(200).json({
      success: true,
      websites: result.rows
    });
  } catch (error) {
    console.error('Error fetching user websites:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get specific website details, pages, and sections
const getWebsiteById = async (req, res) => {
  const userId = req.user && req.user.id;
  const { id } = req.params;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    // Check ownership
    const websiteRes = await db.query(
      `SELECT * FROM websites WHERE id = $1 AND user_id = $2`,
      [id, userId]
    );

    if (websiteRes.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Website not found or unauthorized' });
    }

    const website = websiteRes.rows[0];

    // Fetch pages
    const pagesRes = await db.query(
      `SELECT * FROM pages WHERE website_id = $1 ORDER BY created_at ASC`,
      [id]
    );

    // Fetch sections
    const sectionsRes = await db.query(
      `SELECT * FROM sections WHERE website_id = $1 ORDER BY section_order ASC`,
      [id]
    );

    return res.status(200).json({
      success: true,
      website,
      pages: pagesRes.rows,
      sections: sectionsRes.rows
    });
  } catch (error) {
    console.error('Error fetching website by id:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Get sections for a specific page of a website
const getWebsiteSectionsByPage = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId, pageId } = req.params;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    const sections = await db.query(
      `SELECT * FROM sections
       WHERE website_id = $1
         AND (
           page_id = $2
           OR (page_id IS NULL AND section_type = 'other')
           OR section_type IN ('header', 'footer')
         )
       ORDER BY section_order ASC`,
      [websiteId, pageId]
    );

    return res.status(200).json({ success: true, sections: sections.rows });
  } catch (error) {
    console.error('Error fetching website page sections:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update a section in a user's website
const updateWebsiteSection = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId, sectionId } = req.params;
  const { html, schema, defaultData, changedData } = req.body;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    // Verify ownership
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    const updateRes = await db.query(
      `UPDATE sections
       SET section_html = $1,
           element_schema = $2,
           default_data = $3,
           changed_data = $4
       WHERE id = $5 AND website_id = $6
       RETURNING *`,
      [html, schema, defaultData, changedData, sectionId, websiteId]
    );

    if (updateRes.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Section not found' });
    }

    // Touch website updated_at
    await db.query(`UPDATE websites SET updated_at = NOW() WHERE id = $1`, [websiteId]);

    return res.status(200).json({ success: true, message: 'Section updated successfully', section: updateRes.rows[0] });
  } catch (error) {
    console.error('Error updating website section:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Add a new section to a user's website
const addWebsiteSection = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId } = req.params;
  const { pageId, prevOrder, nextOrder } = req.body;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    const order = (Number(prevOrder) + Number(nextOrder)) / 2;

    await db.query(
      `INSERT INTO sections (
         website_id,
         template_id,
         page_id,
         section_order,
         is_mandatory,
         section_type,
         section_html,
         changed_data,
         default_data,
         element_schema
       ) VALUES ($1, NULL, $2, $3, false, 'other', '', '{}', '{}', '{}')`,
      [websiteId, pageId, order]
    );

    const middleSections = await db.query(
      `SELECT * FROM sections
       WHERE website_id = $1 AND section_type = 'other' AND page_id = $2
       ORDER BY section_order ASC`,
      [websiteId, pageId]
    );

    await db.query(`UPDATE websites SET updated_at = NOW() WHERE id = $1`, [websiteId]);

    return res.status(200).json({ success: true, middleSection: middleSections.rows });
  } catch (error) {
    console.error('Error adding website section:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Reorder sections in a user's website
const reorderWebsiteSections = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId } = req.params;
  const { orderedIds } = req.body;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    if (Array.isArray(orderedIds)) {
      for (let i = 0; i < orderedIds.length; i++) {
        const sId = orderedIds[i];
        const orderVal = 50 + (i + 1) * 50;
        await db.query(
          `UPDATE sections SET section_order = $1 WHERE id = $2 AND website_id = $3`,
          [orderVal, sId, websiteId]
        );
      }
    }

    await db.query(`UPDATE websites SET updated_at = NOW() WHERE id = $1`, [websiteId]);

    return res.status(200).json({ success: true, message: 'Sections reordered successfully' });
  } catch (error) {
    console.error('Error reordering website sections:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Delete a section from a user's website
const deleteWebsiteSection = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId, sectionId } = req.params;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    // Do not allow deleting mandatory sections
    const sec = await db.query(
      `SELECT is_mandatory, section_type FROM sections WHERE id = $1 AND website_id = $2`,
      [sectionId, websiteId]
    );

    if (sec.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Section not found' });
    }

    if (sec.rows[0].is_mandatory || ['header', 'footer'].includes(sec.rows[0].section_type)) {
      return res.status(400).json({ success: false, message: 'Cannot delete mandatory header or footer section' });
    }

    await db.query(`DELETE FROM sections WHERE id = $1 AND website_id = $2`, [sectionId, websiteId]);
    await db.query(`UPDATE websites SET updated_at = NOW() WHERE id = $1`, [websiteId]);

    return res.status(200).json({ success: true, message: 'Section deleted' });
  } catch (error) {
    console.error('Error deleting website section:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Duplicate a section within a user's website
const duplicateWebsiteSection = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId, sectionId } = req.params;
  const { nextOrder } = req.body;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  try {
    const ownerCheck = await db.query(
      `SELECT id FROM websites WHERE id = $1 AND user_id = $2`,
      [websiteId, userId]
    );

    if (ownerCheck.rows.length === 0) {
      return res.status(403).json({ success: false, message: 'Unauthorized' });
    }

    const original = await db.query(
      `SELECT * FROM sections WHERE id = $1 AND website_id = $2`,
      [sectionId, websiteId]
    );

    if (original.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Section not found' });
    }

    const s = original.rows[0];
    const order = (Number(s.section_order) + Number(nextOrder || s.section_order + 100)) / 2;

    const result = await db.query(
      `INSERT INTO sections(
         website_id,
         template_id,
         page_id,
         section_order,
         is_mandatory,
         section_type,
         section_html,
         changed_data,
         default_data,
         element_schema,
         collection_id
       ) VALUES ($1, NULL, $2, $3, false, $4, $5, $6, $7, $8, $9)
       RETURNING *`,
      [websiteId, s.page_id, order, s.section_type, s.section_html, s.changed_data, s.default_data, s.element_schema, s.collection_id]
    );

    await db.query(`UPDATE websites SET updated_at = NOW() WHERE id = $1`, [websiteId]);

    return res.status(201).json({ success: true, section: result.rows[0] });
  } catch (error) {
    console.error('Error duplicating website section:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Update website name
const updateWebsiteName = async (req, res) => {
  const userId = req.user && req.user.id;
  const { websiteId } = req.params;
  const { name } = req.body;

  if (!userId) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, message: 'Website name is required' });
  }

  try {
    const result = await db.query(
      `UPDATE websites SET name = $1, updated_at = NOW() WHERE id = $2 AND user_id = $3 RETURNING *`,
      [name.trim(), websiteId, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Website not found or unauthorized' });
    }

    return res.status(200).json({ success: true, message: 'Website name updated', website: result.rows[0] });
  } catch (error) {
    console.error('Error updating website name:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  useTemplate,
  getUserWebsites,
  getWebsiteById,
  getWebsiteSectionsByPage,
  updateWebsiteSection,
  addWebsiteSection,
  reorderWebsiteSections,
  deleteWebsiteSection,
  duplicateWebsiteSection,
  updateWebsiteName
};
