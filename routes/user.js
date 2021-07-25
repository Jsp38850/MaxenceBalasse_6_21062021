// express pour crée un router
const express = require('express');

// Declarer le router
const router = express.Router();

//Chemin vers le controllers
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

//Exporter le router
module.exports = router;