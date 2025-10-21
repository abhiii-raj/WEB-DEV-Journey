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

# 4 Major uses for Express

            1-> Listen for incoming request..
                It listens for any type of request either it is GET, POST request..
            2-> Parse 
                Parse the request based on Node.js (jaruri nahi hai kis type ka request aayega).
            3-> Match responses with routes.(routes -> alag alag raste jinper ham request bhej sakte hai..).
                On which path does the request arrives and it matches the request as per that route..
