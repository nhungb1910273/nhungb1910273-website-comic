const express = require("express");
const comic = require("../controllers/comic.controller")
const multer = require("multer");
const router = express.Router();


const PDF_PATH = './assets/pdf';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,PDF_PATH)
    },
    filename: function (req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})
   
var upload = multer({ storage: storage })

router.route('/create').post(upload.single('photo'),comic.create)

router.route('/createContent').post(upload.array('content',10),comic.createContent)

router.route('/getAll').get(comic.findAll);

router.route("/delete/:id").delete(comic.delete);

router.route("/get/:id").get(comic.findOne);

router.route("/getComicByGenre/:id").get(comic.findOneComicByGenre);

router.route("/getContent/:id").get(comic.findContents);

router.route("/getContentById/:id").get(comic.findOneContentById);






// router.route("/")
//     .get(comic.findAll)
//     .post(comic.create)
//     .delete(comic.deleteAll);

// router.route("/favorite")
//     .get(comic.findAllFavorite);

// router.route("/:id")
//     .get(comic.findOne)
//     .put(comic.update)
//     .delete(comic.delete);

module.exports = router;