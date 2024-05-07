import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000", // ML model api URL
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

export const response = {
  data: [
    {
      location: "Chek Lap Kok",
      forecast: [
        {
          date: "2024-05-6",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "21",
          rainfall: "11",
        },
        {
          date: "2024-05-7",
          day: "Thursday",
          riskLevel: "Low",
          flood: "10",
          rainfall: "10",
        },
        {
          date: "2024-05-8",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "12",
          rainfall: "11",
        },
        {
          date: "2024-05-9",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-11",
          day: "Monday",
          riskLevel: "Moderate",
          rainfall: "41",
          flood: "51",
        },
        {
          date: "2024-05-12",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-13",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-14",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-15",
          day: "Friday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-16",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-17",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-18",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-19",
          day: "Tuesday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
      ],
    },
    {
      location: "Shek Kong",
      forecast: [
        {
          date: "2024-05-6",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-7",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-8",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-9",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-11",
          day: "Monday",
          riskLevel: "High",
          flood: "27",
          rainfall: "31",
        },
        {
          date: "2024-05-12",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "31",
          rainfall: "21",
        },
        {
          date: "2024-05-13",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "22",
          rainfall: "27",
        },
        {
          date: "2024-05-14",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "31",
          rainfall: "22",
        },
        {
          date: "2024-05-15",
          day: "Friday",
          riskLevel: "High",
          flood: "29",
          rainfall: "32",
        },
        {
          date: "2024-05-16",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-17",
          day: "Sunday",
          riskLevel: "High",
          flood: "21",
          rainfall: "11",
        },
        {
          date: "2024-05-18",
          day: "Monday",
          riskLevel: "High",
          flood: "22",
          rainfall: "18",
        },
        {
          date: "2024-05-19",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "43",
          rainfall: "27",
        },
      ],
    },
    {
      location: "Sha Tin",
      forecast: [
        {
          date: "2024-05-6",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-7",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-8",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-9",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-11",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-12",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-13",
          day: "Wednesday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-14",
          day: "Thursday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-15",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-16",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-17",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-18",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-19",
          day: "Tuesday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
      ],
    },
    {
      location: "Cheung Chau",
      forecast: [
        {
          date: "2024-05-6",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-7",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-8",
          day: "Friday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-9",
          day: "Saturday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Sunday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-11",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-12",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-13",
          day: "Wednesday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-14",
          day: "Thursday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-15",
          day: "Friday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-16",
          day: "Saturday",
          riskLevel: "Low",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-17",
          day: "Sunday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-18",
          day: "Monday",
          riskLevel: "Moderate",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-19",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
      ],
    },
    {
      location: "Yau Ma Tei",
      forecast: [
        {
          date: "2024-05-1",
          day: "Wednesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-2",
          day: "Thursday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-3",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-4",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-5",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-6",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-7",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-8",
          day: "Wednesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-9",
          day: "Thursday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-10",
          day: "Friday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-11",
          day: "Saturday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-12",
          day: "Sunday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-13",
          day: "Monday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
        {
          date: "2024-05-14",
          day: "Tuesday",
          riskLevel: "High",
          flood: "51",
          rainfall: "41",
        },
      ],
    },
  ],
};

const getForecast = () => {
  return response.data;
};

const getForecastByDate = async (days) => {
  
  const sessionData = sessionStorage.getItem("forecastData" + days + "days");
  const sessionDate = sessionStorage.getItem(
    "forecastDataDate" + days + "days"
  );
  const currentDate = new Date().toISOString().slice(0, 10);

  if (sessionData && sessionDate === currentDate) 
  {
    return JSON.parse(sessionData);
  } 
  else 
  {
    return await axiosInstance
      .get("/flood/forecast/all?days=" + days, {
        headers,
      })
      .then((response) => {
        if (response != undefined && response != null) {
          
          // Save data in session storage
          sessionStorage.setItem(
            "forecastData" + days + "days",
            JSON.stringify(response.data)
          );
          sessionStorage.setItem("forecastDataDate"+ days + "days", currentDate);

          return response.data;
        }
      });
  }
};

const ForecastService = {
  getForecast,
  getForecastByDate,
};

export default ForecastService;
