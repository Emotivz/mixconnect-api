const router = require("express").Router();
const djController = require("../controllers/dj-controller");
const multer = require("multer");

// to handle file upload on server
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/profile-images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage, filefilter });

router.route("/").post(upload.single("profile_image"), djController.register);

module.exports = router;
