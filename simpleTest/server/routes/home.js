const express = require("express")

const router = express.Router()

router.get("", (req, res) => {
    // res.status(500)
    res.render("pages/home");
});

module.exports = router