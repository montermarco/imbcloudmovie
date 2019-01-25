const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');


cloudinary.config({
  cloud_name: process.env.CLODINARY_NAME,
  api_key: process.env.CLODINARY_KEY,
  api_secret: process.env.CLODINARY_SECRET
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "peliculas",
  allowedFormats: ["jpg", "png"],
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
});

const uploadCloud = multer({storage: storage});
module.exports = uploadCloud;