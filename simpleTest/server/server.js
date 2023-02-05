const express_app = require("./express.js");
const app = express_app.app;

const aboutRoute = require("./routes/about");
const homeRoute = require("./routes/home");
const errHandler = require("./routes/errorHandler");


//For testing
app.use(function (req, res, next) {
    res.locals.showTests =
        app.get("env") !== "production" && req.query.test === "1";
    next();
});


app.use("/", homeRoute);
app.use("/about", aboutRoute);
app.use(errHandler);

app.listen(app.get("port"), () => {
    console.info(
        `Server started on http://localhost:${app.get(
            "port"
        )}; press Ctrl-C to terminate`
    );
});
