const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/image");
  },
  filename: (req, file, cb) => {
    console.log(file);
    const timestamp = new Date().getTime();
    const originalname = file.originalname;
    // const extension = path.extname(file.originalname);

    cb(null, `${timestamp}-${originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5 MB
  },
}).single("photo");

module.exports = upload;
