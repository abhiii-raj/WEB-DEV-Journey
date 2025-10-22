Moving onto the next section i.e. Node-EJS

# Node - EJS (Embedded JavaScript Templates)
EJS -> A simple templating language that lets you to generate HTML markup with plain JavaScript

                suppose someone has to build a resume , he/ she can download it from the internet and customize according to his/her choice.
                with that resume many people can customize his/her resume , here resume acts as a template, a layout.

                Another example of templating is,
                On instagram there's not a single user, so the company need to make an individual page for all the users , the anser is big no.
                All the users page will have a username show, followers count , following count , so these things are same for all the users on 
                social media site, and here's the templating comes in picture , The company will use a single layout and within that layout it
                shows the information of specific layout..

                (Agar kisi website per similar layout bahut baar create hota hai toh uss layout ko ham baar baar nahi banate, ham ek template bana dete hai)

                We can imagine templates as a blueprint
                             
                      ______________________
                     | Template (BluePrint) |
                     |______________________|

                
                To achieve templating there are many tools like handlebar, EJS e.t.c. we will be using EJS 

                    1. Popular , 2. Based on JavaScript
                With the help of HTML we can create a template and write javascript logic in it.

                Hamme hazaro pages create na karna pade , alag alag users ke hisab se , 
                unke information ke hisab se hamare liye woh pages create ho jaye with the help of templates

# Working with EJS
 
                npm init -y       <!-- intialize package.json -->
                
                npm i express     <!-- intall express -->
                npm i ejs         <!-- install ejs -->


Refer index.js file for more
 
                To use EJS
                app.set("view engine", "ejs");   
                there's a function in the app object which set the view engine to ejs.

                express internally require the ejs package so we needn't to do it explicitly.

                set() function is used to set up things , one of those things is view engine.
                
                view engine -> the engine(chiz) which is used to create templates(view) is k/a view engine.
                which is set bt set() function to ejs (ejs hamare view ko render karne ke kaam ayega , dikane ke kaam aayega);

WITH THE HELP OF EJS WE DON'T SEND RESPONSES , WE RENDER IT...

                We can't send bigger files which contains (html + css) using send(),
                but we do it with render() and in this we don't send a normal file , but a ejs file

                by default express expect, all the views(templates) is in the views directory

                express by default search with name in views directory
                (woh sirf naam dekhega).

When we run our server from the parent directory, simple route get send as a response but ejs files will not be rendered and you will get an error saying 
                
                failed to look up "fileName.ejs"
                because the express search view directory in the parent directiry not in the actual directory where the views resides,

                in that case to not get that error

                require the path

                const path = require("path);
                then,

            |   app.set("views", path.join(__dirname, "/views"));
            |   (views waale dirc ka path dikhane ki kosis kar rhe hai);
            |   in the path package join is a function, that joins two paths.
            |
            |   __dirname -> cwd of index.js -> WEB-DEV/BACKEND3/
            |
            |-> we are telling express , not to search the views folder 
                to somewhere else instead of the path given


So whenever we are working with templates we must,

            require the path 
            set the path to cwd of index.js file (mine is index1.js), where the views dir have created.. 

by doing this , it will ensure the express not to give the error..

# Interpolation Syntax
Interpolation refers to embedding expressions into markup text.

Making the html dynamic with the help of ejs and interpolation syntax..

Dynamic -> To be able to make or adapt to changes and runtime.

                        ejs.co -> for more documentation

            for example,
            <h1> 1 + 2 </h1>           <!-- 1+2 -->
            <h1> <%= 1 + 2 %> </h1>    <!-- 3 --> ( the final value 
                                                    is printed as a string )
            <h1> <%= "abhi_raj".toUpperCase() %> </h1>  <!-- ABHI_RAJ -->


index3.js and home1.ejs will help to understand the interpolation syntax.
These are the examples where we use interpolation syntax manually,
in the next section we'll be discussing how to pass data with ejs..

# Passing data to EJS.
Refer index4.js and home2.ejs files

Genrally the data comes from database, we eill not compute the data in ejs file.

In render() we can pass two arguments
             1> name of the ejs file,
             2> {key : value} pair of the data

By doing this, we can use the key in our ejs file to make it dynamic HTML.

# Activity 
Creating an Instagram EJS
refer insta.js and insta.ejs file