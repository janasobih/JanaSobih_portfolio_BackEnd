const slug = require("slugify");
const Skill = require("../model/skills.model");

exports.createSkill = async (req, res) => {
  const { skill } = req.body;
  const skills = await Skill.create({
    skill,
    slug: slug(skill),
  });
  res.status(200).json({ message: "skill created", data: skills });
};

exports.updateSkill = async (req, res) => {
  const { slug } = req.params;
  const skill = await Skill.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "skill updated", data: skill });
};

exports.daleteSkill = async (req, res) => {
  const { slug } = req.params;
  const skill = await Skill.findOneAndDelete({ slug });
  res.status(200).json({ message: "skill deleted", data: skill });
};

exports.getAllSkills = async (req, res) => {
  const skill = await Skill.find();
  res.status(200).json({ message: "skills list", data: skill });
};

exports.getOneSkill = async (req, res) => {
  const { slug } = req.params;
  const skill = await Skill.findOne({ slug });
  res.status(200).json({ message: "skill", data: skill });
};
