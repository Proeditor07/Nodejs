const http = require("http");
const { url } = require("inspector");
const fs = require("fs");

const server = http.createServer((req,res)=>{

// -------->Syncronous
    const data = fs.readFileSync("../UserApi/json.json" ,"utf-8");   
    const objData = JSON.parse(data);
           
    
    
    if(req.url=="/"){
        res.end("This is a home page")
    }
    else if(req.url=="/about"){

        res.end("This is a about page");
    }
    else if(req.url=="/userapi"){
        //   fs.readFile("../UserApi/json.json" ,"utf-8", (err,data)=>{  -------> Asyncronus
        //     // console.log(data);
        //     const objData = JSON.parse(data);
            res.end(objData[0].email);       
    }
    else if(req.url=="/contact"){
        res.end("This is a contact page")
    }
    else{
        res.writeHead("404",{"Content-type":"text/html"});
        res.end("This is a 404 page");
    }

})

server.listen(7000,"127.0.0.1",()=>{
    console.log("Its running");
})
