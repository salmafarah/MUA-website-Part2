var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// //message schema
// const MessageSchema = new Schema({
//     content: String
// });


//appt model
var apptSchema = new Schema({
    location: {type: String, required: true}, 
    user: {type: Schema.Types.ObjectId, ref:'User'},
    beautician:{type: Schema.Types.ObjectId, ref:'User'},
},{
    timestamps: true
});

const Appt = mongoose.model('Appointment', apptSchema);

module.exports = Appt; 