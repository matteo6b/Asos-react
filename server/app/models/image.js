const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;

const ImageSchema = new mongoose.Schema({
    img: { data: Buffer, contentType: String },
    time : { type : Date, default: Date.now }
    asociacion: { type: Schema.ObjectId, ref: "Asociacion" },
    evento:{ type: Schema.ObjectId, ref: "Evento" }


});
module.exports = mongoose.model('Image', ImageSchema);
