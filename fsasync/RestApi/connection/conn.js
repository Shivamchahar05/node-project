const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/studentdata1')
    .then(() => console.log("connection succesfull........"))
    .catch(() => console.log(err));