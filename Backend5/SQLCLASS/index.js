const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend5",
    password: "Admin@123"
});

let query = "SELECT * FROM Employee"; 

try{
    connection.query(query, (err, result) =>{
        if(err) throw err;
        console.log(result);

        connection.end();
    });
}catch(err){
    console.log(err);
}