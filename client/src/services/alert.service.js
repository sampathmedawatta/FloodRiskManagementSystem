import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/alerts",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const getAlertById = async (id) => {
  return await axiosInstance.get(`/${id}`, headers).then((response) => {
    return response.data;
  });
};

const getAllAlerts = async () => {
  return await axiosInstance.get("/", { headers }).then((response) => {
    return response.data;
  });
};
const getAlertsByDays = async (days) => {
  console.log("Fetching alerts for", days, "days");

  try {
    const response = await axiosInstance.get(`/days?days=${days}`, headers);
    console.log("Response from server:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching alerts:", error);
    throw error; // Propagate the error up the call stack
  }
};

const createAlert = async (formData) => {
  try {
    const response = await axiosInstance.post("/", formData, {});
    return response.data;
  } catch (error) {
    console.error("Error creating alert ", error);
    throw error;
  }
};
const updateAlertById = async (id, updatedFields) => {
  try {
    const response = await axiosInstance.put(`/${id}`, updatedFields, headers);
    return response.data;
  } catch (error) {
    console.error(`Error updating Alert with ID ${id}:`, error);
    throw error;
  }
};

const AlertService = {
  getAlertById,
  getAllAlerts,
  createAlert,
  getAlertsByDays,
  updateAlertById,
};

export default AlertService;
