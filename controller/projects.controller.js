const Project = require("../model/project.model");
const slug = require("slugify");

exports.createProject = async (req, res) => {
  const { title, desc, tech, githubLink, liveDemo } = req.body;

  const img = req.file?.filename;

  const project = await Project.create({
    title,
    slug: slug(title),
    desc,
    tech,
    githubLink,
    liveDemo,
    img: img ? `/uploads/${img}` : null,
  });

  res.status(201).json({
    message: "project created",
    data: project,
  });
};

exports.updateProject = async (req, res) => {
  const { slug } = req.params;

  const project = await Project.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });

  res.status(200).json({ message: "project updated", data: project });
};

exports.deleteProject = async (req, res) => {
  const { slug } = req.params;

  const project = await Project.findOneAndDelete({ slug });

  res.status(200).json({
    message: "Project deleted successfully",
    project,
  });
};

exports.getOneProjects = async (req, res) => {
  const { slug } = req.params;

  const project = await Project.findOne({ slug });

  res.status(200).json({
    message: "Project",
    data: project,
  });
};

exports.getAllProjects = async (req, res) => {
  const project = await Project.find();

  res.status(200).json({
    message: "Projects list",
    data: project,
  });
};
