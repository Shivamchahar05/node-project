const express = require("express")
const router = new express.Router()
const {addRestaurant, add_items , getrestaurant, getitems} = require("../Controller/food_order_controller")

router.post("/restruent", addRestaurant )
router.post("/additems", add_items )
router.get("/getrestaurant", getrestaurant )
router.get("/getitems", getitems )


module.exports = router;