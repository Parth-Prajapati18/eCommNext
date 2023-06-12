import express from 'express';
import { pool } from '../lib/db'
const app = express();


//Middleware to parse the request body
app.use(express.json());

app.post( '/api/register', (req,res) => {
    const {username, password} = req.body;

    logins.push({username, password});

    pool.getConnection( (err, connection) => {
        if(err) {
            console.error('Error connecting to MySQL:', err);
            res.status(500).json({ error: 'Error connecting to MySQL' });
            return;
        }

        const query = 'INSERT INTO user_login (user_email, user_password) VALUES (? , ?)' ;
        const values = [username, password];

        connection.query(query, values, (err, results) => {
            connection.release();
            if (err) {
                console.error('Error executing MySQL query:', err);
                res.status(500).json({ error: 'Error executing MySQL query' });
                return;
            };
            
            res.json({ message: 'Item inserted successfully' });
        });
    });
});

export default app;