const express = require("express");
const router = express.Router();

const {
  createProject,
  updateProject,
  deleteProject,
  getOneProjects,
  getAllProjects,
} = require("../controller/projects.controller");
const upload = require("../middleware/multer.middleware");

router.get("/", getAllProjects);

router.post("/", upload.single("img"), createProject);

router.get("/:slug", getOneProjects);

router.patch("/:slug", upload.single("img"), updateProject);

router.delete("/:slug", deleteProject);

module.exports = router;
