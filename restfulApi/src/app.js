const express = require("express");
require("./db/conn");
const Student = require("./models/students");    
const app = express();
const port = process.env.PORT || 8000;
const studentRouter = require("./Router/student")
app.use(express.json());
app.use(studentRouter)

// Create a new student
// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user)  
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
    

// });





app.listen(port,()=>{
    console.log(`Listning to the port ${port}`)
})