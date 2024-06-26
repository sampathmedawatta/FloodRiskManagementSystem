const nodemailer = require("nodemailer");

const {v4: uuidv4} = require("uuid")

require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.AUTH_EMAIL,
    pass: process.env.AUTH_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready for messages");
  }
});

const verifyPassword = async ( email, password) => {
  try {

    const toList = ["sam.medawatta@gmail.com", email];
    const mailOptions = {
      from: {
        name: "Flood Forecast System",
        address: process.env.AUTH_EMAIL,
      },
      to: toList,
      subject: "Admin account details - Flood Risk Management Dashboard",
      html: `<p>Please use this password to access the Flood Forecast system. </p>
                    <p>Password: <b>${password}</b></p>`,
    };

    //await transporter.sendMail(mailOptions);
    console.log("Admin password email sent!");
  } catch (error) {
    console.log(error);
  }
};

const verifyEmail = async (id, email) => {
  try {
    const url = "http://localhost:3001/";
    const uniqueString = uuidv4() + id;

    const toList = ["sam.medawatta@gmail.com", email];
    const mailOptions = {
      from: {
        name: "Flood Forecast System",
        address: process.env.AUTH_EMAIL,
      },
      to: toList,
      subject: "Verify your Email - Flood Risk Management Dashboard",
      html: `<p>Verify Your Email address to complete signup</p>
                    <p>This link <b>expires in 6 hours</b>.</p>
                    <p>Click <a href=${
                      url + "user/verify/" + id + "/" + uniqueString
                    }> here </a> to proceed.</p>`,
    };

    //await transporter.sendMail(mailOptions);
    console.log("Verification email sent!");
  } catch (error) {
    console.log(error);
  }
};

const otpEmail = async (email, otp) => {
  try {

    const toList = ["sam.medawatta@gmail.com", email];
    const mailOptions = {
      from: {
        name: "Flood Forecast System",
        address: process.env.AUTH_EMAIL,
      },
      to: toList,
      subject: "OTP verification Email - Flood Risk Management Dashboard",
      html: `<p>Your one-time password is <b> ${otp} </b></p>`,
    };

    // await transporter.sendMail(mailOptions);
    console.log("OTP Verification email sent! - " + toList);
  } catch (error) {
    console.log(error);
  }
};

const notificationEmail = async (emailList, title, riskLevel, message) => {
  try {
    const mailOptions = {
      from: {
        name: "Flood Forecast System",
        address: process.env.AUTH_EMAIL,
      },
      to: [emailList],
      subject: " Alert (" + riskLevel + ") - Flood Risk Management Dashboard",
      html: `<p>Title: ${title}</p>
            <p>Risk Level: ${riskLevel}</p>
            <p>Message: ${message}</p>`,
    };

    //await transporter.sendMail(mailOptions);

    console.log("Alert email sent! - " + emailList);
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
  otpEmail,
  verifyEmail,
  verifyPassword,
  notificationEmail,
};