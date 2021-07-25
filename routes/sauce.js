const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');



router.post("/", auth, multer, sauceCtrl.createThing); //Route Post
router.put("/:id", auth, multer, sauceCtrl.modifyThing); //Route Put
router.delete("/:id", auth, sauceCtrl.deleteThing); //Route Delete
router.get("/:id", auth, sauceCtrl.getOneThing); //Route get One
router.get("/", auth, sauceCtrl.getAllThing); //Route get All
router.post("/:id/like", auth, sauceCtrl.likeOrNot); //Route Post

module.exports = router;
