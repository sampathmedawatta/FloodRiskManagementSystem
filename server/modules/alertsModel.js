const mongoose = require("mongoose");

const alertsSchema = new mongoose.Schema({
  alertDate: { type: Date, required: true },
  riskLevel:{ type: String, required: true },
  floodPrediction:{ type: String, required: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  publishedDate: { type: Date, required: true },
  title_zh: { type: String, required: true },
  description_zh: { type: String, required: true },
  description: { type: String, required: true }, 
  authorities: { type: Boolean, default: true },
  urgent: { type: Boolean, default: false },
  active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Alerts", alertsSchema);

