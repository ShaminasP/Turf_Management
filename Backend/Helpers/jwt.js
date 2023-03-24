import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
export const authVerify = (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if (!token) return res.status(403).send("Access Denied");
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: "Invalid token" })
    }
}