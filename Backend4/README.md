Till now we have learn't how to handle GET and POST requests API's.
In this section we will be learning about how to handle more API's like PATCH, DELETE requests.
We will discuss these things with the help of restful API's.
A very important concept of WEB-DEVELOPEMENT, and with the help of this we write API's.

As a beginner it might be possible as it looks confusing but we are learning this API's in the entire section.

Let's Deep dive into this....

# REST -> Representational State Transfer
Ham kya karte hai backend ke andar express use karte hai aur API's banate hai and inhi api's ke collection ko web-services bol rhe hai.

REST is an architectural style that defines a set of constraints to be used for creating web services.

                REST -------RESTful API's(those api's which applies the rule of REST)
REST is not a package which needs to be installed, these are just rules.

like in JS by convention the name of any class starts with the Uppercase.

                class Person{}, class Student{}

Generally we use RESTful api's to perform CRUD operation.
After completing of the chapter visit 
https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/  , must read

                /something -> API path

                DELETE/user
                HTTP request jo jayegi DELETE ke throught jayegi

# CRUD Operations
Whenever we perform CRUD operations, it include various HTTP requests,
resource -> the thing on which we are performing our CRUD operation.

                for example
                if the API's we are writing is for tweets(twitter) then tweets is the resource.
                if the API's is for users then users is resource
                
                Since we are building our Quora Post
                for us the resource will be posts.

> GET retrieves resources (we will use to perform READ).
> POST submits a new data to the server (use to create).
> PUT updates exisiting data (to perform UPDATE operation on the existing data PUT request is used).(agar pura data update karna hai toh PUT request).
> PATCH update existing data partially.(kuch chize updates karni ho toh).
> DELETE used to delete data.


GET -> /posts to get data for all posts -> route(INDEX)
POST -> /posts to add a new post -> route (CREATE)
GET -> /posts/:id to get one post(using id) -> route (VIEW)
PATCH -> /posts/:id to update specific data -> route (UPDATE)
DELETE -> /posts/:id to delete specific post -> route (DESTROY)

to start with intialize package.json file and install express
                npm init -y
                npm i express
                npm i ejs
                npm i path
                npm i nodemon (in case you haven't installed globally);

                <!-- do the basic settings and check for the server 
                create two folders , views and public -->

                <!-- to use view  -->
                app.set("view engine", "ejs");
                app.set("views", path.join(__dirname."/views"));

                <!-- use middleware to help express to parse the data which comes from frontend or form the client side -->

                app.use(express.urlenconded({extended: true}));
                app.use(express.json());

                <!-- jab bhi frontend se ya client side se form submit hota hai aur server ke pass aata hai using PUT request toh express usko read nahi kar pata hai , jisse hamne parse karna hota hai.  -->


Implementing GET/posts
GET  /posts   to get data for all posts 
We have not anything to store data, for this we'll be using an array

                let posts = [
                    {
                        username: "Abhi Raj",
                        post: "I have received an award",
                    },
                    {
                        username: "Apna College",
                        post: "I love Coding",
                    },
                    {
                        username: "Shubham Raj",
                        post: "I got selected for my 1st internship..",
                    }
                ]

                It is good practise to use comma after last property in each object

                <% for(let post of posts) {%>
                    <li> <%= post.username%> </li>
                    <li> <%= post.post%> </li>
                    </br>
                <% } %>

                you can use this for loop to check your data.
                only to check data.

index.js + styles.css + indes.ejs since 

at this point index route have been created

Implementing POST/posts
When we submit the username and posts from the posts/new then the form will send a post request to the backend api's to store the data. and then redirect to the posts page.
For this to implement..

                <form method= "post" action="/posts">
                    <input type = "text" placeholder = "username" class = "user">
                    <textarea class = "content" placeholder = "write your content" ></textarea>
                    <button> Submit the post </button>
                </form>
                
                by default after submitting form it will send a get request type , so to avoid this 
                we explictily define a method attribute set to post.

                as soon as the form is submitted it will send a post request to the url /posts 
                and it will be added to the backend (in this case -> posts array).

                app.post("/posts", (req, res) => {
                    let {username , content} = req.body;
                    posts.push({username, content});
                    res.redirect("/posts");  //by default a request is sent of get type.
                });

IMPLEMENTING GET/posts:id
To check one post of user by using the id. (view route).
Since we have not mentioned id's with our posts. so we need to modify it.

                let posts = [
                    {
                        id: 1,
                        username: "abhiraj",
                        content: "hii i'm learning web-dev",
                    },
                    {
                        id: 2,
                        username: "shubham",
                        content: "hii i'm learning generative ai",
                    },
                    {
                        id: 3,
                        username: "shubhuu",
                        content: "got my first internship",
                    },
                ]

                it is just and example with mentioned id's.

                app.get("/posts/:id", (req, res) => {
                    let {id} : req.params;
                    let post = posts.find((p) => id === p.id);
                    console.log(post); //just for checking.

                });


                make another show.ejs file that will recieve the post and show the content based on id

                inside show.ejs

                <h1> Here is your post in deatil </h1>
                <h2>Post id: <%= post.id %></h2>
                <div class= "post">
                    <h2 class = "user"> <%= post.username %> </h2>
                    <p> <%= post.content %> </p>
                </div>

                app.get("/posts/:id", (req, res) => {
                    let {id} = req.params;
                    let post = posts.find((p) => id === p.id);
                    res.redirect("show.ejs", { post });
                });

                agar ham koi dura id search karenge aur woh id database/posts mein present nahi hai toh agar console.log kar rhe hai tab toh undefined dkhayega but, 
                uss data ko render karwa rahe hai then error will be occured in that case, lekin abhi ke liye maan ke chalenge ki ham valid id ke hi babsis per post dekhe rhe hai.

                kisis aur page se kisi aur page mein redirect hona hai toh ham anchor tag ka use kar rhe hai , then usmer href mein ham 
                http likhenge n ki https

                <a href="http://localhost:8080/posts/<%= post.id %>"> View in detail </a> //this is good practise
                <a href="https://localhost:8080/posts/<%= post.id %>"> View in detail </a> //it will cause an error


Now when you add a post and submit it then it gets shown on the posts page but when you press view in detail, then the page is not shown to you, because it doesn't have any id , and you are viewing each post based in id's.

Request toh jaa rhi hai lekin kyuki id assign nahi hai toh problem hai,

# Creating id's (using UUID);
We can do it in a manual way, or we can do it automatically using UUIDs package
Universal Unique Identifier -> it will automatically generate unique id's (different id's) of string type.

                to install the package
                npm i uuid

                require the package
                const{v4 : uuidv4} = require("uuid");

                there's a function inside the uuid package as uuidv4();
                replace the id's where you have hardcode the id's

                and when you submit the form also include it.

                app.post("/posts", (req, res) => {
                    let {username, content} = req.body;
                    let id = uuidv4();    //make change to this (use id only)
                    posts.push({id, username, content});  //passed the newid
                    res.redirect("/posts");
                });

# IMPLEMENTING PATCH /posts/:id
update route -> to update specific post
because we are editing specific data that's why we are using pach but you can also use put request

                checking 
                app.patch("/posts/:id", (req, res) => {
                    let {id} = req.params;
                    console.log(id);
                    res.send("patch is working..");
                });

                we will send patch request from hoppscotch instead of directly sending

                //implementing patch request to edit specific post
                app.patch("/posts/:id", (req, res) => {
                    let {id} = req.params;
                    let newContent = req.body.content;
                    console.log(id);
                    console.log(newContent);
                    res.send("patch is working..");
                });

We will create a route for this before we will make a link in the index.ejs for edit details

                <a href="http://localhost:8080/posts/<%= post.id%>/edit">Edit details</a>