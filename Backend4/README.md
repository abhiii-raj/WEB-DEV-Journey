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