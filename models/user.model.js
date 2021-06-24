const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      max: 30,
    },
    username: {
      type: String,
      required: true,
      max: 15,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
    },
    phone: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
