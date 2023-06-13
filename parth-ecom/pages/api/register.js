import {connection} from './lib/db.js'

export default function handler(req, res) {
    const { username, password } = req.body;

    connection.connect();

    const query = 'INSERT INTO user_login (user_email, user_password) VALUES (? , ?)' ;
    const values = [username, password];

    connection.query(query, values, (error, results) => {
        if (error) {
          console.error('Error inserting login data: ', error);
          res.status(500).json({ message: 'Error inserting login data' });
        } else {
          res.status(200).json({ message: 'Login data inserted successfully' });
        }
      });

    connection.end();
}






// connection.connect();

// //Middleware to parse the request body
// app.use(express.urlencoded({extended: true}));

// app.post( '/api/register', (req,res) => {
//     const {username, password} = req.body;

//     pool.getConnection( (err, connection) => {
//         if(err) {
//             console.error('Error connecting to MySQL:', err);
//             res.status(500).json({ error: 'Error connecting to MySQL' });
//             return;
//         }

//         const query = 'INSERT INTO user_login (user_email, user_password) VALUES (? , ?)' ;
//         const values = [username, password];

//         connection.query(query, values, (err, results) => {
//             connection.release();
//             if (err) {
//                 console.error('Error executing MySQL query:', err);
//                 res.status(500).json({ error: 'Error executing MySQL query' });
//                 return;
//             };
            
//             res.json({ message: 'Item inserted successfully' });
//         });
//     });
// });

// export default app;