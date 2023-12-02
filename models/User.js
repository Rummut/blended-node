const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
