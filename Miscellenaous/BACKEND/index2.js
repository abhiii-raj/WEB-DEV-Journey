const express = require("express");
const app = express();

const port = 8080;

app.get("/register", (req,res) => {
    let {user, pass} = req.query;
    res.send(`<h1>Welcome ${ user }, on the page.... (GET request) </h1>`); 
});

app.post("/register", (req, res) => {
    let {user, pass} = req.body;  //not req.params but req.body
    res.send(`<h1>Welcome ${ user }, on the page.....(POST request) </h1>`);
});

app.listen(port, () => {
    console.log(`listening on port ${ port }`);
});