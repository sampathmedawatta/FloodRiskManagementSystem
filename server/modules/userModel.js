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
      require: false,
    },
    address: {
      type: String,
      require: false,
    },
    state: {
      type: String,
      require: false,
    },
    postCode: {
      type: Number,
      require: false,
    },
    registeredDate: {
      type: Date,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    lang: {
      type: String,
      require: true,
    },
    active: {
      type: Boolean,
      require: true,
    },
    hasLoggedIn: {
      type: Boolean,
      require: false,
    }
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", userSchema);

