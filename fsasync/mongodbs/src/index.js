const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/newdataenter')
    .then(() => console.log("connection succesfull........"))
    .catch(() => console.log(err));


// create schema
const datalistschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique:true,     
        // uppercase:true
    },
    ctype: String,
    videos: String,
    author: String,
    active: Boolean,
    profile:String
})

// create collection
const playlist = new mongoose.model("playlist", datalistschema)

// create document or insert
const createdocument = async () => {
    try {
        const angularplaylist = new playlist({
            name: "Shivam Chahar",
            ctype: "front end",
            videos: 80,
            author: "shivam",
            active: true
        })
        const nodeplaylist = new playlist({
            name: "shivam chahar",
            ctype: "back end",
            videos: 80,
            author: "shiv",
            active: true
        })
        const Reactlaylist = new playlist({
            name: "shivam chahar",
            ctype: "React end",
            videos: 80,
            author: "shiv",
            active: true
        })
        const result = await playlist.insertMany([angularplaylist]) ;
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}


//  read all the data
const getdocument = async () =>{
    const result=await playlist.find().select({name:1}).sort("name:1")
    console.log(result);
}
createdocument()
// getdocument()

// delete the document
const deletedata = async () =>{
    try{
    const result = await playlist.deleteMany({ctype :"front end"})
    console.log("delete after the result");
    }
    catch(err){
        console.log(err);
    }
    // console.log(result);
}

// deletedata()

// update the document

const updatedocument = async () =>{
    try{
        const result = await playlist.updateMany({$set:{profile:"software developer"}})
        console.log(result);
    }catch(err){
        console.log(err);
    }
}


// updatedocument();
