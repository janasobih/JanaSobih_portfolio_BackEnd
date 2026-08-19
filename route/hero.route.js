const express = require("express");
const router = express.Router();

const upload = require("../middleware/multer.middleware");

const {
  createHero,
  getHero,
  updateHero,
} = require("../controller/hero.controller");

router.get("/", getHero);

router.post(
  "/",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  createHero,
);

router.patch(
  "/:slug",
  upload.fields([
    { name: "img", maxCount: 1 },
    { name: "cv", maxCount: 1 },
  ]),
  updateHero,
);

module.exports = router;
