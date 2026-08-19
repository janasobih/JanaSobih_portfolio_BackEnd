const multer = require("multer");
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudinary = require("../config/cloudinary.config");

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();

  const allowedImages = [".jpg", ".png", ".jpeg"];
  const allowedCV = [".pdf"];

  if (file.fieldname === "img") {
    if (!allowedImages.includes(ext)) {
      return cb(new Error("Only jpg, png and jpeg images are allowed"));
    }
  }

  if (file.fieldname === "cv") {
    if (!allowedCV.includes(ext)) {
      return cb(new Error("Only PDF files are allowed for CV"));
    }
  }

  cb(null, true);
};

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "jana-portfolio",
    allowed_formats: ["jpg", "png", "jpeg", "pdf"],
  },
});

const MB = 1024 * 1024;

module.exports = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * MB,
  },
});
