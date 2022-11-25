require('dotenv').config();
const  express = require("express")
const path = require("path")
const app = express();
const port = process.env.PORT || 4000
require("./db/conn")
const hbs = require("hbs")
const Register = require("./models/registers");
const bcrypt = require("bcryptjs/dist/bcrypt");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");
const async = require('hbs/lib/async');

// Middlewares 
app.use(express.json()); // To conver the json data
app.use(express.urlencoded({extends:false}));
app.use(cookieParser());   

const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')))

app.use(express.static(static_path));
app.set("view engine", "hbs")
app.set("views",template_path)
hbs.registerPartials(partials_path)


// Routers
app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/secret",auth,(req,res)=>{
    // console.log(`This is the cookie ${req.cookies.jwt}`)
    res.render("secret")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/logout",auth,async(req,res)=>{
    try {
        console.log(req.user)
        // Logout only from one device...it delets the cookie from database too
        req.user.tokens = req.user.tokens.filter((currentElem)=>{
            return currentElem.token != req.token
        })
        // Logout from all device
        req.user.tokens = [];

        res.clearCookie("jwt")
        console.log("Logout succesfully");
        await req.user.save();
        res.render("login")
        
        
    } catch (error) {
        res.status(400).send(error)
        
    }
})
app.post("/register",async(req,res)=>{
    try{
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password===cpassword){
            const registerEmployee = new Register({
                firstname:req.body.firstname,
                lastname:req.body.lastname,
                email:req.body.email,
                gender:req.body.gender,
                phone:req.body.phone,
                age:req.body.age,
                password:password,
                confirmpassword:cpassword
            })
//Token function Create 
            console.log("The sucesss part ",registerEmployee);

          const token = await registerEmployee.generateAuthToken();
          console.log("The token part ",token);

// Cookie function
        //   The res.cookie() function is used to set the cookie name to value
        //   The value parameter may be a string or object converted to json

// res.cookie("jwt",token);
        res.cookie("jwt",token,{
            expires:new Date(Date.now()+30000),
            httpOnly:true
        });


    //    Data saving in database

          const registered = await registerEmployee.save();
          console.log("The page part ",registered);

            res.status(201).render("index")
        }
        else{
            res.send("Password not matching")
        }

    }
    catch(e){
        res.status(400).send(e);
    }
    
})
app.get("/login",(req,res)=>{
    res.render("login")
})

app.post("/login",async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({email,email});
            const isMatch = await bcrypt.compare(password,useremail.password)
            const token = await useremail.generateAuthToken();
            console.log("The token part "+token)
// Cookie function
            res.cookie("jwt",token)
        if(isMatch){
            res.status(200).render("index")
        }
        else{
            res.status(400).send("Password not matching")
        }

    }catch(e){
        res.status(400).send("Invalid email")
    }

})


app.listen(port,()=>{
    console.log(`Connection succesful at port ${port}`);
});
