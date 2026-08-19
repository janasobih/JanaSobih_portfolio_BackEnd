const Education = require("../model/education.model");

const slug = require("slugify");

exports.createEducation = async (req, res) => {
  const { tag, uni, majour, data, desc } = req.body;
  const educations = await Education.create({
    tag,
    slug: slug(tag),
    uni,
    majour,
    data,
    desc,
  });
  res.status(200).json({ message: "education created", data: educations });
};

exports.updateEducation = async (req, res) => {
  const { slug } = req.params;
  const education = await Education.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "education updated", data: education });
};

exports.daleteEducation = async (req, res) => {
  const { slug } = req.params;
  const education = await Education.findOneAndDelete({ slug });
  res.status(200).json({ message: "education deleted", data: education });
};

exports.getEducation = async (req, res) => {
  const education = await Education.findOne();
  res.status(200).json({ message: "educations list", data: education });
};
