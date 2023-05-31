// Under TopSocial. 
// Create folder backend, 
// create file .gitignore which contains "node_modules/" ---> to let git ignore too many files in node_modules

// cd backend
// add db.json sent from lecturer. 
// Create server.js
// npm init
    // package name: (backend) 
    // version: (1.0.0) 
    // description: top social backend
    // entry point: (index.js) server.js
// npm i express axios cors json-server  --- json server as database 
// npm i nodemon concurrently -D  --- concurrently is used to combine commands 

// Go to github and create a repo for the project. 
// go to TopSocial 
// git init 
// git remote add origin https://github.com/zhanshiaus/TopSocial.git
// git remote -v
// git add .
// git commit -m "add backend"
// git push --set-upstream origin master

// add below lins in package.json 
    // "json:server":"json-server --port 8000 --watch db.json",   ---->run json:server to watch  db.json
    // "server":"nodemon server.js",
    // "dev":"concurrently \" npm run server\"  \"npm run json-server\"",  
//  npm run server   (this equals to npx nodemon server.js)
//  npm run json:server  

// cd backend
// npm run dev

const express = require('express');
const cors = require('cors')
const router = require('./routes/index')
const app = express();


app.use(cors())
app.use(express.json()) // 解析json

app.use("/api",router);

const PORT = 80;
app.listen(PORT, function(){
    console.log("server is running on http://localhost:80")
})
