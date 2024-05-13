const crypto = require("crypto");
const { notificationEmail } = require("../communication/emailService");
const Alerts = require("../modules/alertsModel");
const User = require("../modules/userModel");

exports.getAllAlerts = async (request, response) => {
  const alerts = await Alerts.find();
  response.status(200).json(alerts);
};

exports.getAlertById = async (request, response) => {
  const alert = await Alerts.findOne({ _id: request.params.id });

  if (!alert) {
    return response.status(404).json({ message: "alert not found" });
  }

  response.status(200).json(alert);
};

exports.getAlertsByDays = async (request, response) => {
  try {
    const { days } = request.query; 

    // Check if days is provided and is a valid number
    if (!days || isNaN(parseInt(days))) {
      return response.status(400).json({ success: false, error: "Invalid days parameter" });
    }

    const numDays = parseInt(days);
    const currentDate = new Date();
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + numDays); 
    currentDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    const alerts = await Alerts.find({
      alertDate: { $gte: currentDate, $lte: endDate },
    });
    if (alerts.length === 0) {
      return response.status(404).json({ success: false, error: "No alerts found in the specified date range" });
    }

    return response.json({ success: true, alerts });
  } catch (error) {
    return response.status(500).json({ success: false, error: error.message });
  }
};



exports.createAlert = async (request, response) => {
  try {
    const {
      alertDate,
      riskLevel,
      floodPrediction,
      title,
      description,
      location,
      title_zh,
      description_zh,
      authorities,
      urgent,
      active,
    } = request.body;

    // Check if all required fields are present
    const requiredFields = [
      "alertDate",
      "riskLevel",
      "floodPrediction",
      "title",
      "description",
      "location",
      "title_zh",
      "description_zh",
      "urgent",
    ];
    const missingFields = requiredFields.filter(
      (field) => !request.body.hasOwnProperty(field)
    );

    if (missingFields.length > 0) {
      return response.status(422).json({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }
    const publishedDate = new Date();

    // Create a new alert
    const alert = await Alerts.create({
      alertDate,
      riskLevel,
      floodPrediction,
      title,
      description,
      location,
      publishedDate,
      title_zh,
      description_zh,
      authorities: authorities || true,
      urgent,
      active: active || true, 
    });

    // send notifications
    try{
        await sendNotification(
          title,
          description,
          riskLevel,
          authorities || true
        );
    }catch(error){
      console.log('Notification email not sent.')
    }

    response.status(201).json({ success: true, alert });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
};
exports.updateAlert = async (request, response) => {
  try {
    const alertId = request.params.id;
    const { title, description, title_zh, description_zh, urgent, active } =
      request.body;

    let alert = await Alerts.findById(alertId);

    if (!alert) {
      return response.status(404).json({ message: "Alert not found." });
    }

    if (title) {
      alert.title = title;
    }
    if (description) {
      alert.description = description;
    }
    if (title_zh) {
      alert.title_zh = title_zh;
    }
    if (description_zh) {
      alert.description_zh = description_zh;
    }
    if (urgent !== undefined) {
      alert.urgent = urgent;
    }
    if (active !== undefined) {
      alert.active = active;
    }

    // Save the updated alert
    alert = await alert.save();

    response.json({ success: true, alert });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
};

exports.deleteAlert = async (request, response) => {
  try {
    const deleteResponse = await Alerts.findOneAndDelete({
      _id: request.params.id,
    });

    if (deleteResponse) {
      return response
        .status(200)
        .json({ message: "alert deleted successfully" });
    }
  } catch (error) {
    response.status(500).send({ message: "Something went wrong!" });
  }
};

const sendNotification = async (title, description, riskLevel, authorities) => {
  try {
    // get user email list
    const registeredUsers = await User.find();

    if (registeredUsers) {
      // Extract email addresses from the fetched users and store them in an array
      const emailList = registeredUsers?.map((user) => user.email);
      await notificationEmail(emailList, title, riskLevel, description);
    }

    // send notification to authorities
    if (authorities) {
      // get authorities email list
      await notificationEmail(
        "104168436@student.swin.edu.au",
        title,
        riskLevel,
        description
      );
    }
  } catch (error) {
    console.log("sendNotification failed " + error);
  }
};
