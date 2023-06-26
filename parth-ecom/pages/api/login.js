import { connection } from "./lib/db";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const userQuery = `SELECT * FROM user_login WHERE user_email = ?`;
      connection.query(userQuery, [username], async (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ Message: 'Server error' });
        }

        const userLog = results[0];

        if (!userLog) {
          return res.status(401).json({ Message: "User doesn't exist!" });
        }

        const passwordMatch = password === userLog.user_password;

        if (!passwordMatch) {
          return res.status(401).json({ Message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: userLog.user_Id }, process.env.JWT_SECRET, {
          expiresIn: '60s',
        });

        return res.status(200).json({ Message: "User Successfully Logged In!", token });
      });
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ Message: 'Server error' });
    }
  } else {
    return res.status(405).json({ Message: 'Method Not Allowed' });
  }
}
