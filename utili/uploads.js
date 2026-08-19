const cloudinary = require("../config/cloudinary.config");
const streamifier = require("streamifier");

const uploadToCloudinary = (file, folder, resourceType) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        type: "upload",
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );

    streamifier.createReadStream(file.buffer).pipe(stream);
  });
};

module.exports = uploadToCloudinary;
