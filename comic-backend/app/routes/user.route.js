const express = require("express");
const users = require("../controllers/user.controller")

const router = express.Router();

router.route("/").get(users.findAll)
    // .delete(users.deleteAll)

router.route('/register').post(users.create);
router.route('/login').post(users.login);

// router.route("/favorite")
//     .get(users.findAllFavorite);

// router.route("/:id")
//     .get(users.findOne)
//     .put(users.update)
//     .delete(users.delete);

module.exports = router;