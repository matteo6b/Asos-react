const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const AsociacionSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    unique:true
  },
  time : { type : Date, default: Date.now },
  cuota:{
      type:String,
      required:true
  },
  descripcion:{
      type:String,
      required:true
  },
  pImg: { data: Buffer,
    contentType: String
  },
  lat:{
    type: SchemaTypes.Double
  },
  lng:{
    type: SchemaTypes.Double
  },
  user: { type: Schema.ObjectId, ref: "User" },
  type: { type: Schema.ObjectId, ref: "Type" },
  evento: [{ type: Schema.ObjectId, ref: "Evento" }]


});
module.exports = mongoose.model('Asociacion', AsociacionSchema);
