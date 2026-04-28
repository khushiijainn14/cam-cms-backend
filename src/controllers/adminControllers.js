const db = require('../database/config');

exports.ToolboxElements = async (req, res) => {
    try {
        const result = await db.query(`Select * from elements_at_toolbox`);
        // res.json(result);
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send("server side errror");
    }
}
exports.createTemplate = async (req, res) => {
    // we have to create a new row in the templates table
    try {
        const result = await db.query(`Insert into templates (name) values ('temp') returning id`);
        const id = result.rows[0].id;
        const defaultName = `Template ${id}`;
        await db.query(`UPDATE templates SET name = $1 WHERE id = $2`, [defaultName, id]);

        // Create default "Home" page
        const pageResult = await db.query(
            `INSERT INTO pages (template_id, name, slug) VALUES ($1, 'Home', 'home') RETURNING id`,
            [id]
        );
        const pageId = pageResult.rows[0].id;

        const headerDefaultData = {
            "logo_text": "MyBrand",
            "nav1_label": "Home",
            "nav1_link": "/",
            "nav2_label": "About",
            "nav2_link": "/about",
            "nav3_label": "Contact",
            "nav3_link": "/contact",
            "cta_text": "Get Started",
            "cta_link": "/signup"
        }
        const headerSchema = {
            "logo_text": "text",
            "nav1_label": "text",
            "nav1_link": "text",
            "nav2_label": "text",
            "nav2_link": "text",
            "nav3_label": "text",
            "nav3_link": "text",
            "cta_text": "text",
            "cta_link": "text"
        }
        const headerHtml = `<header class="w-full bg-white shadow-md" data-section="header">
                            <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                                <div class="text-xl font-bold text-blue-600" data-placeholder="logo_text">
                                {{logo_text}}
                                </div>
                                <nav class="hidden md:flex space-x-6">
                                <a href="{{nav1_link}}" class="text-gray-700 hover:text-blue-600" data-placeholder="nav1">
                                    {{nav1_label}}
                                </a>
                                <a href="{{nav2_link}}" class="text-gray-700 hover:text-blue-600" data-placeholder="nav2">
                                    {{nav2_label}}
                                </a>
                                <a href="{{nav3_link}}" class="text-gray-700 hover:text-blue-600" data-placeholder="nav3">
                                    {{nav3_label}}
                                </a>
                                </nav>
                                <a href="{{cta_link}}" 
                                class="text-black px-4 py-2 rounded-lg"
                                data-placeholder="cta">
                                {{cta_text}}
                                </a>
                            </div>
                            </header>`

        await db.query(`Insert into sections(template_id, section_order,is_mandatory, section_type, section_html, changed_data, default_data, element_schema )  values ($1,$2,$3,$4,$5, $6, $7,$8)`, [id, 10, true, 'header', headerHtml, {}, headerDefaultData, headerSchema]);

        const footerDefaultData = {
            "brand_name": "MyBrand",
            "brand_desc": "Building amazing web experiences.",
            "link1_label": "Home",
            "link1_url": "/",
            "link2_label": "Services",
            "link2_url": "/services",
            "link3_label": "Contact",
            "link3_url": "/contact",
            "social1_name": "Instagram",
            "social1_link": "#",
            "social2_name": "LinkedIn",
            "social2_link": "#",
            "year": "2026"
        }
        const footerSchema = {
            "brand_name": "text",
            "brand_desc": "text",
            "link1_label": "text",
            "link1_url": "text",
            "link2_label": "text",
            "link2_url": "text",
            "link3_label": "text",
            "link3_url": "text",
            "social1_name": "text",
            "social1_link": "text",
            "social2_name": "text",
            "social2_link": "text",
            "year": "text"
        }
        const footerHtml = `<footer class="bg-gray-900 text-black py-10" data-section="footer">
                            <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                                <div data-placeholder="brand">
                                <h2 class="text-xl font-semibold">{{brand_name}}</h2>
                                <p class="text-gray-400 mt-2">{{brand_desc}}</p>
                                </div>
                                <div>
                                <h3 class="font-semibold mb-3">Quick Links</h3>
                                <ul>
                                    <li>
                                    <a href="{{link1_url}}" 
                                        class="text-gray-400 hover:text-white"
                                        data-placeholder="link1">
                                        {{link1_label}}
                                    </a>
                                    </li>   
                                    <li>
                                    <a href="{{link2_url}}" 
                                        class="text-gray-400 hover:text-white"
                                        data-placeholder="link2">
                                        {{link2_label}}
                                    </a>
                                    </li>
                                    <li>
                                    <a href="{{link3_url}}" 
                                        class="text-gray-400 hover:text-white"
                                        data-placeholder="link3">
                                        {{link3_label}}
                                    </a>
                                    </li>
                                </ul>
                                </div>
                                <div>
                                <h3 class="font-semibold mb-3">Follow Us</h3>
                                <div class="flex space-x-4">
                                    <a href="{{social1_link}}" 
                                    class="text-gray-400 hover:text-white"
                                    data-placeholder="social1">
                                    {{social1_name}}
                                    </a>
                                    <a href="{{social2_link}}" 
                                    class="text-gray-400 hover:text-white"
                                    data-placeholder="social2">
                                    {{social2_name}}
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div class="text-center text-gray-500 mt-8" data-placeholder="copyright">
                                © {{year}} {{brand_name}}. All rights reserved.
                            </div>
                            </footer>`
        await db.query(`Insert into sections(template_id, section_order,is_mandatory, section_type, section_html, changed_data, default_data, element_schema)  values ($1,$2,$3,$4,$5,$6,$7,$8)`, [id, 1000, true, 'footer', footerHtml, {}, footerDefaultData, footerSchema]);

        const sections = await db.query(`SELECT * FROM sections WHERE template_id = $1 ORDER BY "section_order"`, [id]);

        res.json({ id, name: defaultName, sections: sections.rows, defaultPageId: pageId });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server side error");
    }
}

exports.addSection = async (req, res) => {
    try {
        const { tempId, pageId, prevOrder, nextOrder } = req.body;
        if (!tempId || !pageId || prevOrder == null || nextOrder == null) {
            return res.status(400).json({ message: "templateId, pageId, and orders required" });
        }
        const order = (Number(prevOrder) + Number(nextOrder)) / 2;
        await db.query(`Insert into sections(template_id, page_id, section_order, is_mandatory, section_type, section_html, changed_data, default_data, element_schema) values($1,$2,$3,$4,$5,$6,$7,$8,$9)`, [tempId, pageId, order, false, 'other', '', {}, {}, {}]);
        const middleSections = await db.query(` SELECT * FROM sections WHERE section_type = 'other' AND page_id = $1 ORDER BY section_order`, [pageId]);
        res.status(200).json({ middleSection: middleSections.rows });
    } catch (err) {
        console.error("db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.updateSection = async (req, res) => {
    try {
        const { sectionId, html, schema, defaultData, changedData } = req.body;
        // res.json(req.body);
        if (!sectionId) {
            return res.status(400).json({ message: "Section ID is required" });
        }

        await db.query(`UPDATE sections SET section_html = $1, element_schema = $2, default_data = $3, changed_data = $4 WHERE id = $5`, [html, schema, defaultData, changedData, sectionId]);

        res.status(200).json({ message: "Section updated successfully" });
    } catch (err) {
        console.error("updateSection db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.reorderSections = async (req, res) => {
    try {
        const { templateId, sectionId, prevOrder, nextOrder } = req.body;
        if (!templateId || !sectionId || prevOrder == null || nextOrder == null) {
            return res.status(400).json({ message: "Invalid request data" });
        }

        const newOrder = (Number(prevOrder) + Number(nextOrder)) / 2;
        await db.query(`UPDATE sections SET section_order = $1 WHERE id = $2 AND template_id = $3`, [newOrder, sectionId, templateId]);

        res.status(200).json({ message: "Section order updated successfully", newOrder });
    } catch (err) {
        console.error("reorderSections db err", err);
        res.status(500).json({ message: "Server error" });
    }
}


exports.updateTemplateName = async (req, res) => {
    try {
        const { templateId, name } = req.body;
        if (!templateId || !name) {
            return res.status(400).json({ message: "Template ID and name are required" });
        }

        await db.query(`UPDATE templates SET name = $1 WHERE id = $2`, [name, templateId]);

        res.status(200).json({ message: "Template name updated successfully" });
    } catch (err) {
        console.error("updateTemplateName db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.getAllTemplates = async (req, res) => {
    try {
        const result = await db.query(`SELECT t.*, (SELECT json_agg(s.* ORDER BY s.section_order)  FROM sections s WHERE s.template_id = t.id) as sections FROM templates t  ORDER BY t.id DESC  `);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("errorrrrr", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.deleteTemplate = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Template ID is required" });
        }

        // Delete sections first due to foreign key relationship (or just to be safe)
        await db.query(`DELETE FROM sections WHERE template_id = $1`, [id]);
        
        // Delete the template
        const result = await db.query(`DELETE FROM templates WHERE id = $1`, [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: "Template not found" });
        }

        res.status(200).json({ message: "Template and its sections deleted successfully" });
    } catch (err) {
        console.error("deleteTemplate db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.getTemplateSections = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "Template ID is required" });
        }

        const sections = await db.query(`SELECT * FROM sections WHERE template_id = $1 ORDER BY "section_order"`, [id]);
        res.status(200).json(sections.rows);
    } catch (err) {
        console.error("getTemplateSections db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.deleteSection = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query(`DELETE FROM sections WHERE id = $1`, [id]);
        res.status(200).json({ message: "Section deleted" });
    } catch (err) {
        console.error("deleteSection db err", err);
        res.status(500).json({ message: "Server error" });
    }
}

exports.duplicateSection = async (req, res) => {
    try {
        const { id } = req.params;
        const { nextOrder } = req.body;
        
        const original = await db.query(`SELECT * FROM sections WHERE id = $1`, [id]);
        if (original.rowCount === 0) {
            return res.status(404).json({ message: "Section not found" });
        }
        
        const s = original.rows[0];
        // If nextOrder is not provided, use a default increment
        const order = (Number(s.section_order) + Number(nextOrder || s.section_order + 100)) / 2;
        
        const result = await db.query(
            `INSERT INTO sections(template_id, page_id, section_order, is_mandatory, section_type, section_html, changed_data, default_data, element_schema, collection_id) 
             VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [s.template_id, s.page_id, order, false, s.section_type, s.section_html, s.changed_data, s.default_data, s.element_schema, s.collection_id]
        );
        
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("duplicateSection db err", err);
        res.status(500).json({ message: "Server error" });
    }
}
