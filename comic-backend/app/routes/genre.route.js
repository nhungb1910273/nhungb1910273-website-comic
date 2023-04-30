const express = require("express");
const genre = require("../controllers/genre.controller");

const router = express.Router();

router.route("/create").post(genre.create);


router.route('/getAll').get(genre.findAll);

router.route("/get/:id").get(genre.findOne);

router.route("/update/:id").put(genre.update);

router.route("/delete/:id").delete(genre.delete);



module.exports = router;