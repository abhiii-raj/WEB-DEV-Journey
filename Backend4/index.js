const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

let posts = [
    {
        username: "Abhi Raj",
        content: "I have received an award",
    },
    {
        username: "Apna College",
        content: "I love Coding",
    },
    {
        username: "Shubham Raj",
        content: "I got selected for my 1st internship..",
    }
]


app.get("/", (req, res) => {
    console.log("request received..");
    res.send("success");
});

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    console.log(req.body);
    posts.push({username, content});
    // res.send("content posted");
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`server is listening to port ${ port }`);
});
