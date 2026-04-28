const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Token missing" });
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: "Invalid token format" });
    }
    try {
        const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ error: "Invalid token" });
    }
};
module.exports = authMiddleware;