const express = require("express");
const router = express.Router();

const {
  deleteContact,
  updateContact,
  createContact,
  getOneContact,
  getAllContact,
} = require("../controller/contact.controller");

router.get("/", getAllContact);

router.post("/", createContact);

router.get("/:slug", getOneContact);

router.patch("/:slug", updateContact);

router.delete("/:slug", deleteContact);

module.exports = router;
