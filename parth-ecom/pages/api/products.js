import { connection } from "./lib/db";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(400).json({ message: 'Invalid method' });
  }

  const token = req.headers.authorization?.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;
    console.log(decoded);

    const userquery = 'SELECT * FROM products';
    connection.query(userquery, (error, results) => {
      if (error) {
        console.error('Error executing query:', error);
        return res.status(500).json({ message: 'Server error' });
      }
      console.log(results);
      return res.status(200).json({ message: results, userId: userId });
    });
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
