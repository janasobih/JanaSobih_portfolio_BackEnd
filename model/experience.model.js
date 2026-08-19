const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    joptitle: String,

    Organization: String,

    slug: {
      type: String,
      unique: true,
    },

    date: String,

    desc: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

module.exports = mongoose.model("Experience", experienceSchema);
