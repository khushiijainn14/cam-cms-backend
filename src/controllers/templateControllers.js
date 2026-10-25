const db = require("../database/config");

// Get complete template for preview
const getTemplatePreview = async (req, res) => {
  try {
    const { templateId } = req.params;
    const requestedPageId = req.query.pageId ? Number(req.query.pageId) : null;

    // 1. Get the template
    const templateResult = await db.query(
      `
      SELECT
        id,
        name,
        created_at,
        updated_at
      FROM templates
      WHERE id = $1
      `,
      [templateId]
    );

    if (templateResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Template not found"
      });
    }

    // 2. Get pages belonging to this template
    const pagesResult = await db.query(
      `SELECT * FROM pages WHERE template_id = $1 ORDER BY created_at ASC`,
      [templateId]
    );
    const pages = pagesResult.rows;

    let activePageId = requestedPageId;
    if (!activePageId && pages.length > 0) {
      activePageId = pages[0].id;
    }

    // 3. Get sections belonging to this template
    let sectionsResult;
    if (activePageId) {
      sectionsResult = await db.query(
        `
        SELECT
          id,
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
        FROM sections
        WHERE template_id = $1
          AND (
            page_id = $2
            OR (page_id IS NULL AND section_type = 'other')
            OR section_type IN ('header', 'footer')
          )
        ORDER BY section_order ASC
        `,
        [templateId, activePageId]
      );
    } else {
      sectionsResult = await db.query(
        `
        SELECT
          id,
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
        FROM sections
        WHERE template_id = $1
        ORDER BY section_order ASC
        `,
        [templateId]
      );
    }

    const sections = sectionsResult.rows;

    // 4. Attach collection items if any sections are bound to CMS collections
    const collectionIds = [...new Set(sections.map(s => s.collection_id).filter(Boolean))];
    let itemsByCollection = {};
    if (collectionIds.length > 0) {
      const itemsRes = await db.query(
        `SELECT * FROM collection_items WHERE collection_id = ANY($1) ORDER BY created_at DESC`,
        [collectionIds]
      );
      itemsRes.rows.forEach(item => {
        if (!itemsByCollection[item.collection_id]) {
          itemsByCollection[item.collection_id] = [];
        }
        itemsByCollection[item.collection_id].push(item);
      });
    }

    const populatedSections = sections.map(s => {
      if (s.collection_id && itemsByCollection[s.collection_id]) {
        return { ...s, _collectionItems: itemsByCollection[s.collection_id] };
      }
      return s;
    });

    return res.status(200).json({
      success: true,
      template: templateResult.rows[0],
      pages,
      currentPageId: activePageId,
      sections: populatedSections
    });

  } catch (error) {
    console.error("Error fetching template preview:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch template preview"
    });
  }
};

module.exports = {
  getTemplatePreview
};