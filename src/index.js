const express = require('express');
const app = express();
const port=process.env.PORT || 5000;
const path = require('path');

require("./db/conn")

const staticPath = path.join(__dirname,"./templates");

app.set('view engine','hbs');
app.set("views",staticPath);
app.use(express.static(staticPath));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log("Hosted at "+port);
});