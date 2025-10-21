const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "backend5",
    password: "Admin@123"
});

//to run a query using placeholder;
let query = "INSERT INTO Employee (id, name, email, password) VALUES (?,?,?,?)";

let user = [126, "Shalini", "shalini@gmail.com","shalini@123"];

let selQuery = "select * from employee";
try{
    connection.query(selQuery, (err, result) =>{
        if(err) throw err;
        console.log(result); //result is an array

        connection.end();
    });
}catch(err){
    console.log(err);
}