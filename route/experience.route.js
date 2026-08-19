const express = require("express");
const router = express.Router();

const {
  createExperience,
  daleteExperience,
  updateExperience,
  getAllExperience,
  getOneExperience,
} = require("../controller/experience.controller");

router.post("/", createExperience);

router.get("/", getAllExperience);

router.get("/:slug", getOneExperience);

router.patch("/:slug", updateExperience);

router.delete("/:slug", daleteExperience);

module.exports = router;
