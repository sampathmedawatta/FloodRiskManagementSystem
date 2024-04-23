const crypto = require("crypto");

const users = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
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

exports.createUser = (request, response) => {
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

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  users.push({
    id,
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
  });

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
