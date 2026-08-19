const express = require("express");

const router = express.Router();

const {
  createAbout,
  getAbout,
  updateAbout,
  deleteAbout,
} = require("../controller/about.controller");

router.get("/", getAbout);

router.post("/", createAbout);

router.patch("/", updateAbout);

router.delete("/", deleteAbout);

module.exports = router;
