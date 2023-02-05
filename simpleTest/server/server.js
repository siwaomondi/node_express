const express_app = require("./express.js");
const app = express_app.app;

const aboutRoute=require('./routes/about')
const homeRoute=require('./routes/home')
const errHandler=require('./routes/errorHandler')

app.use("/",homeRoute)
app.use("/about",aboutRoute)
app.use(errHandler)





app.listen(app.get("port"), () => {
    console.info(
        `Server started on http://localhost:${app.get(
            "port"
        )}; press Ctrl-C to terminate`
    );
});
