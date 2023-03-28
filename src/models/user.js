const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: [true, "Password is required"]
  },
  
});

const User = (module.exports = mongoose.model("User", UserSchema));