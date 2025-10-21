const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend5",
    password: "Admin@123"
});

let query = "SELECT * FROM Employee"; 
//either you can make a variable to store the query or pass it directly
try{
    connection.query(query, (err, result) =>{
        if(err) throw err;
        console.log(result); //result is an array

        connection.end();
    });
}catch(err){
    console.log(err);
}