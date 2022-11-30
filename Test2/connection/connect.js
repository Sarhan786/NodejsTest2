const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/test2')
.then(console.log("Login successful"))
  .catch(console.error);