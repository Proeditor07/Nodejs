const fs = require("fs");

// fs.writeFileSync('read.txt', 'My name is aditya');
// fs.writeFileSync('read.txt', 'My name is aditya and i am second year cs student');
// fs.appendFileSync("read.txt", ' My name is thor and i am oden son ');
// const read = fs.readFileSync('read.txt');
// console.log(read);
// const org_txt = read.toString();
// console.log(org_txt);



// Reading file without buffer
fs.writeFileSync('bio.txt', 'This is my bio');
// fs.appendFileSync('bio.txt' , ' My name is aditya');
const data = fs.readFileSync('bio.txt','utf8');
console.log(data);
// fs.readFile('bio.txt','utf8', function(err,buffer){
//     if(err) throw err;
//     console.log(buffer);
// });

// To delate the file
// fs.unlinkSync('bio.txt');   

// To create and  delate folder
// fs.mkdirSync('Demo');
// fs.rmdirSync('Demo');