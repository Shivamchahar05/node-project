const mongoose = require("mongoose")
const orderdetails = new mongoose.Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Restaurant"
    },
    total_price: {
        type: Number
    },
    items: [{
        item: {
            type: ObjectId,
            ref: 'Item'
        },
        quantity: Number
    }],
})

const order_details = mongoose.model("order_details", orderdetails)
module.exports = order_details
