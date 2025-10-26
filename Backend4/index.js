const express = require("express");
const app = express();
const path = require("path");
let port = 8080;
const {v4 : uuidv4} = require("uuid");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended: true}));

app.use(express.json());

let posts = [
    {
        id: uuidv4(),
        username: "Abhi Raj",
        content: "I have received an award",
    },
    {
        id: uuidv4(),
        username: "Apna College",
        content: "I love Coding",
    },
    {
        id: uuidv4(),
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
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    // console.log(id);
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

// implementing patch request to edit specific post
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    console.log(id);
    console.log(newContent);
    res.send("patch is working..");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});


app.listen(port, () => {
    console.log(`server is listening to port ${ port }`);
});
