const express = require("express")
const app = express();
require("./")

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
});

app.get("/about",(req,res)=>{
    res.send("Hello from about page")
})

app.get("/contact",(req,res)=>{
    res.send("Hello from contact page")
})

app.listen(8000,()=>{
    console.log("Listening to the 8000 port")
})

