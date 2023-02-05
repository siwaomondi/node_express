// import app from "./express";
const app=require('./expess.js')

app.listen(app.get("port"), () => {
    console.info(
        `Server started on http://localhost:${app.get(
            "port"
        )}; press Ctrl-C to terminate`
    );
});