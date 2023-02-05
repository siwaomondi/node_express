import app from "../express.js";
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

app.get("/about", (req, res) => {
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("pages/about", { fortune: randomFortune });
});
