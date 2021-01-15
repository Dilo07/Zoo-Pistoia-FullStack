const mysql = require('mysql');

let db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'porpenzo93',
    database: 'zoopistoia_user'
});

db.connect((err) => {
    if(err){
        console.log(err)
    }
});

module.exports = db;