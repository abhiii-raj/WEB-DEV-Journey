const express = require("express");
const app = express();
const path = require("path");

const port = 8080;
app.set("view engine","ejs");

//by setting up this you can render the ejs file even from the parent folder..
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});