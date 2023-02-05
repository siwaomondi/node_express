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

app.get("/", (req, res) => {
    res.render("pages/home");
});

app.get("/about", (req, res) => {
    var fortunes = [
        "Conquer your fears or they will conquer you.",
        "Rivers need springs.",
        "Do not fear what you don't know.",
        "You will have a pleasant surprise.",
        "Whenever possible, keep it simple.",
    ];
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("pages/about", { fortune: randomFortune });
});

/*Handles 404 errors */
app.use((req, res) => {
    res.status(404);
    res.render("pages/404");
});

/*Handles 500 errors */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render("pages/500");
});

app.listen(app.get("port"), () => {
    console.info();
    console.info(
        `Server started on http://localhost:${app.get(
            "port"
        )}; press Ctrl-C to terminate`
    );
});
