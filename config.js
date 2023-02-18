const mysql = require('mysql')

const db = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '',
    database: 'latihan1'
})

db.connect((err)=>{
    if (err) throw err;
    console.log("sedang berjalan")
})

module.exports ={
    db
}