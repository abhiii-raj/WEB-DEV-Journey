# GET and POST Request type
Upto this point we have learnt about node js and it's framework and also about templating , through which we can create a template(view) and ejs file for a page which is using continously for every user.
It is like a layout, like the blueprint of a form , the form is created once and each candidate can fill it's information in this blueprint, in the same way templating works, 

Suppose you are on a instagram page and you are on your profile where you can see all the posts, followers count, followings count, and can edit your bio ,means the instagram company has to make layout for every user, the answer is big NOAH !!! the company makes a single page, layout using templating and based on user's data the page is shown/render to the user as a response..

So yeah, this is all about templating , sending / rendering dynamic web pages to the client as a response and also including static (css + js) files.

Now Let's get deeper into the Type of Requests.....

There are two types of requests a client can send to the server.
                1. GET  2. POST.

                1> GET
                > used to get some response.
                > data (additional information) sent in query strings.
                > since the length of url on browsers are limited , so we can send limited data with it.
                > every data is sent is of String type.
                > When we sent additional infom through query strings , Data is visible in url 
                    which makes it less secure for the sensitive data.
                > In short generally tabhi use karte hai jab koi response wapis chahiye 
                    hoti hai..
                    example -> google search

                2> POST 
                > Used to POST something(CREATE/WRITE/UPDATE)
                    (db ke andar kuch chnage karna chahte hai)
                > Data sent via request body..
                    example -> google drive per kuch upload karne ke liye request send karna hai
                Let's see this with the help of an example.
                        FRONTEND
                        |--index.html
                
                index.js file , index2.html file is a basic example 

# Handling GET requests
In order to handle get requests, all the data from the client comes into the query parameter of request object and we need to deconstruct the value.
                example.
                app.get("/register", (req, res) => {
                    let {user, pass} = req.query;
                    res.send(`<h1>Welcome to the page ${user}</h1>`);  a html based response.
                });

                make the index2.html page live, start the index2.js server

# Handling POST Requests
Since the data not comes in the query parameter of the request object, all the data comes into the body parameter of request so we need to handle the requests on the post type differently..

                if you can simply print the console.log(req.body);
                express will not understand this, and undefined is printed.

                app.get("/register", (req, res) => {
                    console.log(req.body);              <!-- undefined -->
                });
                
                <!-- data toh hai lekin express ko samajh nahi aa rha-->
                
                we need to parse this, to convert it into express readable form 
                1> When the data is url encoded
                __app.use(express.urlencoded({extended: true}));
               |   the parameter inside the use is a middleware, we'll discuss it later.
               |--- kisi bhi type ke liye chalega , agar data url ke form mein ata ho toh 
                    usse parse kar do   

                app.use(express.urlencoded({extended: true}));

                app.post("/register", (req, res) => {
                    let {user, pass} = req.body;
                    res.send(`<h1>Welcome to the page ${user}</h1>`);
                });

                in case we are sending json data then we can use,
                Agar aap chahte hai ki express json data ko bhi padh paaye then you can use,
                app.use(express.json()); 


# Revisiting OOPS in JS
