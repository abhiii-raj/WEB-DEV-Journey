const {faker} = require('@faker-js/faker');
const mysql = require("mysql2");

let connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    database: "backend5",
    password: "Admin@123"
});

let getRandomUser = () => {
    return[
        faker.string.uuid(),
        faker.internet.username(),
        faker.internet.email(),
        faker.internet.password()
    ];
};

let data = [];

for(let i = 1; i<=100 ;i++){
    data.push(getRandomUser());
}

let query = "INSERT INTO myuser (id, username, email, pass) VALUES ?";

try{
    connection.query(query,[data],(err, result) => {
        if(err) throw err;
        console.log(result);

        connection.end();
    })
}catch(err){
    console.log(err);
}