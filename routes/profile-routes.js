const router = require("express").Router();
const profileController = require("../controllers/profile-controller");
const authenticate = require("../middleware/authenticate");

router
  .route("/")
  .get(authenticate, profileController.single)
  .put(authenticate, profileController.editSingle);
router.route("/:djId").get(profileController.djProfile);

module.exports = router;
