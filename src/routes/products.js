const router = require("express").Router();

const products = [];

router.get("/", (req, res) => {
  res.render("products.ejs", { products });
});

router.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;
  products.push({ title, price, thumbnail });
  res.redirect("/api");
});

module.exports = router;
