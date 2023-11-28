const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {

  //console.log("add-product work");
  //   res.send(
  //     '<form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">ADD</button></form>'
  //   );

  res.sendFile(path.join(rootDir, "view", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
