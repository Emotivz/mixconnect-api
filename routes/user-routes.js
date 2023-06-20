const router = require("express").Router();
const userController = require("../controllers/user-controller");
const authenticate = require("../middleware/authenticate");

router.route("/register").post(userController.register);
router
  .route("/login")
  .post(userController.login)
  .get(authenticate, userController.current);

module.exports = router;
