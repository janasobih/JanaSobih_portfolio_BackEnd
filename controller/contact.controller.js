const Contact = require("../model/contact.model");
const slug = require("slugify");

exports.getAllContact = async (req, res) => {
  const contact = await Contact.find();
  res.status(200).json({ message: "contact list", data: contact });
};

exports.getOneContact = async (req, res) => {
  const { slug } = req.params;
  const contact = await Contact.findOne({ slug });
  res.status(200).json({ message: "contact", data: contact });
};

exports.createContact = async (req, res) => {
  const { label, value, platform, url } = req.body;
  const contact = await Contact.create({
    label,
    value,
    slug: slug(label || platform),
    platform,
    url,
  });
  res.status(200).json({ message: "contact created", data: contact });
};

exports.updateContact = async (req, res) => {
  const { slug } = req.params;

  const updateContact = await Contact.findOneAndUpdate({ slug }, req.body, {
    new: true,
  });

  res.status(200).json(updateContact);
};

exports.deleteContact = async (req, res) => {
  const { slug } = req.params;
  const contact = await Contact.findOneAndDelete({ slug });
  res.status(200).json(contact);
};
