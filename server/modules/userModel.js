const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
    },
    lName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    contactNo: {
      type: String,
      require: true,
    },
    preferedLocation: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    postCode: {
      type: Number,
      require: true,
    },
    registeredDate: {
      type: Date,
      require: true,
    },
    active: {
      type: Boolean,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);

