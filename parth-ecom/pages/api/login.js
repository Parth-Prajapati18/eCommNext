import { connection } from "./lib/db";
import bcrypt from 'bcrypt';
import Jwt  from "jsonwebtoken";

export default function handler(req,res){

  if (req.method === 'POST') {

    const { username, password} = req.body; 

  }


    const { username, password} = req.body; 
    const query = 'SELECT user_email, user_password FROM user_login WHERE user_email=? AND user_password=?' ;
    connection.connect();

    connection.query(query, [username, password], (error) => {
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

//johnsmith@gmail.com
//password