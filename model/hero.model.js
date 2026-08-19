const mongoose = require("mongoose");

const heroSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    tag: String,

    jopDesc: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
    },

    img: {
      type: String,
    },

    cv: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Hero", heroSchema);
