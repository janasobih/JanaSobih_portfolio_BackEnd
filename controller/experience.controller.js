const Experience = require("../model/experience.model");
const slug = require("slugify");

exports.createExperience = async (req, res) => {
  const { joptitle, Organization, date, desc } = req.body;
  const experiences = await Experience.create({
    joptitle,
    slug: slug(joptitle),
    Organization,
    date,
    desc,
  });
  res.status(200).json({ message: "experience created", data: experiences });
};

exports.updateExperience = async (req, res) => {
  const { slug } = req.params;
  const experience = await Experience.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "experience updated", data: experience });
};

exports.daleteExperience = async (req, res) => {
  const { slug } = req.params;
  const experience = await Experience.findOneAndDelete({ slug });
  res.status(200).json({ message: "experience deleted", data: experience });
};

exports.getAllExperience = async (req, res) => {
  const experience = await Experience.find();
  res.status(200).json({ message: "experiences list", data: experience });
};

exports.getOneExperience = async (req, res) => {
  const { slug } = req.params;
  const experience = await Experience.findOne({ slug });
  res.status(200).json({ message: "experiences", data: experience });
};
