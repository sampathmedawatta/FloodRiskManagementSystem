const UserVerification = require("../modules/userVerificationModel");
const UserOTPVerification = require("../modules/UserOTPVerificationModel");
const User = require("../modules/userModel");

exports.getAllOTPs = async (request, response) => {
  const otps = await UserOTPVerification.find();
  response.status(200).json(otps);
};

exports.verifyOTP = async (request, response) => {
  try {
    const { otpCode } = request.body;

    const otpUser = await UserOTPVerification.findOne({
      userId: request.params.id,
      otp: otpCode,
    });

    if (!otpUser) {
      return response
        .status(200)
        .json({ message: "User not found", verified: false });
    }
    else{
      return response
        .status(200)
        .json({ message: "User otp verified!", verified: true });
    }

  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to verified user otp!", verified: false });
  }
};

exports.getAllEmails = async (request, response) => {
  const emails = await UserVerification.find();
  response.status(200).json(emails);
};

exports.verifyEmail = async (request, response) => {
  try {
    const emailUser = await UserVerification.findOne({
      _id: request.params.id,
    });

    if (!emailUser) {
      return response.status(404).json({ message: "User not found" });
    }

    const { verificationCode } = request.body;

    if (emailUser.uniqueString === verificationCode) {
      // get user

      const user = await User.findOne({ _id: request.params.id });

      if (!user) {
        return response.status(404).json({ message: "User not found" });
      }

      user.active = active;
      user.hasLoggedIn = hasLoggedIn;

      await user.save();
    }
    response
      .status(200)
      .json({ message: "User email verified!", active: true });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to verified user email!", active: false });
  }
};
