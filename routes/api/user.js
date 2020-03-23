var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');

router.get('/', userCtrl.search) // The user would be able to search for beauticians
router.get('/:id  ', userCtrl.showAll) // The user would be able to see all the beauticians they searched for 
router.get('/:id', userCtrl.showOne) //Show one beautician
router.get('/:id/appt', userCtrl.showAppt) // show all appt made by a user 
router.delete('appt/:id', userCtrl.deleteOne)//cancel an appt 

router.get('/beautician', userCtrl.beautnewform) // show the user the beautician form 
router.post('/beautician/:id', userCtrl.create) // created the beautician profile 
router.put('/beautician/:id', userCtrl.update) //the beautician can update their profile 






module.exports = router;