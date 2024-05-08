const Location = require("../modules/locationModel");

exports.getAllLocations = async (request, response) => {
  const locations = await Location.find();

  response.status(200).json(locations);
};

exports.getLocationByName = async (request, response) => {
  const location = await Location.findOne({ name: request.params.name });

  if (!location) {
    return response.status(404).json({ message: "Location not found" });
  }

  response.status(200).json(location);
};

exports.createLocation = async (request, response) => {
  const { lat, long, name, value, type, address, contact, refLocation, code } =
    request.body;

  const locationAvailable = await Location.findOne({ name });
  if (locationAvailable) {
    return response.status(400).json({ message: "Location already exists" });
  }

  const newLocation = await Location.create({
    location: [lat, long],
    name,
    value,
    type,
    address,
    contact,
    refLocation,
    code,
  });

  if (newLocation) {
    response.status(201).json({ _id: newLocation.id, name: newLocation.name });
  } else {
    return response.status(422).json({ message: "Location creation failed" });
  }
};

exports.updateLocation = async (request, response) => {
  const location = await Location.findOne({ _id: request.params.id });

  if (!location) {
    return response.status(404).json({ message: "Location not found" });
  }

  const { lat, long, value, type, address, contact, refLocation, code } =
    request.body;

  if (lat) {
    location.location =  [lat, long]
  }

  if (value) {
    location.value = value;
  }

  if (type) {
    location.type = type;
  }

  if (address) {
    location.address = address;
  }

  if (contact) {
    location.contact = contact;
  }

  if (refLocation) {
    location.refLocation = refLocation;
  }

   if (code) {
     location.code = code;
   }

  const updateResponse = await Location.findByIdAndUpdate(
    {
      name: location.name,
    },
    {
      location: location.location,
      value: location.value,
      type: location.type,
      address: location.address,
      contact: location.contact,
      refLocation: location.refLocation,
      code: location.code,
    }
  );

  response.status(200).json({ message: "location updated successfully - " });
};

exports.deleteLocation = async (request, response) => {
  try {
    const deleteResponse = await Location.findOneAndDelete({
      _id: request.params.id,
    });

    if (deleteResponse) {
      return response
        .status(200)
        .json({ message: "location deleted successfully" });
    }
  } catch (error) {
    response.status(500).send({ message: "Something went wrong!" });
  }
};
