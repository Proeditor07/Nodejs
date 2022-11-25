const path = require('path');

console.log(path.dirname("D:/WEB DEV ❤/Node js/NodeJS Tutorial in Hindi 2020/Code/path module/index.js"))
console.log(path.extname("D:/WEB DEV ❤/Node js/NodeJS Tutorial in Hindi 2020/Code/path module/index.js"))
console.log(path.basename("D:/WEB DEV ❤/Node js/NodeJS Tutorial in Hindi 2020/Code/path module/index.js"))
const mypath = path.parse("D:/WEB DEV ❤/Node js/NodeJS Tutorial in Hindi 2020/Code/path module/index.js")
console.log(mypath.name);