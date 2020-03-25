const Appt = require('../models/appointment'); 
const User = require('../models/user'); 
const Reviews = require ('../models/reviews')

  module.exports = {
    test,
    index,
    showOne,
    showAll,  
    showAppt, 
    deleteAppt, 
    createBeaut,
    updateBeaut, 
    deleteBeaut,
    showAllRevUser,
    showAllRevBeaut,
    createReview,
    updateReview

  }; 

//shows the API doc page 
function index(req, res) {
 res.render('doc')
}

function test(req,res){
  User.find({})
    .then(user => {
      res.status(200).json(user);
  })
    .catch(err => {
      if (err) {
        console.log("query error: " + err);
      }
      res.sendStatus(500)
  })
}


// show all the beautician the user searched for (filter: location,typeOfService)
function showAll(req, res) {
  let search = {}; 
    if (req.query.location){
     search.location = req.query.location
  }
    if (req.query.typeOfService){
      search.typeOfService = req.query.typeOfService
  }
    User.find(search)
     .then(beaut => {
      res.status(200).json(beaut);
  })
    .catch(err => {
      if (err) {
        console.log("query error: " + err);
      }
      res.sendStatus(500)
  });
}; 

//show one beautician profile 
function showOne(req, res) {
  User.findById(req.params.id)
    .then(beaut => {
      res.status(200).json(beaut);
  })
  .catch(err => {
    if (err) {
      console.log("id error: " + err);
    }
    res.sendStatus(500)
  });
}; 
  
//show all the appts a user has 
function showAppt(req, res){
  Appt.find({user:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
      res.json(appt);
  });
};

// delete an appt 
function deleteAppt(req, res) {
  Appt.findByIdAndRemove(req.params.id)
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("delete error:" + err);
      res.sendStatus(500);
    }
      res.json(appt);
     // res.redirect(`/${user._id}/appt`) //this would take the user back to their appt page
  });
};

//create a beautician profile
function createBeaut(req, res) {
  req.body.beautician = true
    User.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(beautician => {
        res.json(beautician)
    })
      .catch(err => {
        res.status(500).json("create error: " + err)
    })
}

//update a beautician profile 
function updateBeaut(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(beaut => {
      res.status(200).json(beaut);
  })
    .catch(err => {
      if (err) {
      console.log("update error: " + err);
    }
      res.sendStatus(500)
  });
}; 

//delete a beautician profile 
function deleteBeaut(req, res) {
  User.findByIdAndRemove(req.params.id)
  .then(beaut => {
    res.status(200).json(beaut);
    // res.redirect(`/`) // it would redirect to the homepage 
  })
  .catch(err => {
    if (err) {
      console.log("delete error: " + err);
    }
    res.sendStatus(500)
  });
}; 

// creating a review
function createReview(req, res) {
  Reviews.create(req.body).then(function(review) {
    res.status(201).json(review);
  });
}

//show all the user reviews 
function showAllRevUser(req,res){
  Reviews.find({user:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
    res.json(appt);
  });
}

//show all the reviews for a beautician
function showAllRevBeaut(req, res){
  Reviews.find({beautician:req.params.id})
    .populate('user') 
    .populate('beautician')
    .exec((err, appt)=> {
      if (err) {
      console.log("index error:" + err);
      res.sendStatus(500);
  }
      res.json(appt);
  });
};

//update a review profile 
function updateReview(req, res) {
  Reviews.findByIdAndUpdate(req.params.rev_id, req.body, {new: true})
  .populate('user') 
  .populate('beautician')
  .exec((err, appt)=> {
    if (err) {
    console.log("index error:" + err);
    res.sendStatus(500);
}
    res.json(appt);
});
};























