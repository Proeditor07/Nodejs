const fs = require("fs");
const http = require("http");

const server = http.createServer();
// First Method
server.on("request", (req,res)=>{
    // fs.readFile("input.txt",(err,data)=>{
    //     res.end(data.toString());
    // })



// Second method

// const rstream = fs.createReadStream("input.txt");
// rstream.on("data",(chunkData)=>{ 
//     // res.write(chunkData);
//     res.end(chunkData)
    
// });

// rstream.on("end",()=>{
//    res.end();
// })

// rstream.on("error",(err)=>{
//     res.end("This is an error"); 
// })


// Third Method
const rstream = fs.createReadStream("input.txt");
rstream.pipe(res);

})
server.listen(9000,"127.0.0.1");