# intro
# if you want your database to connect with server
first install mysql package
  npm i mysql2

# require the package and store it int mysql object;
    const mysql = require("mysql2");

# create a connection using createConnection() function
            const connection = mysql.createConnection({
                host: "localhost",
                user: "yourUsername", check in your workbench
                database: "databaseName",  jo db ke saath khelna hai
                password: "password"  password of your workbench
            });

# to work with SQL , i can do it in four ways
   1-> using workbench.
   
   2-> using mysql package.
        > run node index.js

   3-> using CLI.

   4-> using sql files. 
        > Create the structure in a seperate file.
        > go into the environment of mysql.
            "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" -u root -p
        > in your terminal mysql> appears this will indicate that you are in the realm of sql 😅.
        > then run command -> source fileName.sql;
            and make sure to run from that directory where your file resides...
        > when you are in the mysql env clear command won't run
          use system cls; command and
          exit; to exit from the sql env;


 ALL THE THINGS GET SYNCED WITH EACH OTHER(SERVER <-> DB);
 (agar command line se kuch chher-chhar huwi hai woh workbench per bhi reflect hua hoga)


# now we will check how to add multiple records into a table using nodejs

inside the query that you have written only write one placeholder
let query = "INSERT INTO Employee (id, name, email, password) VALUES ?";

and we will pass an array of arrays

let users[] =[[user1],[user2],[user3]..... [usern]];
    try{
    connection.query(query,[users] (err, result) =>{
        if(err) throw err;
        console.log(result); //result is an array

        connection.end();
    });
}catch(err){
    console.log(err);
}


# now we'll look how to add multiple recorde using faker
    to make this happen we'll use faker package that gives bunch of records.
      to intall -> npm i @faker-js/faker
    then require the package 
    const { faker } = require('@faker-js/faker');

    faker gives a function getRandom user which by default gives an object but
    we modify it to give the array.
        let getRandomUser = () => {
            return[
                faker.string.uuid(),
                faker.internet.username(),
                faker.internet.email(),
                faker.internet.password()
            ];
        };

    now we will make a data array which will store the 100 arrays which will be
    return by getRandomUser() function
        let data = [];
        for(let i = 1 ; i<=100 ; i++){
            data.push(getRandomUser());
        }

     execute the query using the method.
        try{
            connection.query(query,[data], (err, result) => {
                if(err) throw err;
                console.log(result);

                connection.end();        
            });
        }catch(err){
            System.out.println(err);
        }
        


# now we will step forward to use express and rest api's with databses, and ROUTING.


install express, uuid and nodemon in aur SQLCLASS
    > npm i express
    > npm i uuid
    > npm i nodemon

    require express then
    const express = require("express");
    const app = express();

    implement

    app.get("/", (req, res) =>{
        res.send("welcome to homepage..")
    });

    app.listen("8080",() =>{
        console.log("Server is listening to port..");
    });

    install nodemon and check the server is running or not
    
    then update the app.get() method;
    because i want when the get request comes on "/" then total number of user get printed.

    app.get("/", (req, res) => {
        let q = "SELECT COUNT(*) FROM myuser";
        try{
            connection.query(q,(err, result) =>{
                if(err) throw err;
                console.log(result);
                res.send(result);
                <!-- connection.end(); --> if written error will occur.
            });
        }catch(err){
            console.log(err);
        }
    });

    res.send(result); -> [{count(*): 100}];
    res.send(result[0]) -> {count(*): 100};
    res.send(result[0]["count(*)]); -> 100;

# we will move further and display all the informations and can     manipualte using express, ejs, and path require ;
all these with the help of routing

before creating any route first test the route

app.get("/user" (req, res) =>){
    res.send("am i visible...");
};

# In the previous section we have created a home route to get the total user in the database
npm install ejs

Get / -> fetch and show total number of users on our app

first require path 
const path = require("path);

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));

all the ejs file related to a specific route will be contained inside the directory views, which is present in the same directory...

app.get("/", (req, res) =>{
    let q = "SELECT COUNT(*) FROM myuser";
    try{
        connection.query(q, (err, result) =>{
            if(err) throw err;
            let count = result[0].["COUNT(*)"];
            res.render("home.ejs", { count });
        });
    }catch(err){
        console.log(err);
        res.send("some error in database");
    }
});

now in the views directory create a home.ejs file
create a html boiler plate and
inside the body tag
<h2> Total count of the users : <%= count %></h2>
<button> Join us today </button> //to make interactive.

Get /user -> fetches and show all the data of the users
such as id, username and email not password (confidential things)

app.get("/user",(req, res) =>{
    let q = "SELECT id, username, email FROM myuser";
    try{
        connection.query(q, (err, users) => {
            if(err) throw err;
            res.render("showusers.ejs", {users})
        });
    }catch(err){
        console.log(err);
        res.send("some error occured in database");
    }
});

now in the views directory create a file showusers.ejs and make a simple boiler plate and within the body tag make a table of a 1st row as id, name , email.

                    <style>
                        table, th, td ,tr{
                            border: 1px solid black;
                        }
                    </style>

                    <table>
                        <tr>
                            <td> id </td>
                            <td> username </td>
                            <td> email </td>
                        </tr>
                    </table>

    after this just below the table tag make a for loop to all the users

                   <% for(user in users){ %>
                        <tr>
                            <td><%= user.id %></td>
                            <td><%= user.username %></td>
                            <td><%= user.email %>></td>
                        </tr>
                  <%  } %>