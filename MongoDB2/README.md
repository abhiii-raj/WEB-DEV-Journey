Mongoose -> A library that creates connection between MongoDB and Node.js JavaScript Runtime

till now we have learnt to use MongoDB with the Mongo Shell

Now in this lecture we will look how how to integrate the mongodb with the node

npm ki library ya fir npm ka ek package keh dijiye...

Mongoose is one of the ODM(Object Data Modelling)...

MongoDB ko plane java se kaise use karenge, then we will learn how to use mongodb with the express.

All the operation can be performed by the Mongoshell but we won't use mongoshell continously..

developement based apps, servers, yaha per ham kaise apne javascript ke code se database ko control kar sakte hai.

if you want to make a schema for your collection just like in SQL then you can do it with the help of mongoose

agar hamare pass complex queries hai jismein bahut saari condition deni hai for searching and finding we can use mongoose..

# installation

intialize the package.json file using
        npm init

after initializing the package.json file, install mongoose and create a index.js file
        npm install mongoose
        touch index.js

then require the mongoose library/package
        const mongoose = require("mongoose");

in the mongoose, there is a function connect() to connect with the database,
        mongoose.connect("url");
        
        this function will function asynchronously..
using url , it identify with which database is going to connect..

        url -> "mongodb://127.0.0.1:27017/test"

        for by-default port number for mongodb is 27017 (it is fixed);

jab bhi ham mongo db ke saath connect kar leta hai, it waits for a promise from the database itself..

In place of connect method
        
        main().catch(err => console.log(err));

        async function main() {
            await mongoose.connect('mongodb://127.0.0.1:27017/test');
        }


connect funtion is a asynchronous funcntion , jo code ke hisab se nahi chalte, woh apna time lete hai

After the connection is successfully establised we can perform CRUD operation.

# Schema -> Defines the shape of the document within that collection..
like in the table we create (column, constraints, datatype); 
we can also say that schema is a blueprint of the collection

like in the table every rows obeys the schema, and in the same way we define the schema for the table;

# To define the schema using mongoose
        const userSchema = mongoose.Schema({
            name: String,
            email: String,
            age: Number
        });

        (schemaName: datatype)