const http = require("http")
const fs =require("fs")
const server =http.createServer().listen(2000,()=>{
    console.log("ready server");
})

server.on("request" , (req , res)=>{
   
    const rstream = fs.createReadStream("input.txt");
    rstream.on("data" , (chunckdata)=>{
        res.write(chunckdata);
    })
    rstream.on("end", (enddata)=>{
        res.end(enddata)    
    })
    rstream.on("error" , (err)=>{
        console.log(err);
        res.end("file not found")
    })
    // rstream.pipe(res)
})

// fs.readFile("input.txt" , "utf-8" , (err,data)=>{
//    console.log(data);
// })