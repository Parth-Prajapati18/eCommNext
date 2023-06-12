import { createPool} from 'mysql2';

export const pool = createPool({
    host: '54.39.132.104',
    user: 'devparthp_myApp_db',
    password: 'B7KyDa%HrMu^2*hL@pIljxIT@k5v5ig&6Y#p$JsFKG#Bu2*WQOx&*Sb&QC#X2B0s73',
    database: 'devparthp_myApp',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0        
});


