var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//review schema
const ReviewSchema = new Schema({
    content: String, 
    rating: {type: Number, required: false},
});

//message schema
const MessageSchema = new Schema({
    content: String
});

//appt model
var muaSchema = new Schema({
    time: {type: Number, required: true},
    date: {type: Date, required: true},
    location: {type: String, required: true}, 
    user: {type: Schema.Types.ObjectId, ref:'User'},
    user:{type: Schema.Types.ObjectId, ref:'Beautician'},
    review: [ReviewSchema], 
    message: [MessageSchema]
},{
  timestamps: true
});

const Appt = mongoose.model('Appointment', muaSchema);

module.exports = Appt; 