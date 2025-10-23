const express = require("express");
const app =express();
const path = require("path");
let port = 8080;

app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));



app.get("/", (req, res) => {
    console.log("request received on home..");
    res.render("home3.ejs");
});

app.listen(port, () => {
    console.log(`server is listening on port: ${ port }`);
});