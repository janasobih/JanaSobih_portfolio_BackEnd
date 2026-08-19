const multer = require("multer");
const path = require("path");

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

const MB = 1024 * 1024;

module.exports = multer({
  storage: multer.memoryStorage(),
  fileFilter,
  limits: {
    fileSize: 2 * MB,
  },
});
