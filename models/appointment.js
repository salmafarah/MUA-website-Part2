var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// //review schema
// const ReviewSchema = new Schema({
//     content: String, 
//     rating: {type: Number, required: false},
// });

// //message schema
// const MessageSchema = new Schema({
//     content: String
// });

//appt model
var apptSchema = new Schema({
    location: {type: String, required: true}, 
    user: {type: Schema.Types.ObjectId, ref:'User'},
    beautician:{type: Schema.Types.ObjectId, ref:'User'},
    // review: [ReviewSchema], 
    // message: [MessageSchema]
},{
  timestamps: true
});

const Appt = mongoose.model('Appointment', apptSchema);

module.exports = Appt; 