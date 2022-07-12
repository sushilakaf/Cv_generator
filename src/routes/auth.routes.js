const express = require("express");
const verifyToken = require("../middleware/authJWT.middleware.js");
const { register, login } = require("../controllers/auth.controller.js");
const router = require("express").Router();

router.post("/register", register, function (req, res) {});

router.post("/login", login, function (req, res) {});
router.get("/hiddencontent", verifyToken, function (req, res) {
  if (!user) {
    res.status(404).send({ message: "login unsuccessful" });
  }

  if (req.user == "admin") {
    res.status(200).send({ message: "not hidden content contratulation" });
  } else {
    res.status(403).send({ message: "unauthorises access" });
  }
});
module.exports = router;
