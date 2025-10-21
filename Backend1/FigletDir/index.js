const figlet = require("figlet")  
//in the double quote we will not use any directory related things for any packages, packages ke liye ha yeh sab nahi likhte 

figlet("Shubhu", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});