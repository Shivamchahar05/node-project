const express = require("express")
const Restaurant = require("../modal/resturant")
const asyncHandler = require('express-async-handler')
const item_details = require("../modal/item")

//  add restaurant api
const addRestaurant = asyncHandler(async (req, res) => {
    try {
        const detail_restro = new Restaurant({
            name: req.body.name,
            address: req.body.address,
            image: req.body.image,
            menu: [],
        })
        const add_restro = await detail_restro.save()
        res.status(200).send(add_restro)
    }
    catch (err) {
        console.log(err);

    }
})

// get reataurant api

const getrestaurant= asyncHandler(async (req, res) => {
  try{
    const result  = await Restaurant.find()
    res.status(200).send(result)
  }
  catch(err){
     console.log(err);
  }
 
})


//  add items in restaurant api
const add_items = asyncHandler(async (req, res) => {
    try {
        // req.body.item, req.body.category
        const restaurant = await Restaurant.findOne({ _id: req.body.restaurant })
        console.log(restaurant, "........");
        if (!restaurant) {
            res.status(200).send("This Restaurant ia not  Registered")
        }
        else {
            const item = new item_details(req.body)
            const new_item = await item.save()
            res.status(200).send(new_item)

        }

        // await item.save()
        // let index = restaurant.menu.findIndex(val => val.category === req.body.category)
        // if (index >= 0) {
        //   restaurant.menu[index].items.push(item.id)
        // } else {
        // restaurant.menu.push({ category: req.body.category, items: [item.id] })
        // await restaurant.save()
        // }
        // res.status(200).send(item)


    }
    catch (err) {
        console.log(err);
    }
})

// get items in restaurant
const getitems = asyncHandler(async (req, res) => {
    try{
        const result = await item_details.find({restaurant: req.body.restaurant})
        console.log(result);
        res.status(200).send(result)
    }
    catch(err){
        console.log(err);
    }

})

module.exports = { addRestaurant, add_items, getrestaurant, getitems };