const Appt = require('../models/appointment'); 
const User = require('../models/user'); 

  module.exports = {
    // index,
    showOne,
    showAll,  
    showAppt, 
    deleteOne
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
  User.find(search, function(err, beaut){
    res.status(200).json(beaut);
  });
};

//show one MUA profile 
function showOne(req, res) {
  User.findById(req.params.id, function(err, beaut){
    res.status(200).json(beaut);
    console.log(req.params.id)
  });
};
  

//show all the appts a user has 
function showAppt(req, res) {
  Appt.find({user: req.params.id})
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

  
// delete an appt 
function deleteOne(req, res) {
  Appt.findByIdAndRemove(req.params.id, function(err, appt){
    res.status(200).json(appt);
  });
};