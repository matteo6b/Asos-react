const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;

const suscribeEventoSchema = new mongoose.Schema({
activated: Boolean,
time : { type : Date, default: Date.now },
user: { type: Schema.ObjectId, ref: "User" },
evento: { type: Schema.ObjectId, ref: "Evento" }


});
module.exports = mongoose.model('suscribeAso', suscribeEventoSchema);
