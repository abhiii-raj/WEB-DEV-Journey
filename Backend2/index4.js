const express = require("express");
const app = express();

let port = "8080";
//request sent on home page
app.get("/" , (req, res) => {
    console.log("request received.");
    res.send("on the home page..");
});

//single path parameters
app.get("/:username",(req, res) => {
    let {username} = req.params;
    console.log("path parameters invoked..");
    res.send(`welcome to the page of ${ username }`);
});

//multiple path parameters
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    console.log("multiple path parameters..");
    res.send(`Welcome to the page @${ username } and id is ${id}`);
});

//listening to all requests.
app.listen(port, () =>{
    console.log(`server is listening to port ${ port }`);
});