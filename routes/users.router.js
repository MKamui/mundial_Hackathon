const express = require('express');
const router = express.Router();

// Controladores
const AuthController = require('../controllers/AuthController')

router.post('/signin', AuthController.signIn)
router.post('/signup', AuthController.signUp)

module.exports = router;
