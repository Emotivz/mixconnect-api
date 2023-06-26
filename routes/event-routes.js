const router = require("express").Router();
const eventController = require("../controllers/event-controller");
const authenticate = require("../middleware/authenticate");

router.route("/").get(eventController.all);
router
  .route("/:eventId")
  .get(eventController.single)
  .delete(authenticate, eventController.remove);

module.exports = router;
