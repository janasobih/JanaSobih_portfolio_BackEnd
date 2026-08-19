const About = require("../model/about.model");

exports.createAbout = async (req, res) => {
  const { title, description, description2, info, focus } = req.body;

  const about = await About.create({
    title,
    description,
    description2,
    info,
    focus,
  });

  res.status(201).json({
    message: "About created successfully",
    data: about,
  });
};

exports.getAbout = async (req, res) => {
  const about = await About.findOne();

  res.status(200).json({
    message: "About fetched successfully",
    data: about,
  });
};

exports.updateAbout = async (req, res) => {
  const about = await About.findOneAndUpdate({}, req.body, {
    new: true,
  });

  res.status(200).json({
    message: "About updated successfully",
    data: about,
  });
};

exports.deleteAbout = async (req, res) => {
  const about = await About.findOneAndDelete({});

  res.status(200).json({
    message: "About deleted successfully",
    data: about,
  });
};
