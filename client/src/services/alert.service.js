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

const AlertService = {
  getAlertById,
  getAllAlerts,
};

export default AlertService;
