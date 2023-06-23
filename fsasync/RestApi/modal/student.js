const mongoose = require("mongoose")
const validator = require("validator");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
var salt = bcrypt.genSaltSync(10);
const studentschema = new mongoose.Schema({
    name_prefix: {
        type: String,
    },
    first_name: {
        type: String,
        required: true,
        minlength: 3  
    },
    last_name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone_number: {
        type: Number,
        required: true,
        // min:10,
        // unique:true
    },
    otp:{
        type: Number
    },
    // address: {
    //     type: String,
    //     required: true
    // },
    password: {
        type: String,
        required: true,
    },
    img:
    {
        data: Buffer,
        contentType: String
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }],
   

})
// generate token
studentschema.methods.generatetoken = async function () {
    try {
        const token = jwt.sign({ id: this.id }, "mynameisdhivamchaharjkddkjfidufdmcnkjnccdkjncducheuc");
        this.tokens = this.tokens.concat({ token: token })
        // await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}

// convert password into hash
studentschema.pre('save', async function (next) {
    console.log("this.password==========", this.password)
    if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, salt)
    console.log(this.password,"----------------");
    }
    next()
})


const studentdetails = new mongoose.model("studentdetails", studentschema)
module.exports = studentdetails


