const express  = require("express");
const MenRanking = require("../src/models/mens")
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");
const MensRanking = require("../src/models/mens")
app.use(express.json());
// Create men ranking
app.post("/mens",async(req,res)=>{
    try{
        const addingMensRecord = new MensRanking(req.body);
        console.log(req.body)
        const insertMens = await addingMensRecord.save();
        res.staus(201).send(insertMens);

    }catch(e){
        res.status(400).send(e);
    }
})

// See men ranking

app.get("/mens",async(req,res)=>{
    try{

    const seeRanking = await MensRanking.find({});
    res.status(200).send(MensRanking);


    }catch(e){
        res.status(400).send(e);
    }
})

app.listen(port,()=>{
    console.log(`Conection was succesful at port ${port}`);
})