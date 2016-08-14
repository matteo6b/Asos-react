const mongoose = require('mongoose'),
                  Schema = mongoose.Schema;

const TypeSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
    unique:true
  }

  });

  module.exports = mongoose.model('Type', TypeSchema);
