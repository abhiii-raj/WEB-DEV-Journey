const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/", (req, res) => {
    const htmlString = "<h1>'Welcome to the Instagram'</h1>"
    res.send(htmlString);
});


app.get("/ig/:username", (req, res) => {
    let {username} = req.params;     //if we will use only username then it will be an oject
    console.log("request received..");
    res.render("insta.ejs",{ username });
});



app.listen(port, () => {
    console.log(`server is listening on port ${ port }`);
});

//since we have received a request to parameters to username
//we will use the same name to destruct the value into a object
//and we will also pass the same object into the argument

// below implementation is wrong one 
// app.get("/ig/:username", (req, res) => {
//     let username = req.params;
//     console.log("request received..");
//     res.render("insta.ejs",username);
// });

// below implementation is wrong one 
// app.get("/ig/:username", (req, res) => {
//     let user = req.params;
//     console.log("request received..");
//     res.render("insta.ejs",user);
// });