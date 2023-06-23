const router = require("express").Router();
const eventController = require("../controllers/event-controller");

router.route("/").get(eventController.all);

module.exports = router;
