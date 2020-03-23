//required mongoose 
const mongoose = require('mongoose');

// seeded the beutdata 
const beutMl = require('./models/beautician')
const beutData = require('./beautData');

beutMl.deleteMany({},(err, result) => console.log(result)); 

  beutMl.collection.insertMany(beutData, function (err, beut) {
      console.log(beut)
      mongoose.connection.close();
  });

  // seeded the clientdata 
const userMl = require('./models/user')
const userData = require('./userData');

userMl.deleteMany({},(err,result) => console.log(result)); 

  userMl.collection.insertMany(userData, function (err, doc) {
      console.log(doc)
      mongoose.connection.close();
  });

// seeded the apptdata 
const apptMl = require('./models/appointment')
const apptData = require('./apptData');

apptMl.deleteMany({},(err, result) => console.log(result)); 

  apptMl.collection.insertMany(apptData, function (err, doc) {
      console.log(doc)
      mongoose.connection.close();
  });
