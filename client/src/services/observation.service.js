import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=en"
});

const getObservations = async (id) => {
  return await axiosInstance.get(`/`).then((response) => {
    return response.data;
  });
};


const AlertService = {
  getObservations
};

export default AlertService;