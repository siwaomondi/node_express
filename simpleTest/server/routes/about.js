const express = require("express");

const router = express.Router();
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

router.get("/", (req, res) => {
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render("pages/about", {
        fortune: randomFortune,
        title: "About",
        layout: "misc",
        pageTestScript: '/qa/tests-about.js'
    });
});

module.exports = router;
