const mongoose = require("mongoose")
const itemsdetails = require("../modal/item")
const restro = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    address: {
        type: String
    },
    // menu: [{
    //     category: String,
    //     items: [{
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "itemsdetails"
    //     }]
    // }],


})

const restro_details = mongoose.model("restro_details", restro)
module.exports = restro_details
