const crypto = require("crypto");
const { notificationEmail } = require("../communication/emailService");
const alerts = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "alert1",
    description: "alert description",
    location: "location",
    riskLevel: "H",
    registeredUser: true,
    authorities: true,
    publishDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "alert1",
    description: "alert description",
    location: "location",
    riskLevel: "H",
    registeredUser: true,
    authorities: true,
    publishDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "alert1",
    description: "alert description",
    location: "location",
    riskLevel: "H",
    registeredUser: true,
    authorities: true,
    publishDate: "01/05/2024",
    active: true,
  },
];

exports.getAllAlerts = (request, response) => {
  response.status(200).json(alerts);
};

exports.getAlertById = (request, response) => {
  const alert = alerts.find((alert) => alert.id == request.params.id);

  if (!alert) {
    return response.status(404).json({ message: "alert not found" });
  }

  response.status(200).json(alert);
};

exports.createAlert = async (request, response) => {
  const {
    title,
    description,
    location,
    riskLevel,
    registeredUser,
    authorities,
    publishDate,
    active,
  } = request.body;

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  alerts.push({
    id,
    title,
    description,
    location,
    riskLevel,
    registeredUser,
    authorities,
    publishDate,
    active,
  });

  // enable this to send notifications
  // sendNotification(title, description, authorities, registeredUser);

  response.status(201).json({ message: "alert created successfully", id });
};

exports.updateAlert = (request, response) => {
  const alert = alerts.find((alert) => alert.id == request.params.id);

  if (!alert) {
    return response.status(404).json({ message: "alert not found" });
  }

  const {
    title,
    description,
    location,
    riskLevel,
    registeredUser,
    authorities,
    publishDate,
    active,
  } = request.body;

  if (title) {
    alert.title = title;
  }

  if (description) {
    alert.description = description;
  }

  if (location) {
    alert.location = location;
  }

  if (riskLevel) {
    alert.riskLevel = riskLevel;
  }

  if (registeredUser) {
    alert.registeredUser = registeredUser;
  }

  if (authorities) {
    alert.authorities = authorities;
  }

  if (publishDate) {
    alert.publishDate = publishDate;
  }

  if ("active" in request.body) {
    alert.active = active;
  }

  response.status(200).json({ message: "alert updated successfully" });
};

exports.deleteAlert = (request, response) => {
  const alertIndex = alerts.findIndex((alert) => alert.id == request.params.id);

  if (alertIndex == -1) {
    return response.status(404).json({ message: "alert not found" });
  }

  alerts.splice(alertIndex, 1);

  response.status(200).json({ message: "alert deleted successfully." });
};

const sendNotification = async (
  title,
  description,
  authorities,
  registeredUser
) => {
  try {
    let emailList = ["chatbotappportal@gmail.com"];
    // get user email list

    if (registeredUser) {
      emailList.push("sam.medawatta@gmail.com");
    }

    // get authorities email list
    if (authorities) {
      emailList.push("104168436@student.swin.edu.au");
    }

    await notificationEmail(emailList, title, description);
  } catch (error) {
    console.log("sendNotification failed");
  }
};
