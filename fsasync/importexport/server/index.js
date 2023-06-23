// var http = require('http')
// var server = http.createServer( (req ,res)=>{
//     // console.log(req.url);
//     if(req.url == '/'){
//         res.writeHead(200, { 'Content-Type': 'text/html' }); 
//         res.write('<h1>This is home Page.</h1>');
//         res.end();
//     }
//     else if(req.url == '/login'){
//         res.writeHead(200 , {'content-type' : 'text/html'})
//         res.write("<h1>successfuly Login</h1>");
//         res.end();
//     }
//     else if(req.url == '/signup'){
//         res.writeHead(200 , {'content-type' : "text/html"});
//         res.write("<h1>welcome to signup page</h1>");
//         res.end();
//     }
//     else{
//         res.writeHead(400, { 'Content-Type': 'text/html' }); 
//         res.write('<h1>Error 404 page does not load.</h1>');
//         res.end();
//     }
// })
// server.listen(5000, () =>{
//    console.log('ready to the server');
// })
const http = require("http");
const fs = require("fs")
const server = http.createServer((req , res )=>{
 if(req.url == "/home"){
   req.method=="POST"
    res.writeHead(200 ,{"content-type" : "text/html"});
    res.write("<h1>Welcome to the home page</h1>");
    res.end();
 }
 else if(req.url == "/login"){
    res.writeHead(200 ,{"content-type" : "text/html"});
    res.write("<h1>successfully login</h1>");
    res.end();
 }
 else if(req.url == "/signup"){
    res.writeHead(200 ,{"content-type" : "text/html"});
    res.write("<h1>welcome to the signup page</h1>")
    res.end();

 }
 else if(req.url == "/userapi"){
  fs.readFile(`/${__dirname}/userapi/userapi.json` ,"utf-8", (err,data)=>{
    // console.log(err);
    res.end(data)
    console.log(data);
  })
  res.writeHead(200 , {"content-type" : "text/html"});
  res.write("<h1>data found successfully</h1>");
  res.end();
 }
 else{res.writeHead(200 , {"content-type" : "text/html"});
 res.write("<h1>data found successfully</h1>");
 res.end(); 
    res.writeHead(400 , {"content-type" : "/text/html"});
    res.write("<h1>404 Error page does not exit</h1>")
    res.end();
 }

}).listen(2000,()=>{
  console.log("ready server");
})