const mysql = require('mysql2');
require('dotenv/config')

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

async function connection(){
    await pool.connect((err) => {
        if(err) {
            throw err;
        }
        console.log('MySql connected!');
    })
    pool.destroy()
}

module.exports = {connection, pool}