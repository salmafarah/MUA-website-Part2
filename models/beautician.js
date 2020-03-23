var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//beautician model

var beautSchema = new Schema({
    name: {type: String, required: true},
    avltime: [{type: Number, required: true}],
    avldate:[{type: Date, required: true}],
    image: {type: String, required: true},
    location: {type: String, required: true}, 
    typeOfService: [{type:String, required: true}],
    price: {type: Number, required: true}, 
    clientImages: [{type:String, required: true}],
    description: {type: String, required: true},
    numberOfClients: [{type:Number, required: true}],
},{
    timestamps: true
});

const Beautician = mongoose.model('Beautician', beautSchema);
module.exports = Beautician;
