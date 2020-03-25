var express = require('express');
var router = express.Router();
var userCtrl = require('../../controllers/user');

router.get('/doc', userCtrl.index) // shows the API doc page 
// router.get('/', userCtrl.search) // The search page 
router.get('/search', userCtrl.showAll) // The user would be able to see all the beauticians they searched for 
router.get('/:id', userCtrl.showOne) //Show one beautician
router.get('/:id/appt', userCtrl.showAppt) // show all appt made by a user 
router.delete('/appt/:id', userCtrl.deleteAppt)//cancel an appt 

// router.get('/newbeautician/:id', userCtrl.beautnewform) // show the user the beautician form 
router.put('/newbeautician/:id', userCtrl.createBeaut) // create the beautician profile 
router.put('/newbeautician/:id', userCtrl.updateBeaut) //the beautician can update their profile 
router.delete('/newbeautician/:id', userCtrl.deleteBeaut)//delete progit addfile 

// router.get('/reviews/:id/newform', userCtrl.showReview) // shows the users their review page 
// router.post('review/:id', userCtrl.createReview)//creates a review on the users review page and the beauticians profile 
// router.put('/newbeautician/:id/review/:id', userCtrl.updateReview) // updates the users review page and the beautician profile

POST /reviews

{
    user: id,
    beautician: id,
    content: String
}

GET /user-reviews
GET /beautician-reviews

Review.find({ user: id })
Review.find({ beautician: id })
module.exports = router;