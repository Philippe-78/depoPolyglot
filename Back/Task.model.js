const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  francais: String,
  anglais: String,
});

 module.exports = mongoose.model('Tasks', taskSchema);
