const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tech: [
      {
        type: String,
      },
    ],
    githubLink: {
      type: String,
    },

    liveDemo: {
      type: String,
    },

    img: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("project", projectSchema);
