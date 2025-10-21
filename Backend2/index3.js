const express = require("express");
const app = express();

let port = "8080";

//request type get
app.get("/", (req, res) => {
    console.log("request received on get");
    res.send("on the home page..");
});

//request type get
app.get("/help", (req, res) => {
    console.log("request received on get");
    res.send("on the help page..");
});

//request type post
app.post("/", (req, res) => {
    console.log("request received on the post");
    res.send("on the post home page");
});

// request type post
app.post("/help", (req, res) => {
    console.log("request received on the post");
    res.send("on the post help page");
});

//listening to all requests.
app.listen(port, () => {
    console.log(`server is listening to port ${ port }`);
});