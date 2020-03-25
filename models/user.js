var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//review model
const ReviewSchema = new Schema({
    content: String, 
    rating: {type: Number, required: false},
});

//message model
const MessageSchema = new Schema({
    content: String
});


//user model
var userSchema = new Schema({
    name: {type: String, required: true},
    image: String,
    beautician: {type: Boolean, default: false},
    location: String, 
    avlDateandTime: String,
    typeOfService: String,
    price: String, 
    clientImages:[{type:String}],
    description: String, 
    review: [ReviewSchema],
    message: [MessageSchema]
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
