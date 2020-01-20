const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render("index"));

app.get("/about", function(req, res) {
    res.render("aboutme");
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))