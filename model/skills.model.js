const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    skill: String,

    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Skill", skillSchema);
