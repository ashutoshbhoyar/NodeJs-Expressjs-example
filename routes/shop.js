const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  //console.log(" blank url work");
  res.sendFile(path.join(rootDir,'view','shop.html'));
});

module.exports = router;
