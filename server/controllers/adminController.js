const crypto = require("crypto");

const admins = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    contactNo: "0123456789",
    registeredDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    contactNo: "0123456789",
    registeredDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    fName: "fName",
    lName: "lName",
    email: "email@email.com",
    contactNo: "0123456789",
    registeredDate: "01/05/2024",
    active: true,
  },
];

exports.getAllAdmins = (request, response) => {
  response.status(200).json(admins);
};

exports.getAdminById = (request, response) => {
  const admin = admins.find((admin) => admin.id == request.params.id);

  if (!admin) {
    return response.status(404).json({ message: "admin not found" });
  }

  response.status(200).json(admin);
};

exports.createAdmin = (request, response) => {
  const {
    fName,
    lName,
    email,
    contactNo,
    registeredDate,
    active,
  } = request.body;

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  admins.push({
    id,
    fName,
    lName,
    email,
    contactNo,
    registeredDate,
    active,
  });

  response.status(201).json({ message: "admin created successfully", id });
};

exports.updateAdmin = (request, response) => {
  const admin = admins.find((admin) => admin.id == request.params.id);

  if (!admin) {
    return response.status(404).json({ message: "admin not found" });
  }

  const {
    fName,
    lName,
    email,
    contactNo,
    registeredDate,
    active,
  } = request.body;

  if (fName) {
    admin.fName = fName;
  }

  if (lName) {
    admin.lName = lName;
  }

  if (email) {
    admin.email = email;
  }

  if (contactNo) {
    admin.contactNo = contactNo;
  }

  if (registeredDate) {
    admin.registeredDate = registeredDate;
  }

  if ("active" in request.body) {
    admin.active = active;
  }

  response.status(200).json({ message: "admin updated successfully" });
};

exports.deleteAdmin = (request, response) => {
  const adminIndex = admins.findIndex((admin) => admin.id == request.params.id);

  if (adminIndex == -1) {
    return response.status(404).json({ message: "admin not found" });
  }

  admins.splice(adminIndex, 1);

  response.status(200).json({ message: "admin deleted successfully." });
};
