const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));


app.get("/",(req, res) => {
    res.send("welcome to the home page...");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instadata = require("./data.json");
    const user = instadata[username];
    console.log(user);
    res.render("instagram.ejs", { data :user });
});

app.listen(port, ()=> {
    console.log(`server is listening to port ${ port }`);
})

