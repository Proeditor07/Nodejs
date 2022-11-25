const EventEmitter = require("events");

const event = new EventEmitter();


event.on('sayMyName',()=>{
    console.log("My name is aditya");
})

event.on('sayMyName',()=>{
    console.log("My name is aditya");
})

event.on('sayMyName',()=>{
    console.log("My name is aditya");
})
event.emit('sayMyName')


event.on("CheckPage",(sc,msg)=>{
    console.log(`The status code is ${sc} and the message is ${msg}`);

})

event.emit("CheckPage",200,"ok" );