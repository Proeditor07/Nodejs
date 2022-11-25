const fs = require("fs");
const bioData = {
    name : "Aditya",
    age : 25,
    channel : "Kripto Edits"
}

const jsonData = JSON.stringify(bioData);
console.log(jsonData) 

// const objData = JSON.parse(jsonData);
// console.log(objData);

fs.writeFile("json.json", jsonData,(err)=>{
    console.log("Done")
})

const readFile = fs.readFile("json.json","utf-8",(err,data)=>{
    const objData = JSON.parse(data);
    console.log(objData);
    console.log(data);

})