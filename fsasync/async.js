const fs = require("fs");
fs.readFile('read.txt', 'utf-8' ,(err,res)=>{
    console.log(res);
 })