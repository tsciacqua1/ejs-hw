const router = require("express").Router();
const products = require("./products");

router.use("/products", products);
router.get("/", (req, res) => {
  res.render("index.ejs");
});

module.exports = router;
