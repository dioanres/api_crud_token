const express = require("express");
const controllers = require("../controllers");
const router = express.Router();

router.route('/').get(controllers.getAll);

module.exports = router;