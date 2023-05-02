const express = require("express");
const comments = require("../controllers/comment.controller")

const router = express.Router();

router.route("/getComment").get(comments.findAll)
    // .delete(comments.deleteAll)

router.route('/addComment').post(comments.create);

router.route("/update/:id").put(comments.update);

router.route("/delete/:id").delete(comments.delete);

router.route("/get/:id").get(comments.findOne);


module.exports = router;