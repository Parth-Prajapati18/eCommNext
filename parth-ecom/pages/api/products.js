import { connection } from "./lib/db";

export default function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const userquery = 'SELECT * FROM products';
      connection.query(userquery, (error, results) => {
        if (error) {
          console.error('Error executing query:', error);
          return res.status(500).json({ message: 'Server error' });
        }
        console.log(results);
        return res.status(200).json({ message: results });
      });
    } catch (error) {
      console.error('Query error:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  } else {
    return res.status(400).json({ message: 'Invalid method' });
  }
}
