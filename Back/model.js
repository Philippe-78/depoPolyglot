const mongoose = require("mongoose");
 
const schema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  ville: String,
  livres: [String],
});
 
module.exports = mongoose.model("Writers", schema, "TestCollection");
 