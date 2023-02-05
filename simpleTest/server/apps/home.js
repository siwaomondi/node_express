import app from "../express.js";


app.get("/home", (req, res) => {
    // res.status(500)
    res.render("pages/home");
});

