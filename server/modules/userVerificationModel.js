const mongoose = require("mongoose");

const userVerificationSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    uniqueString: {
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

module.exports = mongoose.model("userVerification", userVerificationSchema);
