const express = require("express")
const app = express();
const path = require("path");
const hbs = require("hbs");
const res = require("express/lib/response");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialPath = path.join(__dirname,"../templates/partials");
// app.use(express.static(staticPath));

// To set the view engine
app.set("view engine", "hbs");
app.set("views",templatePath); 
hbs.registerPartials(partialPath);     

// Template engine route 
app.get("",(req,res)=>{
    res.render("index",{
        className:"Adi",
    });
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/",(req,res)=>{    
//    Pass the html
    res.write("<h1>Welcome to my home page again</h1>");
    res.write("<h1>Welcome to my home page again</h1>");
    res.send();
})

app.get("/about",(req,res)=>{
    res.send("Welcome to my about page")
})

app.get("/contact",(req,res)=>{
    res.status(200).send("Welcome to our contact page")
})
// Pass the json (Can also use--> res.json)
app.get("/api",(req,res)=>{
    res.send({   
        id:1,
        name:"aditya",
    })
})



app.get("/about/*",(req,res)=>{
    res.render("404",{
        errorcomemnt:"page is not available here"
    })
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomemnt :"Page not found"
    });
})

app.listen(8000,()=>{
    console.log("Listening to the port 8000")
})

