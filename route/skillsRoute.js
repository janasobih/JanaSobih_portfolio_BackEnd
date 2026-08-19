const express = require("express");
const router = express.Router();

const {
  createSkill,
  updateSkill,
  daleteSkill,
  getAllSkills,
  getOneSkill,
} = require("../controller/skills.controller");

router.post("/", createSkill);

router.get("/", getAllSkills);

router.get("/:slug", getOneSkill);

router.patch("/:slug", updateSkill);

router.delete("/:slug", daleteSkill);

module.exports = router;
