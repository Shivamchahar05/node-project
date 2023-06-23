const express =require("express")
const app = express();

app.set("view engine" , "hbs");

app.get("/",(res,req)=>{
    res.render("index.html" , {
        channalname:"shivam"
    })
  })

app.get("/",(res,req)=>{
  res.send("hello shivam")
})
app.listen(7000,()=>{
    console.log("7000 server ready");
})