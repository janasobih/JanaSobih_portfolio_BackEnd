const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
  {
    tag: String,
    desc: String,

    slug: {
      type: String,
      unique: true,
    },

    uni: String,

    majour: String,

    date: String,

    desc: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Education", educationSchema);
