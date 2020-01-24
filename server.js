const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 8000;



app.use(express.urlencoded({extended: true}));
app.use(express.json());

let Notes = [{
    "title" : "blah",
    "text" : "blah"}
    ]

app.get("/", function(req, res){
res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
    });

app.get("/api/notes", function(req, res){
    return res.json(Notes);
})    

app.listen(PORT, function(){
    console.log("app listening on http://localhost:" + PORT);
});

app.post("/api/notes", function(req, res){
    let currentIdNumber = 1
    let newNote = req.body;
    currentIdNumber = newNote.id;
    console.log(newNote);
    Notes.push(newNote);
    currentIdNumber += 1
    
    //read the db.json using fs 
    // fs.readFile("db/db.json", JSON.parse(data), function(err){
    // })
    //in that, parse data you get back
    //let Notearray = JSON.parse(data)
    //array.length-1 
    // newNote.id += 1
    //push newNote into Notearray
    //writeFile("db/db.json", JSON.stringify(newNote), function(err){})
    fs.appendFile("db/db.json", JSON.stringify(newNote), function(err){
        if (err) throw err;
        console.log("saved into db.json")
    });
});
