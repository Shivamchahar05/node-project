// const EventEmitter=require("events");
// const event = new EventEmitter();
// event.on("shivam", ()=>{
//   console.log("My name is shivam");
// })
// event.emit("shivam");
// const { ok } = require("assert");

const EventEmitter = require("events")
const event =new EventEmitter();
event.on("hello", ()=>{
    console.log("hello shivam");
})
event.on("hello", ()=>{
    console.log("hello dssds");
})
event.on("hello", ()=>{
    console.log("hello sdsdsfdcfv");
})
event.on("checkpage", (status_code , page )=>{
    console.log(`Api status code is ${status_code} and the page is ${page}`);
})
// event.emit("hello");
event.on("chackemate" , (status_code , page)=>{ 
    console.log(`Api status code is ${status_code} and the page is ${page}`);
})

event.emit("chackemate" , 200 , "success")
event.emit("checkpage", 200 , "okkk"  )