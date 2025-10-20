# FIRST LECTURE FOR THE BACKEND..
# INTRODUCTION
Node JS -> It is basically a JavaScript runtime environment which allows JS to run outside the browser console.
        -> Can be used in technologies but widely used in server side programming 
           (Backend ko build karne ke liye mostly use hota hai)..
        -> Not a language, not a library and not a Framework..

Just type node on the terminal or git bash to go into the REPL(Read Evaluate Print Loop);
        node
You can run all the Js commands
        1+2  <!-- sum got printed -->
        console.log("Ka haal ba")   <!-- string got printed -->
        "Naa " + "Manba"  <!-- both string got concatenate and result will be printed-->

In the node ennvironment you can't run the terminal commands like ls, pwd , clear e.t.c because you have chnages the environment
        type .help in the node env to get the help related to node.

# Run files using node
In the backend folder i have created an index.js file, which contains
        conosle.log("Hii Shubhu...");
Open the terminal go into that directory where the index.js file actually resides, If you will run from different directory then you will get error.

        then write on the terminal
        node index.js  <!-- Hii Shubhu will be printed... -->
        
        <!-- take some example and do it by yourself,
        Print a table of a number using node.. -->

One thing to remember , you can't manipulate DOM elements using node , because they are the part of your browser.
        Node doesn't have access to browser APIs like document, window, or navigator.
        These objects are part of the browser's environment, not the Node runtime.


# PROCESS Objects in node
This object provide information and control over the current node.js process
        abhi jo kaam chal rha hai uske baare mein informantion contains karke rakhega
        run process on your node env(REPL), you will get a bunch of properties and functions like,
            process.release
            process.version
            process.cwd() <!-- print the directory in which you are working -->

        itna hi nahi,
        we can also change or manipulate using process object.

    A special property of process object is
    argsv -> argument vector
    An array that contains command line arguments passed when starting the node.js process.
    
            process.argsv 
        
            by default two values are contained
            1. Path to the executeable Node.exe
            2. Path of the current working file.

    It is used when you have written some code but want to pass argument using command line..
            
            inside index.js
            let args = process.argsv;

            for(let i = 2 ;i<args.length ;i++>){   <!-- started the loop from 2,i don't want the paths to be printed with file -->
                console.log("Hello, ", args[i]);
            }

        open the terminal, go the path where the index.js file resides,then 

            node index.js shubh, shubham, suman, shubhu 

        and then hit enter.
            <!-- output -->
            Hello, shubh
            Hello, shubham
            Hello, suman
            Hello, Shubhu

# EXPORT in files
In order to use functions, methods , properties of another file into other file, We will cover these aspects into this section
            
            index.js (main file) <--------------------------- maths.js (contains math related functions & prop)

            index.js wants to use the functions and prop of maths.js 
            it will take the help of module.exports()

            orignally in maths.js
            const sum = (a, b) => a+b;
            const mul = (a, b) => a*b;
            const sub = (a, b) => a-b;

            const g = 9.8;
            const pi = 3.14;

    for this module.exports() is used , it is an object which makes some file available to other files.if nothing is passed and that file is required then empty object is passed.

            module.exports() = "Hello";

            require() -> a built-in function to include external modules exist in a sepearte file.

        for example refer index1.js file


# EXPORT IN DIRECTORIES
If you want to require some modules from other files in the same directory then we have discussed above.
Now we will export modules present in other directory..

In the Students directory , there are three students information and i want to require all these students, then in that directory i have to create a file index.js

                index.js requires Abhi.js , shubh.js, shubhu.js

and i want this Students directory is required in index2.js , we simply write 

                const Student  = require("./Students");
                here Student will be an array of objects 

                BACKEND1
                   |--Students
                   |      |--Abhi.js
                   |      |--shubh.js
                   |      |--shubhu.js
                   |--index2.js



now we are moving forward....

# NPM (NODE PACKAGE MANAGER)
NPM is the standard package manager for Node.js
1> A package manager.
        It is the library of packages (it is not exactly a library but we can imagine it for analogy)
                it contains various packages like
                express , react etc
        
                Packages -> code writeen by developers that we use by requiring.
                        (Actual code hai jisse bahut saare developers world wide use kar rhe hai)
2> CommandLine Tool.
        With the help of Command line we can download many packages that provides us to download it any version,
        and can manipulate information related to package.

        command line ke through in saare packages ko dusre developers tak access karate hai

3> Online registry.

NPM kya hai?
NPM ek digital bazaar hai jahan developers ke liye hazaaron packages available hain — har ek ek chhoti app jaisi hoti hai jo kisi specific kaam ke liye bani hoti hai. Jaise Play Store mein productivity apps, games, aur tools hote hain, waise hi NPM mein backend tools, frontend frameworks, testing libraries, aur aur bhi bahut kuch hota hai.

no need to download npm manually, it get downloaded along with the node

                to verify 
                
                run npm on your terminal from any directory

                you will get a bunch of commands list that you can use for your project
   