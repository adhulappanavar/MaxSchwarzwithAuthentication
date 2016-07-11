var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({
     patientId      : String,
    patientName     : String,
    patientCode     : String,
    admissionDate   : String,
    description     : String,
    imageUrl        : String,
});

module.exports = mongoose.model('Patient', schema);