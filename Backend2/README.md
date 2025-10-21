# In this section we will learn about EXPRESS.
Before proceeding further we will talk Library vs FrameWork

            Library -> Collection of pre-written code that can be used to perform specific task.
                       ex. axios -> api's ko request send karne ka kaam karti hai.
            Framework -> Set of pre-written codes that provides a structure for developing software applications.
                            (web applications ka structure kaisa dikhna chahiye).
                       ex . express  


# Express
A Node.js web application framework that is used to developing web applications.
It is used for server side programming (backend ko build karne ke liye use hoti hai)
(server side ki applications ko banane mein help karta hai).

                
                               -> request ->
              client----------------------------------- server
            (frontend)         <- response <-          (backend)

Express is a package (contains various tools and utilities for building the server side)in the npm can be install using npm 

            npm install express or npm i express


# 4 Major uses for Express

            1-> Listen for incoming request..
                It listens for any type of request either it is GET, POST request..
            2-> Parse 
                Parse the request based on Node.js (jaruri nahi hai kis type ka request aayega).
            3-> Match responses with routes.(routes -> alag alag raste jinper ham request bhej sakte hai..).
                On which path does the request arrives and it matches the request as per that route..
            4-> Response
                Sends the suitable response based on the request.


# INSTALLING EXPRESS
Before installing we have to intitalise the package.json file.
            npm init
After initialising the package.json install express.
            npm i express
Create a file named index.js 
            touch index.js
            <!-- this index.js file will act as server -->
All these cretion and installation must be in the same directory.

Require the express 
                const express = require("express");
                <!-- express on the left side is a function -->
                const app = express();
                <!-- generally we store the value returned from the express in a variable name app -->
                <!-- the app is an object -->

                let port = 8080;
                <!-- Ports -> The logical endpoints of a network connection that is used to exchange information between a web-server and a web-client -->

                app.listen(port, ()=> {
                    console.log(`server is listening to port ${port}`)
                });

                <!-- listen(port, callback) is widely used function which always listens for an incoming request. -->
                <!-- ek web-server banata hai jo incoming api request ke liye listen karta rehta hai -->
                <!-- It accept two parameters 
                port -> on which port number the request is coming. (aisa point jaha ahamara client server ke saath baat karega).
                callback -> a function passed as an argument and is executed when a specific event or condition occurs
                within a parent function  jaise hi request aagayi ab kya execute hona chahiye-->

After executing app.listen() a continous process has begun, we can also say that server has started which constantly listen for the requests

                ctrl + c to exit from the server

if you open the port on your browser 
                localhost:8080
you will get to see that the server is set-up, and a message is shown as
                cannot GET /

which means server is set-up but it doesn't have any suitable response for that request.

for a resposnse we will use "use() method" which listens for any type of request

                app.use((req, res) => {
                    console.log("request received")
                });
                 
                express create the parameters (req, res) by default..


# SENDING A RESPONSE
                   
                 Sending a response
                      /    \
                     /      \
                    /        \
                request   response   (both are objects)

jo bhi http request aati hai woh text based (taaki dusri languages mein server hai woh bhi unko smjh paaye)hoti hai and express usko obj mein convert kar deti hai (parsing)

response object bahut hi versatile hoti hai jo kisi bhi type ke respeonse bhejne ke liye use hoti hai.
        
                res.send()
                -> you can send a string.
                    app.use((req, res) => {
                        console.log("request received");
                        res.send("success");  // displays on the client side
                    });

                -> you can send an array.
                    app.use((req, res) => {
                        console.log("request received");
                        res.send({name: "Abhi",age:21, city: "Patna"});
                    }); 
                
                -> you can send even a html code.
                    app.use((req, res) => {
                        console.log("request received..")
                        let code = "<h1>Sending response as an HTML code</h1>";
                        res.send(code);
                    });


# ROUTING
Routes -> these are the instructions that tell your app 
          how to respond  when someone visits a specific URL.
        It tells your app know what to do when someone visits a certain page.

        - A route is like a road sign: it says, 
            “If someone goes to /home, show them the homepage.”
        - It connects a URL path (like /about) with a function 
            that runs when someone visits that path.

On website, it is not necessary that there is only link..
and That's where the ROUTES comes in picture..
Alag - Alag chize alag-alag routes ke upper available hoti hai

                "/" or "/home" -> to go on the homepage
                "/search" to -> go on the searchpage
                "/help" -> to go on the help page


One Important thing whenever you are sending response using use() method , then on opening any route the response will be same.
            
                app.use((req, res) => {
                    res.send("success..");
                });

                localhost:8080/ -> success..
                localhost:8080/search -> success..
                localhost:8080/home -> success..
                localhost:8080/help -> success..

but it is not in practise, for a different route we want different response and generally it is in practise.
we will use "get()" method to send a response based on a specific route

Refer index1.js file for get() method use.
For a a path , there will be only one response , It is not possible to send multiple responses to a same path

if you go to another path and for that you haven't created a route then you will not get any response..
in that case error will be caused.
and if you want to handle it then you can use 

                app.get("*", (req, res)=>{
                    console.log("request received but path not exists.");
                    res.send("path no longer exists");
                });


# Different request type..
Refer index3.js for the example


# Installing Nodemon
It takes time to run again-again node fileName.js to start the server again-again and then we stop it 
to make the changes after making changes we then again start the server to review the changes. 

To stop this things , there's a special package on the npm named nodemon

                Nodemon -> To automatically restart server with code changes.

                npm install nodemon or npm i nodemon

# Path parameters
Generally we send some variables with the path, and that variable is known as path parameters, which get's changed

                app.get("/:username",(req, res) => { 
                    
                });

                <!-- username is a variable whose information is saved inside the request object -->
                console.log(req.params); request ke parameters ko dikahata hai ki request ke saath kya kya send hua hai and we can display it

can pass single parameters and multiple path parameters and can even send html code as a response

In the same way different pages send a whole html code for that parameters.
Refere index4.js for path parameters..


# Query Strings
If we have made a request with some query strings then we can handle these query strings in this way..

                req.query  <!-- every query which comes along request is contained in this req.query -->
                every additional infromation in parameter we pass in the form of query string that information
                comes in the request object of app.get() and store in the query parameter of the request object

Refer index5.js for examples
