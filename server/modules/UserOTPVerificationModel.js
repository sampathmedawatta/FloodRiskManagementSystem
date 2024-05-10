const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    otp: {
      type: String,
      require: true,
    },
    createAt: {
      type: Date,
      require: true,
    },
    expierAt: {
      type: Date,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("UserOTPVerification", userSchema);
