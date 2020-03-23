var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//user model

var userSchema = new Schema({
    name: {type: String, required: true},
    image: String,
    beautician: {type: Boolean, default: false },
    location: String, 
    avlDateandTime: String,
    profileImage: String,
    typeOfService: String,
    price: String, 
    clientImage: [{type:String}],
    description: String,  
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
