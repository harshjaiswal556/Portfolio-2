const express = require('express');
const app = express();
const port=process.env.PORT || 5000;
const path = require('path');

require("./db/conn")
const portfolio2Data = require("./models/schema");
const staticPath = path.join(__dirname,"./templates");

app.set('view engine','hbs');
app.set("views",staticPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});
app.get("/certificate",(req,res)=>{
    res.render("certificate");
});

app.post("/index",async(req,res)=>{
    try{
        const data = new portfolio2Data({
            fname : req.body.fname,
            lname : req.body.lname,
            email : req.body.email,
            message : req.body.message
        });
        const result = await data.save();
        res.redirect("/");
    }catch(err){
        console.log(err);
    }
});

app.listen(port,()=>{
    console.log("Hosted at "+port);
});