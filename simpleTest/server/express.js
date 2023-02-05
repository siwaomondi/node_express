const express = require("express");
const path = require("path");
const app = express();

var handlebars = require("express3-handlebars").create({
    defaultLayout: "main",
});
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 8000);
app.use(express.static(path.join(__dirname, "./../public")));

exports.app = app