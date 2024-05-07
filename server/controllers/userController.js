const bcrypt = require("bcrypt");
const User = require("../modules/userModel");
const { ObjectId } = require("mongodb");

exports.getAllUsers = async (request, response) => {
  const users = await User.find();

  response.status(200).json(users);
};

exports.getUserById = async (request, response) => {
  try {
    const userId = new ObjectId(request.params.id); //nodesjs have issue with  mongoose. NEED PASS AS NEW OBJECT
    const user = await User.findOne({ _id: userId });

    if (!user) {
      return response.status(404).json({ message: "User not found" });
    }

    // If user found, send it in the response
    response.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    response.status(500).json({ message: "Internal server error" });
  }
};

exports.createUser = async (request, response) => {
  const {
    fName,
    lName,
    email,
    password,
    contactNo,
    preferedLocation,
    address,
    state,
    type,
    lang,
    postCode,
  } = request.body;

  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    return response.status(400).json({ message: "User already exists" });
  }

  if (!email) {
    return response.status(422).json({ message: "Email is required" });
  }
  if (!password) {
    return response.status(422).json({ message: "Password is required" });
  }

  if (type !== "REGISTEREDUSER" && type !== "ADMIN") {
    return response.status(422).json({ message: "Invalid user type" });
  }

  const allowedlang = ["English", "Chinese"];
  if (!lang|| !allowedlang.includes(lang)) {
    return response.status(422).json({ message: "Invalid Lang " });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const currentDate = new Date();

  const newUser = await User.create({
    fName,
    lName,
    email,
    hashPassword,
    contactNo,
    preferedLocation,
    address,
    state,
    registeredDate: currentDate, // Set the registration date
    postCode,
    type,
    lang,
    hasLoggedIn: false,
    active: true,
  });

  if (newUser) {
    response.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    return response.status(422).json({ message: "User creation failed" });
  }
};

exports.updateUser = async (request, response) => {
  const user = await User.findOne({ _id: request.params.id });

  if (!user) {
    return response.status(404).json({ message: "User not found" });
  }

  const {
    fName,
    lName,
    contactNo,
    preferedLocation,
    address,
    state,
    postCode,
    type,
    lang,
    hasLoggedIn,
    active,
  } = request.body;

  if (lang) {
    const allowedLang = ["English", "Chinese"];
    if (!allowedLang.includes(lang)) {
      return response.status(422).json({ message: "Invalid language" });
    }
    user.lang = lang;
  }

  if (fName) {
    user.fName = fName;
  }

  if (lName) {
    user.lName = lName;
  }

  if (contactNo) {
    user.contactNo = contactNo;
  }

  if (preferedLocation) {
    user.preferedLocation = preferedLocation;
  }

  if (address) {
    user.address = address;
  }

  if (state) {
    user.state = state;
  }

  if (postCode) {
    user.postCode = postCode;
  }

  if (type) {
    user.type = type;
  }

  if ("active" in request.body) {
    user.active = active;
  }

  if (typeof hasLoggedIn === "boolean") {
    user.hasLoggedIn = hasLoggedIn;
  }

  // Save the updated user
  try {
    await user.save();
    response.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    response.status(500).json({ message: "Failed to update user" });
  }
};

exports.deleteUser = async (request, response) => {
  try {
    const deleteResponse = await User.findOneAndDelete({
      _id: request.params.id,
    });

    if (deleteResponse) {
      return response
        .status(200)
        .json({ message: "user deleted successfully" });
    }
  } catch (error) {
    response.status(500).send({ message: "Something went wrong!" });
  }
};

// Login Authentication
exports.authenticateUser = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }
    
    const isMatch = await bcrypt.compare(password, user.hashPassword);
    if (!isMatch) {
      return { success: false, message: "Invalid password" };
    }
    
    return { success: true, user };
  } catch (error) {
    console.error("Error authenticating user:", error);
    return { success: false, message: "Internal server error" };
  }
};

// Password Change
exports.changePassword = async (userId, currentPassword, newPassword) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      return { success: false, message: "User not found" };
    }
    
    const isMatch = await bcrypt.compare(currentPassword, user.hashPassword);
    if (!isMatch) {
      return { success: false, message: "Current password is incorrect" };
    }
    
    // Hash the new password
    const newHashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Update the hashed password in the database
    user.hashPassword = newHashedPassword;
    await user.save();
    
    return { success: true, message: "Password changed successfully" };
  } catch (error) {
    console.error("Error changing password:", error);
    return { success: false, message: "Internal server error" };
  }
};
