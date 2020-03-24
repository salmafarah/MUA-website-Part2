var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');

// router.get('/', userCtrl.search) // The search page 
router.get('/search', userCtrl.showAll) // The user would be able to see all the beauticians they searched for 
router.get('/:id', userCtrl.showOne) //Show one beautician
// router.get('/appt', userCtrl.showAppt) // show all appt made by a user 
router.delete('appt/:id', userCtrl.deleteAppt)//cancel an appt 

// router.get('/newbeautician', userCtrl.beautnewform) // show the user the beautician form 
router.put('/newbeautician', userCtrl.createBeaut) // create the beautician profile 
router.put('/newbeautician/:id', userCtrl.updateBeaut) //the beautician can update their profile 
router.delete('newbeautician/:id', userCtrl.deleteBeaut)//delete profile 

router.get('/:id/review', userCtrl.showReview)
router.post('/:id/review', userCtrl.createReview)
router.put()


module.exports = router;