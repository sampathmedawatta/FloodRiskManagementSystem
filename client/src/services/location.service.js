import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/location",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};


const getLocationList = async () => {
  const sessionData = sessionStorage.getItem(
    "LocationList"
  );
  const sessionDate = sessionStorage.getItem(
    "LocationListDate"
  );
  const currentDate = new Date().toISOString().slice(0, 10);

  if (sessionData && sessionDate === currentDate) {
    return JSON.parse(sessionData);
  } else {
    return await axiosInstance
      .get("/", {
        headers,
      })
      .then((response) => {
        if (response != undefined && response != null) {
          // Save data in session storage
          sessionStorage.setItem("LocationList", JSON.stringify(response.data));
          sessionStorage.setItem("LocationListDate", currentDate);
          return response.data;
        }
      });
  }
};


const getLocations = async () => {

  return await getLocationList();
};

const getLocationByCode = async (code) => {
  const locations = await getLocationList();
  const location = locations.filter((location) => location.code === code);
  return location;

};

const getFloodLocations = async (type) => {

  // Filter the locations array to only include objects with a type
  const locations = await getLocationList();
  const floodLocations = locations.filter(
    (location) => location.type === type 
  );

  return floodLocations;
};

const createLocation = async (formData) => {
  try {
    const response = await axiosInstance.post("/", formData, {});

     sessionStorage.removeItem("LocationList");
     sessionStorage.removeItem("LocationListDate");
     
    return response.data;
  } catch (error) {
    console.error("Error creating location ", error);
    throw error;
  }
};

const LocationService = {
  getLocations,
  getLocationByCode,
  getFloodLocations,
  createLocation,
};

export default LocationService;
