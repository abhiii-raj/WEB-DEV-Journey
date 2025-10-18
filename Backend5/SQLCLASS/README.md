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
