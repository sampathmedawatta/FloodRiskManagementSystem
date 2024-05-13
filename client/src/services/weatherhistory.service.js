import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/weather/",
  withCredentials: false,
});

const headers = {
  "Content-Type": "application/json",
};

const getWeatherHistory = async (location, year, month) => {
  console.log("getWeatherHistory:"+ location +year+month);
  try {
    const response = await axiosInstance.get(`/history?location=${location}&year=${year}&month=${month}`, {
      headers: headers,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(`Request failed with status ${error.response.status}: ${error.response.data}`);
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error("Error setting up the request: " + error.message);
    }
  }
};

const updateHistoryData = async (locationCode) => {
  try {
    return await axiosInstance
      .get("/history/update?location=" + locationCode, {
        headers,
      })
      .then((response) => {
        if (response != undefined && response != null) {
          return response.data;
        }
      });
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Request failed with status ${error.response.status}: ${error.response.data}`
      );
    } else if (error.request) {
      throw new Error("No response received from the server");
    } else {
      throw new Error("Error setting up the request: " + error.message);
    }
  }
};

const WeatherHistoryService = {
  getWeatherHistory,
  updateHistoryData,
};

export default WeatherHistoryService;
