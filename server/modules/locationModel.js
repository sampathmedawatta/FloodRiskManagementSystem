const mongoose = require("mongoose");

const locationSchema = mongoose.Schema(
  {
    // latitude: 22.26132,
    // longitude: 114.17999,
    // name: "Cheung Chau",
    // value: "Flood Location",
    // type: "Flood",
    // address: "Cheung Chau",
    // contact: "-",
    // refLocation: "Cheung Chau",

    location: [],
    name: {
      type: String,
      require: true,
      unique: true,
    },
    value: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    contact: {
      type: String,
      require: true,
    },
    refLocation: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Location", locationSchema);
