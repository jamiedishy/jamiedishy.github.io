const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const forIndex= "My name is Jamie Dishy";
const forIndex2 = "I study software engineering";
const forAbout = "I'm Jamie!";
const languages = ["Java", "C", "ReactJS", "JavaScript", "NodeJS", "HTML/CSS", "Figma", "Verilog", "BASH"];
const skills = ["Agile", "Test-Driven Development", "Web Design", "Wireframing"];

app.get('/', function(req, res) {
    res.render("index", {placeHolder: forIndex, placeHolder2: forIndex2})
});

app.get("/about", function(req, res) {
    res.render("aboutme", {placeHolder: forAbout, languages: languages, skills: skills});
})


app.listen(process.env.PORT || 3000, () => console.log(`Example app listening on port 3000!`))
