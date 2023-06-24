const router = require("express").Router();
const eventController = require("../controllers/event-controller");

router.route("/").get(eventController.all);
router.route("/:eventId").get(eventController.single);

module.exports = router;
