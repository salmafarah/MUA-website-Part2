//required mongoose 
const mongoose = require('mongoose');

require('./config/database');

  // seeded data 
const userMl = require('./models/user')
const userData = require('./userData');
const apptMl = require('./models/appointment')
// const apptData = require('./apptData');

userMl.deleteMany({}, (err, user) => {
  console.log('removed all users');
  userMl.create(userData, function (err, users) {
    console.log('created new users')
    console.log(users)

    apptMl.deleteMany({}, (err, user) => {
      console.log('removed all appts');
        
      let apptData = [
        {
          location: 'Toronto',
          user: users[0]._id,
          beautician: users[5]._id
        },
        {
          location: 'Waterloo',
          user: users[1]._id,
          beautician: users[6]._id
        }
      ]
      
      apptMl.create(apptData, (err, appts) => {
        console.log('created appointments')
        console.log(appts)
      })
    });    
  });
});





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
