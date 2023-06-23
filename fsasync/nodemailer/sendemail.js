const express = require('express')
const sendMail = require('./controllers/sendMail')
const app = express();
app.get('/', (req , res)=>{
  res.send('I am a server');
})

app.get('/sendemail' , sendMail)
const start = async()=>{
  try{
     app.listen(5000 , ()=>{
        console.log('server ready port 5000');
     })
  }
  catch{
    console.log(err);
  }
}

start();