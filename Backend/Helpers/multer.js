import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // files will be saved in the uploads folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // files will be renamed with the current timestamp and original filename
  },
});
const upload = multer({ storage: storage });
export default upload;
