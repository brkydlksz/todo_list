const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let lists =["eat","sleep"];
let workİtems =[];
app.get("/", function(req,res){

let day = date.getDate();
console.log(date.getDay())

    res.render("list",{listTitle:day, adding:lists});
});
app.post("/", function(req,res){
   
    var addList = req.body.add;
    console.log(req.body.list);
    if(req.body.list ==="Work"){
        workİtems.push(addList);
        res.redirect("/work")
    }
    else {
        lists.push(addList);
    
        res.redirect("/");
    }


});

app.get("/work",function(req,res){
     res.render("list", {listTitle:"Work", adding:workİtems});
})

app.post("/work", function(req,res){
    
    let addList = req.body.add
    workİtems.push(addList)
    res.redirect("/work")
});

app.listen("3000", function(){
    console.log("server starting at port 3000");
});