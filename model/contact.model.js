const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    label: {
      type: String,
    },

    value: {
      type: String,
    },

    slug: {
      type: String,
      unique: true,
    },

    platform: {
      type: String,
      // enum: ["github", "linkedin", "facebook", "instagram"],
    },

    url: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("contact", contactSchema);
