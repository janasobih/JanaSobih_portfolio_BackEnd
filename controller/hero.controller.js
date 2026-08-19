const Hero = require("../model/hero.model");
const slug = require("slugify");
const uploadToCloudinary = require("../utili/uploads");

exports.createHero = async (req, res) => {
  const { name, jopDesc, desc, tag } = req.body;

  let img = null;
  let cv = null;

  if (req.files?.img?.[0]) {
    const result = await uploadToCloudinary(
      req.files.img[0],
      "jana-portfolio",
      "image",
    );

    img = result.secure_url;
  }

  if (req.files?.cv?.[0]) {
    const result = await uploadToCloudinary(
      req.files.cv[0],
      "jana-portfolio",
      "image",
    );

    cv = result.secure_url;
  }

  const hero = await Hero.create({
    name,
    slug: slug(name),
    tag,
    jopDesc,
    desc,
    img,
    cv,
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

  const updateData = {
    ...req.body,
  };

  if (req.files?.img?.[0]) {
    const result = await uploadToCloudinary(
      req.files.img[0],
      "jana-portfolio",
      "image",
    );

    updateData.img = result.secure_url;
  }

  if (req.files?.cv?.[0]) {
    const result = await uploadToCloudinary(
      req.files.cv[0],
      "jana-portfolio",
      "auto",
    );

    updateData.cv = result.secure_url;
  }

  const hero = await Hero.findOneAndUpdate({ slug }, updateData, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    message: "hero updated successfully",
    data: hero,
  });
};
