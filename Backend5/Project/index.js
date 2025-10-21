const mysql = require("mysql2");
const express = require("express");
const app = express();

const path = require("path");
app.use(express.urlencoded({ extended: true })); // parse POST data
app.set("view engine","ejs");  //set EJS as template engine
app.set("views",path.join(__dirname,"/views")); //EJS folder


let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"backend5",
    password: "Admin@123"
});

//home route
app.get("/",(req, res) =>{
    let q = "SELECT COUNT(*) FROM Student";
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let count = result[0]["COUNT(*)"];
            res.render("home.ejs", { count });
        });
    }catch(err){
        res.send("some error in database.");
    }
});

//user details route
app.get("/user",(req, res) =>{
    let q = "SELECT id, name, cgpa, phone, email FROM Student";
    try{
        connection.query(q, (err, users) =>{
            if(err) throw err;
            console.log(users);
            res.render("showusers.ejs", { users });
        });
    }catch(err){
        res.send("some error in database..");
    }
});

app.post('/users/add', (req, res) => {
    const { id, name, cgpa, phone, email } = req.body;
    users.push({ id: parseInt(id), name, cgpa: parseFloat(cgpa), phone, email });
    res.redirect('/users');
});

app.listen("8080" , ()=> {
    console.log(`server is listening to port 8080`);
});