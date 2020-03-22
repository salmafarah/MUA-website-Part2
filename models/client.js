var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//client model

var clientSchema = new Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
},{
    timestamps: true
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
