import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000", // ML model api URL
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};


const getForecast = async (days) => {

  return await axiosInstance
    .get("/flood/forecast/all?days=" + days, {
      headers,
    })
    .then((response) => {
      if (response != undefined && response != null) {
        return response.data;
      }
    });
};


const ForecastService = {
  getForecast,
};

export default ForecastService;
