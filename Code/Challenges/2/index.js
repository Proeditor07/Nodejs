const fs = require('fs');

fs.writeFile("bio.txt","My name is aditya",(err)=>{
    console.log("File is created");
})

fs.appendFile("bio.txt"," I am a second year cs student",(err)=>{
    console.log("More data created");
})

fs.readFile("bio.txt","utf-8",(err,data)=>{
    console.log(data);
})

fs.rename("bio.txt","newBio.txt",(err)=>{   
    console.log("File has been rename");
});

// fs.unlink('index.js',(err)=>{
//     console.log("File")
// })



// fs.mkdir("new",(err)=>{
//     console.log("Golder creaed");
// })
fs.rmdir('new',(err)=>{
    console.log("Delated")
})