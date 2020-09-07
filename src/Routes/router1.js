const express = require('express');
const usercontroller = require('../controllers/user')
const tokenverify = require('../middlewares/validator')
const router = express.Router();
router.post('/v1/login', usercontroller.login);
module.exports = router;