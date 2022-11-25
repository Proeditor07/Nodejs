const fs = require("fs");

fs.writeFile('read.txt',"today is a rainy day",(err)=>{
  

    console.log("File is created");

})

fs.appendFile('read.txt'," But i am at hostel doing coding",(err)=>{
   

    console.log("File is created");
    // console.log(err);
})

const read = fs.readFile('read.txt',"utf-8",(err,data)=>{
    if (err) throw err;
    console.log(data);
})