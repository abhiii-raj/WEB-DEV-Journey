const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/rolldice", (req, res) => {
    let data = Math.floor(Math.random() * 6) + 1; //we are assuming data comes from database
    console.log("dice rolled.");
    res.render("home2.ejs", {num : data, name: "Abhi"});
});

// app.get("/rolldice", (req, res) => {
//     let data = Math.floor(Math.random() * 6) + 1; //we are assuming data comes from database
//     console.log("dice rolled.");
//     res.render("home2.ejs", {data});
// });

app.get("/",(req, res) => {
    console.log("request received on home page.");
    res.send("success");
});

app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});