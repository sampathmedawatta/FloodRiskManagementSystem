const mongoose = require("mongoose");

const inquiriesSchema = new mongoose.Schema({
  messageTitle: { type: String, required: true },
  messageDescription: { type: String, required: true },
  messageDate: { type: Date, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  inquiryStatus: { type: String, enum: ["PENDING", "REPLY","DISABLE"], required: true },
  replyTitle: { type: String },
  replyDescription: { type: String },
  replyDate: { type: Date }
});

module.exports = mongoose.model("Inquiries", inquiriesSchema);
