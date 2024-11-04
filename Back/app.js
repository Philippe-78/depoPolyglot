const express = require("express");
const app = express();
// const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Writers = require("./model");
 
const port = 8080;
 
mongoose.connect("mongodb://localhost:27017/TestDataBase");
 
app.listen(port, function () {
  console.log(`app listening on port: ${port}`);
});
 
app.get("/writers", async (req, res) => {
  console.log("Getting all writers");
  const data = await Writers.find({});
  console.log(data);
  res.json(data);
});
 
 