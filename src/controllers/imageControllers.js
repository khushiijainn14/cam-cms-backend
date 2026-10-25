const db = require('../database/config');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads folder exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

// Allowed MIME types and extensions
const ALLOWED_MIME_TYPES = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml'
];

const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];

// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname).toLowerCase();
        const baseName = path.basename(file.originalname, ext)
            .replace(/[^a-zA-Z0-9_-]/g, '_')
            .substring(0, 30);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${baseName}-${uniqueSuffix}${ext}`);
    }
});

// Configure file filter for image validation
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    const mime = file.mimetype.toLowerCase();

    if (!ALLOWED_EXTENSIONS.includes(ext) || !ALLOWED_MIME_TYPES.includes(mime)) {
        return cb(
            new Error('Unsupported file type. Only JPG, PNG, WEBP, GIF, and SVG images are allowed.'),
            false
        );
    }
    cb(null, true);
};

// 5 MB max file size
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5 MB
    },
    fileFilter: fileFilter
});

exports.upload = upload;

// Controller for image upload
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded or invalid file format" });
        }

        const filename = req.file.filename;
        const host = req.get('host') || 'localhost:9000';
        const protocol = req.protocol || 'http';
        const url = `${protocol}://${host}/uploads/${filename}`;

        try {
            const result = await db.query(
                `INSERT INTO images (filename, url) VALUES ($1, $2) RETURNING *`,
                [filename, url]
            );

            return res.status(201).json(result.rows[0]);
        } catch (dbErr) {
            // Delete orphaned file if DB insert fails
            if (req.file.path && fs.existsSync(req.file.path)) {
                try {
                    fs.unlinkSync(req.file.path);
                } catch (unlinkErr) {
                    console.error("Error deleting orphaned file:", unlinkErr);
                }
            }
            throw dbErr;
        }
    } catch (err) {
        console.error("uploadImage db err", err);
        return res.status(500).json({ message: "Server error saving image" });
    }
};

// Controller to fetch images with optional search
exports.getImages = async (req, res) => {
    try {
        const { search } = req.query;
        let query = `SELECT * FROM images`;
        const params = [];

        if (search && search.trim()) {
            query += ` WHERE filename ILIKE $1`;
            params.push(`%${search.trim()}%`);
        }

        query += ` ORDER BY created_at DESC`;

        const result = await db.query(query, params);
        return res.status(200).json(result.rows);
    } catch (err) {
        console.error("getImages db err", err);
        return res.status(500).json({ message: "Server error fetching images" });
    }
};
