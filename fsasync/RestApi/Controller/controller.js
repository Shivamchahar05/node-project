const express = require("express")
const student = require("../modal/student")
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const twilio = require('twilio');2
var fs = require('fs');
var path = require('path');
const TWILIO_ACCOUNT_SID= "ACb3ba521021da5b9bc7c4bc39abd6a8cb";
const TWILIO_AUTH_TOKEN= "7567a85534667249d201d92cf329d182";
const TWILIO_PHONE_NUMBER= +13613154541


const registered  = asyncHandler( async (req, res) => {
    try {
        // const images = req.files
        // console.log(images);
        let studentlist = new student(req.body)
    //         studentlist =  {img: {
    //         data: fs.readFileSync(path.join(__dirname, req.files)),
    //         contentType: 'image/png'
    //     }
       
    // }
    console.log(studentlist , ">>>>>>");
        // this.studentlist.imgage=images.name


        console.log('arra',req.body)
        // const token = await studentlist.generatetoken();
        const datasave = await studentlist.save()
        res.status(200).send({ message: "successfully registerd" })
    } catch (err) {
        console.log('error', err)
        res.status(400).send(err)
    }

});

const loginstudent = asyncHandler(async (req, res) => {
    try {
        // const studentlist = new student(req.body)
        const email = req.body.email
        const password = req.body.password
        const getdata = await student.findOne({ email: email })
       if((getdata) != null){ 
        console.log(password);
        console.log(getdata.password);
        const ismatch = await bcrypt.compare(password, getdata.password)
        // console.log(ismatch);
        const accesstoken = await getdata.generatetoken();
        // craete cookie
        res.cookie(`Cookie token name`,accesstoken);
        // res.cookie('cookie_name', 'value')
        console.log(token);
        if (ismatch) {
            res.status(200).send({ message: "login successfully" ,status:"200"});
        } else {
            res.status(200).send({ message: "Password incorrect" , status:"201" });
        }
       }else{
         res.status(200).send({message:"Incorrect email" , status:"201"});
       }
        // getdata.then((result) => {
        //     console.log("then called>>>", result);
        // }).catch((error)=>{
        //     console.log('errroror>>>',error)
        // })
        // console.log(password);
        // console.log(getdata.password);
        // const ismatch = await bcrypt.compare(password, getdata.password)

        // console.log(ismatch);
        // const token = await getdata.generatetoken();
        // // craete cookie
        // res.cookie('cookie_name', 'value')
        // console.log(token);
        // if (ismatch) {
        //     res.status(200).send({ message: "login successfully" })
        // } else {
        //     res.status(200).send({ message: "INVALID USER" })
        // }
    } catch (err) {
        console.log(err)
        res.status(400).send(err)
    }

})


const studentdata = asyncHandler( async (req, res) => {
    try {
        const getdata = await student.find()
        res.status(200).send(getdata)
    }
    catch (err) {
        res.status(400).send(err)
    }
})

const indivisualdata = asyncHandler(async (req, res) => {
    console.log("hello");
    try {
        const id = req.params.id;
        console.log(id);
        const getinddata = await student.findById(id);

        if (!getinddata){
            return res.status(400).send("not in database");
        } else {
            return res.status(200).send(getinddata);
        }
    }
    catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
})

const deleteindivisualdata =  asyncHandler(async (req, res) => {
    console.log("hello");
    try {
        const id = req.params.id;
        console.log(id);
        const getinddata = await student.findByIdAndDelete(id)
        if (!id) {
            return res.status(400).send("not in database")
        } else {
            return res.status(200).send(getinddata)
        }
    }
    catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
})

const updatedata =  asyncHandler(async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        const getinddata = await student.findByIdAndUpdate(id, req.body, {
            new: true
        })
        if (!id) {
            return res.status(400).send("not in database")
        } else {
            return res.status(200).send(getinddata)
        }
    }
    catch (err) {
        res.status(400).send(err)
        console.log(err);
    }
})


const generateotp =  asyncHandler(async (req, res) => {
   try{
    console.log("hiiiii");
    const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000);
    
    const getdata = await student.updateOne({phone_number : phoneNumber} , {otp : otp})
    console.log(getdata, "hiiii");
    

    client.messages
    .create({
      body: `Your OTP is: ${otp}`,
      from: TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    })
    .then(() => {
      res.send('OTP sent successfully');
    })
    .catch((error) => {
      console.error('Error sending OTP:', error);
      res.status(500).send('Failed to send OTP');
    });

   }
   catch(err){
     console.log(err);
   }
})

const verifyotp=  asyncHandler(async (req, res) => {
    try{
        const {otp} = req.body;
        const getdata = await student.findOne({ otp : otp })
        if(getdata!=null){
            res.status(200).send("verify successfully")
        }
        else{
            res.status(400).send("not verify please send again otp")
        }
    }
    catch(err){
        console.log(err);
    }
    
})

module.exports = {registered , loginstudent , studentdata , indivisualdata, deleteindivisualdata ,updatedata , generateotp, verifyotp};