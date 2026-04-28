const db = require('../database/config');

exports.getCollections = async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM collections ORDER BY created_at DESC`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("getCollections db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.createCollection = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) return res.status(400).json({ message: "Collection name is required" });

        const result = await db.query(
            `INSERT INTO collections (name) VALUES ($1) RETURNING *`,
            [name]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("createCollection db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getCollectionItems = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await db.query(
            `SELECT * FROM collection_items WHERE collection_id = $1 ORDER BY created_at DESC`,
            [id]
        );
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("getCollectionItems db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.addCollectionItem = async (req, res) => {
    try {
        const { collectionId, data } = req.body;
        if (!collectionId || !data) {
            return res.status(400).json({ message: "collectionId and data are required" });
        }

        const result = await db.query(
            `INSERT INTO collection_items (collection_id, data) VALUES ($1, $2) RETURNING *`,
            [collectionId, data]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("addCollectionItem db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteCollectionItem = async (req, res) => {
    try {
        const { id } = req.params;
        await db.query(`DELETE FROM collection_items WHERE id = $1`, [id]);
        res.status(200).json({ message: "Item deleted" });
    } catch (err) {
        console.error("deleteCollectionItem db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.bindSectionToCollection = async (req, res) => {
    try {
        const { sectionId, collectionId } = req.body;
        await db.query(
            `UPDATE sections SET collection_id = $1 WHERE id = $2`,
            [collectionId || null, sectionId]
        );
        res.status(200).json({ message: "Section binding updated" });
    } catch (err) {
        console.error("bindSection db err", err);
        res.status(500).json({ message: "Server error" });
    }
};
