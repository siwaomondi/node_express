import app from "../express.js";
/*Handles 404 errors */
app.use((req, res) => {
    res.status(404);
    res.render("pages/404")
});

/*Handles 500 errors */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render("pages/500")
});