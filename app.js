const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

var lists =["eat","sleep"];

app.get("/", function(req,res){

    var today = new Date();
    
    var options = {
        weekday:"long",
        day: "numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US",options);

    res.render("list",{daysof:day, adding:lists});
    

});

app.post("/", function(req,res){
    var addList = req.body.add;

    lists.push(addList);
    
    res.redirect("/");
});

app.listen("3000", function(){
    console.log("server starting at port 3000");
});