
var mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}) 

mongoose.connection.on('connected', function () {
  console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
});

module.exports = mongoose;




  // 'mongodb://localhost:27017/muadb',
  // { useNewUrlParser: true, 
  //   useFindAndModify: false,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true 
  // }
// const db = mongoose.connection;

// db.on('connected', function() {
//   console.log(`Mongoose is connected`);
// });


// module.exports = mongoose;






// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// mongoose.connection.on('connected', function () {
//   console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
// });

