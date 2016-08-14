const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;

const suscribeAsoSchema = new mongoose.Schema({

time : { type : Date, default: Date.now },
user: { type: Schema.ObjectId, ref: "User" },
asociacion: { type: Schema.ObjectId, ref: "Asociacion" }


});
module.exports = mongoose.model('suscribeAso', suscribeAsoSchema);
