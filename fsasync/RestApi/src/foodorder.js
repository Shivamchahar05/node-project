const bodyparser = require('body-parser')
const express = require("express")
const cors = require("cors");
require("../connection/conn")
const app = express();
app.use(express.urlencoded({ extended: false }));
const resto_details = require("../router/food_router")
const port = process.env.PORT || 7000


app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json());
app.use(resto_details);

app.listen(port, () => {
    console.log("connection sucessfully connected");
})