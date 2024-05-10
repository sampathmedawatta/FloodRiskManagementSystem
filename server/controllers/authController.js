const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../modules/userModel");

// Password change
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.params.id;
    const result = await userController.changePassword(
      userId,
      currentPassword,
      newPassword
    );
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } catch (error) {
    response.status(500).json({ error: "unable to get users" });
  }
};

exports.login = async (request, response) => {
  try {
    const SECRET_KEY = "secretkey";
    const { email, password } = request.body;

    if (!email) {
      return response
        .status(201)
        .json({ message: "Username or Passowrd required" });
    }
    if (!password) {
      return response
        .status(201)
        .json({ message: "Username or Passowrd required" });
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return response
        .status(201)
        .json({ message: "Invalid username", token: null });
    }
   
    const isPassword = await bcrypt.compare(password, user.hashPassword);

    if (!isPassword) {
      return response
        .status(201)
        .json({ message: "Invalid username or password", token: null });
    } 

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      SECRET_KEY,
      {
        expiresIn: "1hr",
      }
    );

    response.status(201).json({
      message: "User login successfully",
      token: token,
      user: {
        _id: user._id,
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        contactNo: user.contactNo,
        preferedLocation: user.preferedLocation,
        address: user.address,
        state: user.state,
        postCode: user.postCode,
        type: user.type,
        lang: user.lang,
        active: user.active,
        hasLoggedIn: user.hasLoggedIn,
      },
    });
  } catch (error) {
    response.status(500).json({ error: "unable to get users " + error });
  }
};
