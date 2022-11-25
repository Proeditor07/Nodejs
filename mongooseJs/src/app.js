const mongoose = require("mongoose")
const validator = require("validator")
// connection creation and new database
mongoose.connect("mongodb://localhost:27017/newDB",{useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex:true})
.then(()=> console.log("Connection successful"))
.catch((err)=> console.log(err));

// Creating schema
const playlistSchema = new mongoose.Schema({
    name:{
        // validators
        type:String,
        // unique:true,
        lowercase:true,
        minlength:2,
        maxlength:30

    },
    ctype:String,
    videos:{
        type: Number,
        validate(value){
            if (value < 0){
                throw new Error("Video count should not be negative")
            }
        }
        
    },
    author: String,
    email:{
        type:String,
        lowercase:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is not valid");
            }
        }

    },
    active: Boolean,
    date:{
        type:Date,
        default: Date.now
    }
})

// collection creation 
const Playlist = new mongoose.model("Playlist",playlistSchema);

// async function createDocument(){
// Creating document to insert
const createDocument = async ()=>{

try{
    // const reactPlaylist = new Playlist({
    //     name: "React js",
    //     ctype:"Front end",
    //     videos: 10,
    //     author: "abt",
    //     active:true
    // })
    // const javaPlaylist = new Playlist({
    //     name:"Java",
    //     ctype:"Back End",
    //     videos:20,
    //     author:"ABT",
    //     active:true
    // })
    // const nodePlaylist = new Playlist({
    //     name:"NodeJs",
    //     ctype:"Back End",
    //     videos:30,
    //     author:"ABT",
    //     active:true
    // })
    const expressPlaylist = new Playlist({
        name:"Express js",
        ctype:"Back End",
        videos:4,
        author:"ABT",
        email:"aditya@gmail.com",
        active:true
    })
    // const result = await Playlist.insertMany([reactPlaylist,javaPlaylist,nodePlaylist,expressPlaylist]);
    const result = await Playlist.insertMany([expressPlaylist]);

    
    console.log(result);
    }catch(err){
        console.log(err);
    }
}


createDocument();


// Show document
const getDocument = async ()=>{

    // const result = await Playlist.find({ctype:"Back End"}).select({name:1})

    // comparison query operator ---> $eq,gt,gte,lt,lte,in
    // const result = await Playlist.find({ctype:{$in:["Back End","Front end"]}})
    // const result = await Playlist.find({videos:{$ne:10}})

    // Logical query operator----> $and $or $nor $or
    // const result = await Playlist.find({$and:[{name:"Java"},{ctype:"Back End"}]})
    //   const result = await Playlist.find({$nor:[{name:"Java"},{ctype:"Back End"}]}).countDocuments()
      const result = await Playlist.find({author:"ABT"}).select({name:1}).sort({name:0})




    console.log(result)

}
// getDocument();

// Update document

const updateDocument = async (_id)=>{
    try{
        const result = await Playlist.findByIdAndUpdate({_id},{
            $set:{
                email:"React Js"
            }
        },{
            useFindAndModify:false,
            new:true
        });
        console.log(result);

    }catch(err){
        console.log(err)

    }
   
}

// updateDocument("6305f8c242cdc73798862257")

// delete documnet
const deleteDocument = async (_id)=>{
    try{
        const result = await Playlist.findByIdAndDelete({_id:"6305f8c242cdc73798862259"})
    console.log(result);

    }catch(err){
        console.log(err);
    }
    

}
// deleteDocument()
