const Appt = require('../models/appointment'); 
const User = require('../models/user'); 

  module.exports = {
    // index,
    showOne,
    showAll,  
    // showAppt, 
    deleteAppt, 
    create, 
    update, 
    createBeaut,
    updateBeaut, 
    deleteBeaut
}; 


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
// function showAppt(req, res){
//   Appt.find({user: req.params.id})
//   console.log({user:req.params.id})
//   .populate('user') 
//   .populate('beautician')
//     .exec((err, appt)=> {
//     if (err) {
//       console.log("index error:" + err);
//     res.sendStatus(500);
//   }
//     res.json(appt);
//   });
// }

  
// delete an appt 
function deleteAppt(req, res) {
  Appt.findByIdAndRemove(req.params.id,function(err, appt){
    res.status(200).json(appt);
  });
};


//create the beautician profile 
function createBeaut(req, res) {
  req.body.beautician = !!req.body.beautician;
    User.create(req.params.id)
    .then(beaut => {
      res.status(200).json(beaut);
      // res.redirect(`/beautician/${beut._id}`) //this would be the route 
    })
    .catch(err => {
      if (err) {
        console.log("create error: " + err);
      }
      res.redirect(`/beautician`)

    });
  }; 

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
      console.log("update error: " + err);
    }
    res.sendStatus(500)
  });
}; 

 
