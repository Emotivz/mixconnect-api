const router = require("express").Router();
const djController = require("../controllers/dj-controller");
const multer = require("multer");
const authenticate = require("../middleware/authenticate");

// to handle file upload on server
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, "./public/profile-images");
  },
  filename: (_req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const filefilter = (_req, file, cb) => {
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
router.route("/:userId").get(djController.single);

module.exports = router;
