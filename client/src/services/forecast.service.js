import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

export const response = {
  data: [
    {
      location: "Hong Kong Observatory",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Low",
        },
      ],
    },
    {
      location: "Shek Kong",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Moderate",
        },
      ],
    },
    {
      location: "Cheung Chau",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
        },
      ],
    },
    {
      location: "Tseung Kawn",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "High",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "High",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "High",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
        },
      ],
    },
    {
      location: "Tai Po",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Low",
        },
      ],
    },
  ],
};

const get = async () => {
  return await axiosInstance
    .get("/", {
      headers,
    })
    .then((response) => {
      if (response != undefined && response != null) {
        console.log("response : " + response);
        return response.data;
      }
    });
};

const getForecast = () => {
  return response.data;
};

const post = (parms) => {
  return axiosInstance
    .post("/save", parms, {
      headers,
    })
    .then((response) => {
      console.log("response : " + response);
      return response.data;
    });
};

const ForecastService = {
  get,
  getForecast,
  post,
};

export default ForecastService;
