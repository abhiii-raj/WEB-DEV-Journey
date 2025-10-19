const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
//kyuki ham patch ka request bhej rhe hai uske saath mein form ka data aayega toh uss form ke data ko parse karne ke liye
app.use(express.urlencoded({extended: true}));
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

//EDIT Route -> Getting the form to edit route
app.get("/user/:id/edit", (req, res) =>{
    let { id } = req.params;
    let q = `SELECT * FROM myuser WHERE id = '${ id }'`;

    try{
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", {user});
        });
    }catch(err){
        console.log("error in db");
        res.send("some error in database.");
    }
});

//UPDATE ROUTE -> Actual update in the database..
//install and require the method override first
app.patch("/user/:id", (req, res) => {
    let { id } = req.params;
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM myuser WHERE id = '${id}'`;

    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let user = result[0];
            // authentication
            if(formPass != user.pass){
                res.send("wrong password");
            }else{
                let q2 = `UPDATE myuser SET username = '${newUsername}' WHERE id= '${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        res.send("some error in db.");
    }
});

//if i make the server to stop these changes are permanent because we are directly manipulating with the database , all the chnages done persist in the database

app.listen("8080", () => {
    console.log("server is listening to port 8080");
});