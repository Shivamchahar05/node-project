const fs = require('fs');
fs.writeFile("read.txt",'today aswm day',(err)=>{
    console.log('file is created');
    console.log(err);
})
fs.appendFile('read.txt','today is monday',(err)=>{
  console.log("task is completed");
  console.log(err);
});
fs.readFile('read.txt', 'utf-8' ,(err,res)=>{
   console.log(res);
})

fs.mkdir('osmodule',(err)=>{
   console.log('create folder');
})
