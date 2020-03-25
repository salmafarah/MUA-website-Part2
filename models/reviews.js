var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//review model
const ReviewSchema = new Schema({
    content: String, 
    rating: {type: Number, required: false},
});



const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews; 