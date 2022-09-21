const express = require("express");
const path =require("path");
const app = express();
const hbs=require("hbs");

require("./db/conn");
const Register=require("./models/registers");


const port = process.env.PORT || 3000;

const static_path =path.join(__dirname,"../public");
const template_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.get("/", (req, res) => {
    res.render("index")
});
app.get("/index", (req, res) => {
    res.render("index");    
});

app.post("/index",async (req, res) => {
    try{
        const Password =req.body.Password;
        const cPassword =req.body.Confirmpassword;
        
        if (password === cPassword){
            const registerEmployee =new Register({
                Fullname:req.body.Fullname,
                Username:req.body.Username,
                Email:req.body.Email,
                Phone:req.body.Phone,
                Password:req.body.Password,
                Confirmpassword:body.Confirmpassword
            })

            const registered =await registerEmployee.save();
            res.status(201).render("index");


        }else{
            res.send("Password are not matching")
        }
    }catch(error){
        res.status(400).send(error);
    }
});



app.listen(port, () => { 
    console.log(`listening to the port at ${port}`);
})
