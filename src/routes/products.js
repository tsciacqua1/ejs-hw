const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("pages/products.ejs");
});

module.exports = router;
