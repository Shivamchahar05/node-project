const mongoose = require("mongoose")
const itemsdetails = require("../modal/item")
const userdetails = new mongoose.Schema({
    name: {
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
    cart: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'itemsdetails'
        },
        quantity: Number
    }],
    password: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        required: true,
        min: 10,
        unique: true
    },
    currentOrders: [{
        type: ObjectId,
        ref: 'Order'
    }],
    pastOrders: [{
        type: ObjectId,
        ref: 'Order'
    }],
})

const user_details = mongoose.model("user_details", userdetails)
module.exports = user_details
