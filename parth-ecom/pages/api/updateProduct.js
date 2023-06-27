import { connection } from "./lib/db";

export default function handler(req, res) {
  
  const { id } = req.body; // Extract the 'id' from the request body

  connection.connect((error) => {
    if (error) {
      console.error("Error connecting to the database:", error);
      res.status(500).json({ error: "An error occurred while connecting to the database" });
    } else {
      connection.query(
        'UPDATE products SET quantity = quantity - 1 WHERE ID = ?',
        [id],
        (error) => {
          if (error) {
            console.error('Error updating quantity:', error);
            res.status(500).json({ error: 'An error occurred while updating the quantity.' });
          } else {
            res.status(200).json({ message: 'Quantity updated successfully.' });
          }
        }
      );
    }
  });

  connection.end();
};
