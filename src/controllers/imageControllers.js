const db = require('../database/config');
const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

exports.upload = upload;

exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const filename = req.file.filename;
        const url = `http://localhost:9000/uploads/${filename}`;

        const result = await db.query(
            `INSERT INTO images (filename, url) VALUES ($1, $2) RETURNING *`,
            [filename, url]
        );

        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error("uploadImage db err", err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getImages = async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM images ORDER BY created_at DESC`);
        res.status(200).json(result.rows);
    } catch (err) {
        console.error("getImages db err", err);
        res.status(500).json({ message: "Server error" });
    }
};
