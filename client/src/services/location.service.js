const locations = [
  { id: 1, 
    locationName: "Hong Kong Observatory"
  },
  {
    id: 2,
    locationName: "Shek Kong",
  },
  { id: 3, 
    locationName: "Cheung Chau"
  },
  {
    id: 4,
    locationName: "Tseung Kawn",
  },
  {
    id: 5,
    locationName: "Tai Po",
  }
];

const getLocation = () => {
  return locations;
}

const LocationService = {
  getLocation
};

export default LocationService;