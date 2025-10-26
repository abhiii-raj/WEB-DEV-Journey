const express = require("express");
const app = express();
let port = 8080;

const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/posts", (req, res) => {
    console.log("request received..");
    res.send("success");
});

app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});