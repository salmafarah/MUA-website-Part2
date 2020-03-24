//required mongoose 
const mongoose = require('mongoose');

require('./config/database');

  // seeded data 
const userMl = require('./models/user')
const userData = require('./userData');
const apptMl = require('./models/appointment')
const apptData = require('./apptData');


userMl.deleteMany({}, (err, user) => {
  console.log('removed all users');
  userMl.create(userData, function (err, user) {
    console.log(user)
  });
});

apptMl.deleteMany({}, (err, user) => {
  console.log('removed all users');
  userMl.create(apptData, function (err, appt) {
    console.log(appt)
  });
});


const appt = new apptMl(req.body)
appt.user = req.user._id 
appt.beautician = req.user._id 
appt.save((err, savedAppt){
  if (err) {
    console.log (err)
  }

})









// userMl.deleteMany({},(err,result) => console.log(result)); 

//   userMl.create(userData, function (err, user) {
//       console.log(user)
//       mongoose.connection.close();
//   });

// // seeded the apptdata 
// const apptMl = require('./models/appointment')
// const apptData = require('./apptData');

// apptMl.deleteMany({},(err, result) => console.log(result)); 

//   apptMl.create(apptData, function (err,appt ) {
//     console.log(appt)
//       mongoose.connection.close();
//   });
