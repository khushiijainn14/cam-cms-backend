const db = require('../database/config');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

//We are getting the name, email, password , id- which will be auto generated and role which will be user by default

exports.Register = async (req, res) => {
    const { name, email, password } = req.body;

    const userCheck = await db.query('SELECT * FROM users WHERE email = $1', [email]);

    if (userCheck.rows.length > 0) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await argon2.hash(password);
    //put data in db 
    const insert_query = 'INSERT INTO users(name,email,password,role) VALUES ($1, $2, $3, $4)';
    const role = 'user';
    const values = [name, email, hashedPassword, role];
    try {
        await db.query(insert_query, values);
        res.status(201).json({
            message: "Registration successful"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Registration failed"
        });
    }
}

exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await db.query(`SELECT * FROM users WHERE email=$1`,[email]);
        if (result.rows.length === 0) {
            return res.status(400).json({ message: "User not found" });
        }
        const user = result.rows[0];
        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials! Password does not matched " });
        }
        const accessToken = jwt.sign(
            { id: user.id, role: user.role },
            process.env.ACCESS_SECRET,
            { expiresIn: "15m" }
        );

        const refreshToken = jwt.sign(
            { id: user.id },
            process.env.REFRESH_SECRET,
            { expiresIn: "30d" }
        );

        const expiryDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

        await db.query(`INSERT INTO refresh_tokens(user_id,token,expires_at)VALUES($1,$2,$3)`,[user.id, refreshToken, expiryDate]);

        res.json({
            message: "Login successful",
            role: user.role,
            accessToken,
            refreshToken
        });

    } catch (err) {

        console.error("LOGIN ERROR:", err);
        res.status(500).json({ error: "Server error" });

    }
};

exports.refreshAccessToken = async (req, res) => {

    const { refreshToken } = req.body;
    if (!refreshToken) {
        return res.status(401).json({ error: "Refresh token required" });
    }
    try {
        const result = await db.query(`SELECT * FROM refresh_tokens WHERE token=$1 AND expires_at > NOW()`,[refreshToken]);
        if (result.rows.length === 0) {
            return res.status(403).json({ error: "Invalid refresh token" });
        }
        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_SECRET
        );

        const newAccessToken = jwt.sign(
            { id: decoded.id },
            process.env.ACCESS_SECRET,
            { expiresIn: "15m" }
        );
        res.json({ accessToken: newAccessToken });
    } catch (err) {
        console.error(err);
        res.status(403).json({ error: "Invalid token" });

    }
};

exports.Logout = async (req, res) => {
    const { refreshToken } = req.body;
    try {
        await db.query("DELETE FROM refresh_tokens WHERE token=$1",[refreshToken]);
      res.json({ message: "Logged out successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Logout failed" });
    }
}

