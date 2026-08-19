const mongoose = require("mongoose");

const infoSchema = new mongoose.Schema(
  {
    icon: {
      type: String,
      required: true,
    },

    text: {
      type: String,
      required: true,
    },
  },
  { _id: true },
);

const focusSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    desc: {
      type: String,
      required: true,
    },
  },
  { _id: true },
);

const aboutSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    description2: {
      type: String,
    },

    info: {
      type: [infoSchema],
      default: [],
    },

    focus: {
      type: [focusSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("About", aboutSchema);
