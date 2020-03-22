var express = require('express');
var router = express.Router();
var clientCtrl = require('../controllers/client')

router.get('/', clientCtrl.index);
router.get('/:id', clientCtrl.show);

module.exports = router;