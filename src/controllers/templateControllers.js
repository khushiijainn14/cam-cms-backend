const db = require("../database/config");

// Get complete template for preview
const getTemplatePreview = async (req, res) => {
  try {
    const { templateId } = req.params;

    // 1. Get the template
    const templateResult = await db.query(
      `
      SELECT
        id,
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

    // 2. Get all sections belonging to this template
    const sectionsResult = await db.query(
      `
      SELECT
        id,
        template_id,
        section_order,
        is_mandatory,
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

    return res.status(200).json({
      success: true,
      template: templateResult.rows[0],
      sections: sectionsResult.rows
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