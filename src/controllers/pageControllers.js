const db = require('../database/config');

exports.createPage = async (req, res) => {
    try {
        const { templateId, name, slug } = req.body;
        if (!templateId || !name || !slug) {
            return res.status(400).json({ message: "templateId, name, and slug are required" });
        }

        const result = await db.query(
            `INSERT INTO pages (template_id, name, slug) VALUES ($1, $2, $3) RETURNING *`,
            [templateId, name, slug]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("createPage db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getPages = async (req, res) => {
    try {
        const { templateId } = req.params;
        if (!templateId) {
            return res.status(400).json({ message: "templateId is required" });
        }

        const result = await db.query(
            `SELECT * FROM pages WHERE template_id = $1 ORDER BY created_at ASC`,
            [templateId]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("getPages db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.updatePage = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, slug } = req.body;
        if (!id || !name || !slug) {
            return res.status(400).json({ message: "id, name, and slug are required" });
        }

        const result = await db.query(
            `UPDATE pages SET name = $1, slug = $2 WHERE id = $3 RETURNING *`,
            [name, slug, id]
        );
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Page not found" });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        console.error("updatePage db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deletePage = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Page ID is required" });
        }

        const result = await db.query(`DELETE FROM pages WHERE id = $1`, [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Page not found" });
        }
        res.status(200).json({ message: "Page deleted successfully" });
    } catch (err) {
        console.error("deletePage db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getSectionsByPage = async (req, res) => {
    try {
        const { pageId } = req.params;
        if (!pageId) {
            return res.status(400).json({ message: "pageId is required" });
        }

        // Fetch sections for this page + header/footer for the template this page belongs to
        const pageInfo = await db.query(`SELECT template_id FROM pages WHERE id = $1`, [pageId]);
        if (pageInfo.rowCount === 0) {
            return res.status(404).json({ message: "Page not found" });
        }
        const templateId = pageInfo.rows[0].template_id;

        const sections = await db.query(`
            SELECT * FROM sections 
            WHERE (page_id = $1 AND section_type = 'other')
               OR (page_id IS NULL AND template_id = $2 AND section_type = 'other')
               OR (template_id = $2 AND section_type IN ('header', 'footer'))
            ORDER BY "section_order"
        `, [pageId, templateId]);

        res.status(200).json(sections.rows);
    } catch (err) {
        console.error("getSectionsByPage db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getPageBySlug = async (req, res) => {
    try {
        const { templateId, slug } = req.params;
        if (!templateId || !slug) {
            return res.status(400).json({ message: "templateId and slug are required" });
        }

        const page = await db.query(
            `SELECT * FROM pages WHERE template_id = $1 AND slug = $2`,
            [templateId, slug]
        );

        if (page.rowCount === 0) {
            return res.status(404).json({ message: "Page not found" });
        }

        const pageId = page.rows[0].id;
        const sections = await db.query(`
            SELECT * FROM sections 
            WHERE (page_id = $1 AND section_type = 'other')
               OR (template_id = $2 AND section_type IN ('header', 'footer'))
            ORDER BY "section_order"
        `, [pageId, templateId]);

        res.status(200).json({ page: page.rows[0], sections: sections.rows });
    } catch (err) {
        console.error("getPageBySlug db err", err);
        res.status(500).json({ message: "Server error" });
    }
};
