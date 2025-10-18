const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();
const path = require("path");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));


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

// to fetch and show total number of users on our app....
app.get("/", (req, res) => {
    let q = "SELECT COUNT(*) FROM myuser";
    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            let count = result[0]["COUNT(*)"]; 
            //agar count(*) likhte ho toh value nahi aayegi homepage per
            res.render("home.ejs", { count }); 
        });
    } catch (err) {
        console.log(err);
        res.send("some error in database");
    }
});

//to fetch and show userid, name, gmail on our app;

// just to check whether the route is functional or not
// app.get("/user",(req, res) => {
//     res.send("success...");
// });


app.get("/user", (req, res) =>{
    let q = "SELECT id, username, email FROM myuser";
    try{
        connection.query(q, (err, users) => {
        if(err) throw err;
        res.render("showusers.ejs", { users });
    });
    }catch(err){
        console.log(err);
        res.send("some error occured in database.");
    }
});



app.listen("8080", () => {
    console.log("server is listening to port 8080");
});