const express = require("express");
const app = express();

const path = require("path");
let port = 8080;

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/", (req, res) => {
    console.log("request received.");
    res.render("home1.ejs");
});

app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});