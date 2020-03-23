const Appt = require('../models/appointment'); 
const Client = require('../models/user'); 
const Beaut = require('../models/beautician'); 

  module.exports = {
    index,
    showOne,
    showAll,  
    showAppt, 
    deleteOne
}; 

// user will see the search page 
function index(req, res) {
  res.render('MUA/user/search')
}

// show all the MUAs the user searched for (filter: location, time, date,typeOfService,numberOfClients)
function showAll(req, res) {
  Beaut.find(req.query)
    
    
    function(err, beaut){
    res.status(200).json(beaut);
  });
};




//show one MUA profile 
function showOne(req, res) {
  Beaut.findById(req.params.id, function(err, beaut){
    res.status(200).json(beaut);
  });
};
  

//show all the appts a user has 
// function showAppt(req, res) {
//   Appt.findById(user: _id, function(err, appt){
//     res.status(200).json(appt);
//   });
// };

function showAppt(req, res) {
  Appt.find({user: req.params.id})
  .populate('User') 
  .populate('Beautician')
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