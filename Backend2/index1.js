const express = require("express");
const app = express();

let port = "8080";

//for the home route
app.get("/", (req, res) => {
    console.log("request received");
    res.send("success..");
});


//for the search route
app.get("/search", (req, res) => {
    console.log("request received");
    res.send("on the search page..");
});


//for the help route
app.get("/help", (req, res) => {
    console.log("request received");
    res.send("on the help page")
});


// //in order to send response when the path is not mentioned
// app.get('*', (req, res) => {
//     console.log("request received but path not exists.");
//     res.send("path no longer exists");
// });


//listening to all the requests..
app.listen(port, () => {
    console.log(`server is listening to port ${ port }`);
});