var express = require('express');
var router = express.Router();
var muaCtrl = require('../controllers/index')

router.get('/', muaCtrl.index);

module.exports = router;
