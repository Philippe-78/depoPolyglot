
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  francais: String,
  anglais: String,
  type: {
    type: String,
    required: false 
  }
});

 module.exports = mongoose.model('Tasks', taskSchema);