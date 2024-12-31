React with API project steps
============================

- create react app using vite
- remove unwanted compnents from App.jsx App.css index.css
- install any styling library to project
- create a folder for different pages for this application in src folder
- 


React server diployment
===========================

code for backend server diployment - npm i json-server@0.17.4 

1- create a index.js file inside server folder 
2- update scripts key of package.json file with {"start": "node index.js"}
3- creat .gitignore file, to node_modules inside it 
4- define steps to run db.json file using json-server in index.js 
    - import json-server  
    - create a server for mediaplayer app in order to run our server app
    - create a middleware to convert json data to js
    - create a port for executing our app
    - set up a path/route db.json file so that client can make the request
    - use the middleware , route inside the server 
    - run the server using given port
    - to execute our app we have to use : node index.js in terminal, so that we can see the output in localhost: 3000

