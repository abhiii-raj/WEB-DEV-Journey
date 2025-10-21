const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();


let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    database: "backend5",
    password: "Admin@123"
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

// app.get("/", (req, res) => {
//     res.send("Welcome to Homepage");
// });

app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM myuser";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]["COUNT(*)"]);
            res.send(result[0]["COUNT(*)"]); 
            // //ONLY 100 GET PRINTED
            // connection.end();
        });
    } catch (err) {
        console.log(err);
        res.send("some error occured in database");
    }
});

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});




// try{
//     connection.query(query,[data],(err, result) => {
//         if(err) throw err;
//         console.log(result);

//         connection.end();
//     })
// }catch(err){
//     console.log(err);
// }