const express = require("express");
const app = express();   // generally we store the value returned from the express in a variable name app

// console.dir(app);

let port = 8080;

app.listen(port, ()=> {
    console.log(`server is listening to port ${port}`)
});

//EXAMPLE OF SENDING A STRING AS A RESPONSE
app.use((req, res) => {
    console.log("request received"); // displays on the console
    res.send("success");  // displays on the client side
});

// //EXAMPLE OF SENDING An OBJECT AS A RESPONSE
app.use((req, res) => {
    console.log("request received");
    res.send({name: "Abhi",age:21, city: "Patna"});
}); 
// express will convert it into json respresentation


//EXAMPLE OF SENDING A HTML CODE AS A RESPONSE
app.use((req, res) => {
    console.log("request received..")
    let code = "<h1>Sending response as an HTML code</h1>";
    res.send(code);
});