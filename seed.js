//required mongoose 
const mongoose = require('mongoose');
// require('dotenv').config(); 

require('./config/database');

// seeded data 
const userMl = require('./models/user')
const userData = require('./userData');
const apptMl = require('./models/appointment');


userMl.deleteMany({}, (err, user) => {
  console.log('removed all users');
  userMl.create(userData, function (err, users) {
  console.log('created new users');
  console.log(users);

  apptMl.deleteMany({}, (err, user) => {
    console.log('removed all appts');

      let apptData = [
        {
          location: 'Toronto',
          user: users[0]._id,
          beautician: users[4]._id,

        },
        {
          location:'Waterloo',
          user: users[1]._id,
          beautician: users[5]._id
        },
        {
          location:'Toronto',
          user: users[2]._id,
          beautician: users[6]._id
        },
        {
          location:'Mississauga',
          user: users[3]._id,
          beautician: users[7]._id
        }
      ]
      apptMl.create(apptData, (err, appts) => {
        console.log('created appointments');
        console.log(appts);
      })
    })
  })
}); 








