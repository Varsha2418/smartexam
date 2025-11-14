const router = require('express').Router();

const userController = require('../controller/user.controller');

router.post('/registerUser',userController.registerUser);

module.exports = router;