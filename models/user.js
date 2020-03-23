var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//client model

var userSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
},{
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
