const Appt = require('../models/appointments'); 
const Client = require('../models/client'); 
const Beaut = require('../models/beautician'); 

  module.exports = {
    index,
    show,
}; 


function index(req, res) {
  Beaut.find({},function(err,beut) {
    res.status(200).json(beut);
  });
}






// function index(req, res) {
//     Beut.find({}) 
//     .then(function(beut){
//       res.json(beut);
//     }).catch(function(err){
//     console.error(err)
//  }); 
// }

//   function show(req, res) {
//     Appt.find({beautician:      )
//     .then(function( beautician  ){
//      console.log(beautician)
//   })  .catch(function(err){
//       console.error(err)
//   }); 
// };


function show(req, res) {

}