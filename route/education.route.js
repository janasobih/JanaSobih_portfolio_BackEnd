const express = require("express");
const router = express.Router();

const {
  createEducation,
  updateEducation,
  daleteEducation,
  getEducation,
} = require("../controller/education.controller");

router.post("/", createEducation);

router.get("/", getEducation);

router.patch("/:slug", updateEducation);

router.delete("/:slug", daleteEducation);

module.exports = router;
