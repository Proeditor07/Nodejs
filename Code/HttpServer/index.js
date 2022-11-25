const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello i am aditya and i am creating the my first node js server in 2022");
})

server.listen(8000, "127.0.0.1",()=>{
    console.log("Listening to the port number 8000");
})