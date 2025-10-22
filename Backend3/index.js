const express = require("express");
const app = express();

const port = 8080;
app.set("view engine","ejs");

// app.get("/", (req, res) => {
//     res.send("this is root");
// });

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});