import {connection} from './lib/db.js'

export default function handler(req, res) {

    const { username, password, firstname, lastname } = req.body;
    const query = 'INSERT INTO user_login (user_email, user_password, firstname, lastname) VALUES (? , ?, ? , ?)' ;
    const values = [username, password, firstname, lastname];

    connection.connect();

    connection.query(query, values, (error) => {
        if (error) {
          console.error('Error inserting login data: ', error);
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