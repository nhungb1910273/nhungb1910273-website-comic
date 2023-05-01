const express = require("express");
const comments = require("../controllers/comment.controller")

const router = express.Router();

// router.route("/").get(comments.findAll)
    // .delete(comments.deleteAll)

router.route('/addComment').post(comments.create);

// router.route("/favorite")
//     .get(comments.findAllFavorite);

// router.route("/:id")
//     .get(comments.findOne)
//     .put(comments.update)
//     .delete(comments.delete);

module.exports = router;