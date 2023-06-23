const mongoose = require("mongoose")
const Restaurant = require("../modal/resturant")
const itemsdetails = mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    img: {
        type: String
    },
    available: {
        type: String
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Restaurant"
    }
})


const items_detail = mongoose.model("itemsdetails", itemsdetails)
module.exports = items_detail