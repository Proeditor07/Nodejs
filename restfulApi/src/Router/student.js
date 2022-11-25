const express = require("express");
const app = express();
const router = new express.Router();
const Student = require("../models/students");

// Steps
// 1: Create a new router 
// const router = new express.Router();

// // 2: We need to define the router
// router.get("/thapa",(req,res)=>{
//     res.send("Hello people ")

// })
// // 3: Register router
// router.use(router);

// using async await
// Create a new student

router.post("/students",async(req,res)=>{
    try{

        const user = new Student(req.body);
        const createUser = await user.save()
          res.status(201).send(createUser);
    }catch(e){
        res.status(400).send(e);
    }



})
// Reading students data
router.get("/students",async(req,res)=>{
    try{
        const studentData = await Student.find();
        res.status(200).send(studentData);
    }catch(e){       
        res.status(400).send(e);
    }
})
// Reading individual student data
router.get("/students/:id",async(req,res)=>{ 
    
    try{
        const _id = req.params.id;
        const studentData = await Student.findById(_id);
        res.status(200).send(studentData);
        
    }catch(e){
        res.status(404).send(e);

    }

})

// Update students data
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateStudents = await Student.findByIdAndUpdate(_id,req.body);
        res.status(200).send(updateStudents);
        

    }catch(e){
        res.status(400).send(e);

    }
})


// Delete students

router.delete("/students/:id",async(req,res)=>{

    try{
        const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(_id);
        if(!req.params.id){
            return res.status(400).send(deleteStudent);
        }
        else{
            res.status(200).send(deleteStudent);
        }

    }catch(e){
        res.status(500).send(e);
    }




    

})





module.exports = router;

