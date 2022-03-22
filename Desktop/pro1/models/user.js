const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// create user model using the userSchema
const User = model("User", UserSchema);
// exporting the user model
module.exports = User;
