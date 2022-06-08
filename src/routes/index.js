const router = require("express").Router();
const path = require("path");
const products = require("./products");

router.use("/products", products);
router.get("/", (req, res) => {
  res.render("pages/index.ejs");
});

module.exports = router;
