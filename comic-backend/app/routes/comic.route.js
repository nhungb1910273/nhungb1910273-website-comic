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

router.route('/getTrending').get(comic.findTrending);

router.route("/delete/:id").delete(comic.delete);

router.route("/deleteContent/:id").delete(comic.deleteContent);

router.route("/get/:id").get(comic.findOne);

router.route("/getComicByGenre/:id").get(comic.findOneComicByGenre);

router.route("/getComicBySchedule/:id").get(comic.findComicBySchedule);

router.route("/getContent/:id").get(comic.findContents);

router.route("/getContentById/:id").get(comic.findOneContentById);

router.route("/findComicByName/:search").get(comic.findComicByName);

router.route("/update/:id").put(upload.single('photo'),comic.update);

router.route("/updateContent/:id").put(upload.array('content',10),comic.updateContent);




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