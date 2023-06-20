const router = require("express").Router();
const genreController = require("../controllers/genre-controller");

router.route("/").get(genreController.all);

module.exports = router;
