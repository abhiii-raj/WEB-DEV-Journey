# intro
# if you want your database to connect with server
first install mysql package
  npm i mysql2

# require the package and store it int mysql object;
    const mysql = require("mysql2");

# create a connection using createConnection("query", callback) function
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
            