var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user')

router.get('/', userCtrl.index); //Go to the search page 
router.get('/:id/beautician', userCtrl.showAll); // show all the MUAs the user searched for 
router.get('/beautician/:id', userCtrl.showOne); // show one MUA the user picked 
router.get ('/:id/appt', userCtrl.showappt); // show all the appts a user has 
router.get ('/appt/:id', userCtrl.deleteOne) // delete an appt 

module.exports = router;