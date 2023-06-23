const express = require("express")
const router = new express.Router()
const {registered,
    loginstudent,
    studentdata , 
    indivisualdata , 
    deleteindivisualdata,
    updatedata , 
    generateotp,
    verifyotp
} = require("../Controller/controller")

router.post("/student", registered )


// async function encryptPassword(password) {
//     const hash = bcrypt.hashSync(password, salt);
//     return hash;

// }



// login api
router.post("/loginstudent", loginstudent )

// get api
router.get("/studentdata", studentdata)

// indivisual get api data
router.get("/data/:id", indivisualdata)

// delet the student by id
router.delete("/deltedata/:id", deleteindivisualdata)

// update the student by use it id
router.patch("/updatedata/:id", updatedata)

// generate otp api
router.post("/generateotp" , generateotp)

// verify otp api
router.post("/verifyotp", verifyotp)

module.exports = router;