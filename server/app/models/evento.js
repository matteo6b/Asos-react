const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const EventoSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    unique:true
  },
  time : { type : Date, default: Date.now },
  fecha : { type : Date },
  precio:{
      type:String,
      required:true
  },
  descripcion:{
      type:String,
      required:true
  },
  pImg: {
    data: Buffer,
    contentType: String
  },
  lat:{
    type:SchemaTypes.Double
  },
  lng:{
    type:SchemaTypes.Double
  },
  finish:{
    type:Boolean
  },

user: { type: Schema.ObjectId, ref: "User" },
asociacion: { type: Schema.ObjectId, ref: "Asociacion" },
type: { type: Schema.ObjectId, ref: "Type" },
image: [{ type: Schema.ObjectId, ref: "Image" }]


});
module.exports = mongoose.model('Evento', EventoSchema);
