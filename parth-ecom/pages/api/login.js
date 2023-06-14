import { connection } from "./lib/db";

export default function handler(req,res){

    const { username, password} = req.body; 
    const query = 'SELECT user_email, user_password FROM user_login WHERE user_email=? AND user_password=?' ;
    const values = [username, password];

    connection.connect();

    connection.query(query, [username, password], (error, results) => {
        if (error) {
          console.error('Error inserting login data: ', error);
          res.status(500).json({ message: 'Invalid/User Do not exist' });
        } else {
          res.status(200).json({ message: 'Login data inserted successfully' });
        }
      });
    
      // Close the MySQL connection
      connection.end();
    


}