const add = (a,b)=>{
    return a + b;

}
const sub = (a,b)=>{
    return a-b;
}

const mult = (a,b)=>{
    return a*b;
}


// Exporting methods
// 1.
// module.exports = add;

// 2.
// module.exports.add = add;
// module.exports.sub = sub;

// 3.
module.exports = {add,sub,mult} 
