const express = require("express")
const router = express.Router()


/*Handle 404*/ 
router.use((req, res) => {
    res.status(404);
    res.render("pages/404")
});

/*Handles 500 errors */
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render("pages/500")
});


module.exports = router