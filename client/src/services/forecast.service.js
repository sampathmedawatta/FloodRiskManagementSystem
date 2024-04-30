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
      location: "Hong Kong Island",
      forecast: [
        {
          date: "2024-05-1",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-2",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-3",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-4",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-5",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-6",
          day: "Monday",
          riskLevel: "Moderate",
          reainfall: "41",
          flood: "51",
        },
        {
          date: "2024-05-7",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-08",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-09",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-11",         
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-12",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-13",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-14",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
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
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
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
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
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
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
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
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          reainfall: "41",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          reainfall: "41",
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
