const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
var Schema = mongoose.Schema;
const SALT_ROUND = 6; 

//user model
var userSchema = new Schema({
    name: { type: String, required: true},
    email: {
        type: String, 
        required: true, 
        lowercase: true, 
        unique: true, 
    }, 
    password: String, 
    image: String,
    beautician: {type: Boolean, default: false},
    location: String, 
    avlDateandTime: String,
    typeOfService: String,
    price: String, 
    clientImages:[{type:String}],
    description: String, 
},{
    timestamps: true
});

userSchema.set('toJSON', {
    transform: function(doc, ret) {
        delete ret.password;
        return ret; 
    }, 
}); 

userSchema.pre('save', function(next) {
    const user = this; 
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUND, function(err,hash){
        if (err) return next(err); 
        user.password = hash; 
        next(); 
    }); 
}); 

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb); 
}



module.exports = mongoose.model('User', userSchema);

