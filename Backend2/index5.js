const express = require("express");
const app = express();

let port = "8080";

//on the home page
app.get("/", (req, res) => {
    console.log("request received.");
    res.send("on the home page..");
});

app.get("/search", (req, res) => {
    let {q} = req.query;
    if(!q){
        res.send("no query..");
        return;
    }
    console.log(q);
    res.send(`query received at ${ q }`);
});

//listening to all the requests
app.listen(port, ()=>{
    console.log(`server is listening to port ${ port }`);
});