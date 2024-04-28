const bcrypt = require("bcrypt");
const User = require("../modules/userModel");

exports.getAllUsers = async (request, response) => {
  const users = await User.find();

  response.status(200).json(users);
};

exports.getUserById = async (request, response) => {
  const user = await User.findOne({ _id: request.params.id });

  if (!user) {
    return response.status(404).json({ message: "user not found" });
  }

  response.status(200).json(user);
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
    return response.status(404).json({ message: "user not found" });
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
    active,
  } = request.body;

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

  const updateResponse = await User.findByIdAndUpdate(
    {
      _id: request.params.id,
    },
    {
      fName: user.fName,
      fName: user.fName,
      lName: user.lName,
      contactNo: user.contactNo,
      preferedLocation: user.preferedLocation,
      address: user.address,
      state: user.state,
      postCode: user.postCode,
      active: user.active,
    }
  );

  response.status(200).json({ message: "user updated successfully - " });
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
