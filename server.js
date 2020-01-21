const express = require("express");
const path = require("path");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", function(req, res){
    res.sendFile(path.join(__dirname, "public/notes.html"));
    });

app.listen(PORT, function(){
    console.log("app listening on http://localhost:" + PORT);
});