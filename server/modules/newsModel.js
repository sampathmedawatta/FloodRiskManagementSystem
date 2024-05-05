const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  title_zh: { type: String, required: true },
  description_zh: { type: String, required: true },
  description: { type: String, required: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  imageURL: { type: String, required: true },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("News", newsSchema);
