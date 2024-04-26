const bcrypt = require("bcrypt");
const User = require("../modules/userModel");

const users = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    password: "sdsdssdsdsd",
    contactNo: "0123456789",
    preferedLocation: "Location 1",
    address: "Address 1",
    state: "VIC",
    postCode: 1234,
    registeredDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    password: "sdsdssdsdsd",
    contactNo: "0123456789",
    preferedLocation: "Location 1",
    address: "Address 1",
    state: "VIC",
    postCode: 1234,
    registeredDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    password: "sdsdssdsdsd",
    contactNo: "0123456789",
    preferedLocation: "Location 1",
    address: "Address 1",
    state: "VIC",
    postCode: 1234,
    registeredDate: "01/05/2024",
    active: true,
  },
];

exports.getAllUsers = (request, response) => {
  response.status(200).json(users);
};

exports.getUserById = (request, response) => {
  const user = users.find((user) => user.id == request.params.id);

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
    postCode,
    registeredDate,
    active,
  } = request.body;

  const userAvulable = await User.findOne({ email });
  if (userAvulable) {
    response.status(400).json({ message: "user already exist"});
  }

  if (!email) {
    return response.status(422).json({ message: "email is required" });
  }
  if (!password) {
    return response.status(422).json({ message: "password is required" });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    fName,
    lName,
    email,
    hashPassword,
    contactNo,
    preferedLocation,
    address,
    state,
    postCode,
    registeredDate,
    active,
  });

   if (user) {
     response.status(201).json({ _id: user.id, email: user.email });
   } else {
     return response.status(422).json({ message: "user creation failed" });
   }
   
  response.status(201).json({ message: "user created successfully", id });
};

exports.updateUser = (request, response) => {
  const user = users.find((user) => user.id == request.params.id);

  if (!user) {
    return response.status(404).json({ message: "user not found" });
  }

  const {
    fName,
    lName,
    email,
    contactNo,
    preferedLocation,
    address,
    state,
    postCode,
    registeredDate,
    active,
  } = request.body;

  if (fName) {
    user.fName = fName;
  }

  if (lName) {
    user.lName = lName;
  }

  if (email) {
    user.email = email;
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

  if (registeredDate) {
    user.registeredDate = registeredDate;
  }

  if ("active" in request.body) {
    user.active = active;
  }

  response.status(200).json({ message: "user updated successfully" });
};

exports.deleteUser = (request, response) => {
  const userIndex = users.findIndex((user) => user.id == request.params.id);

  if (userIndex == -1) {
    return response.status(404).json({ message: "user not found" });
  }

  users.splice(userIndex, 1);

  response.status(200).json({ message: "user deleted successfully." });
};
