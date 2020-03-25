var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//review model
const ReviewSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    beautician:{type: Schema.Types.ObjectId, ref:'User'},
    content: String, 
    rating: {type: Number, required: false},
},{
    timestamps: true
});


const Reviews = mongoose.model('Reviews', ReviewSchema);

module.exports = Reviews; 