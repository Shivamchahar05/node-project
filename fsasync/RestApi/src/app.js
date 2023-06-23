const dotenv = require("dotenv")
const bodyparser = require('body-parser')
const express = require("express")
const twilio = require('twilio');
// const fileUpload = require("express-fileupload");
const cookieParser = require('cookie-parser')
const errorhandler = require('../middleware/errorhandler')
var multer = require('multer');
const cors = require("cors");
require("../connection/conn")
const routerstudent = require("../router/student")
const app = express();
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 6000
// const upload = multer({ dest: 'uploads/' });
// app.use(multer());
// app.use(
//     fileUpload()
//   );
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json());
app.use(cookieParser());
app.use(routerstudent);
app.use(errorhandler);
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
  }
});

var upload = multer({ storage: storage });
// app.post('/upload', (req, res) => {
//     console.log('hhhhh>>>>>>>>>>',req.files)
//     // const file = req.file;
//     res.status(200).send('huuuu')
  
//     // Handle the file or perform any other operations
  
//     // res.send('File uploaded successfully');
//   });
app.listen(port, () => {
    console.log("connection sucessfully connected");
})
// using Promise
// app.post("/student" ,(req, res ) => {
//     const studentlist = new student(req.body)
//     studentlist.save().then(() => {
//         res.status(201).send(studentlist)

//     }).catch((err) => {
//         res.status(400).send(err)

//     });
// //    res.send("hello studnts")
// })

// using async await



