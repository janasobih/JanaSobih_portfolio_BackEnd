const Hero = require("../model/hero.model");
const slug = require("slugify");

exports.createHero = async (req, res) => {
  const { name, jopDesc, desc, tag } = req.body;

  const img = req.files?.img?.[0]?.filename;
  const cv = req.files?.cv?.[0]?.filename;

  const hero = await Hero.create({
    name,
    slug: slug(name),
    tag,
    jopDesc,
    desc,
    img: img ? `/uploads/${img}` : null,
    cv: cv ? `/uploads/${cv}` : null,
  });

  res.status(201).json({
    message: "hero created successfully",
    data: hero,
  });
};

exports.getHero = async (req, res) => {
  const hero = await Hero.findOne();
  res.status(200).json({ message: "Hero", data: hero });
};

exports.updateHero = async (req, res) => {
  const { slug } = req.params;
  const hero = await Hero.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "hero updated successfully",
    data: hero,
  });
};
