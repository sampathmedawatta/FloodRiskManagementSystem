const mongoose = require("mongoose");

const userOTPSchema = mongoose.Schema(
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

module.exports = mongoose.model("userOTPVerification", userOTPSchema);
