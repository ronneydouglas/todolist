const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
// const expressValidator = ("express-validator");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

let tasks = {
    items: [
        "hello",
        "goodbye"
    ]
};

app.post("/", function(req, res) {
    res.send(req.body);
})

app.get("/", function(req, res) {
    res.render("index", tasks);
})

app.listen(3000, function() {
    console.log("All good things must come to an end");
});
