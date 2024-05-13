import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000", // ML model api URL
  withCredentials: false, // Allow cookies to be sent with requests (if applicable)
});

const headers = {
  "Content-Type": "application/json",
  //Authorization: "Bearer your-access-token", // Add any custom headers as needed
};

const getForecastByLocation = async (location, days) => {

  let loc = 'CLK'
  if (location == "Chek Lap Kok") {
    loc = "CLK";
  } else if (location == "Cheung Chau") {
    loc = "CC";
  } else if (location == "Yau Ma Tei") {
    loc = "YMT";
  } else if (location == "Shek Kong") {
    loc = "SK";
  } else if (location == "Sha Tin") {
    loc = "ST";
  }
  
  const sessionData = sessionStorage.getItem(
    "forecastData" + loc + days + "days"
  );
  const sessionDate = sessionStorage.getItem(
    "forecastDataDate" + loc + days + "days"
  );
  const currentDate = new Date().toISOString().slice(0, 10);

  if (sessionData && sessionDate === currentDate) 
  {
    return JSON.parse(sessionData);
  } 
  else 
  {
  return await axiosInstance
    .get("/flood/forecast?location=" + loc + "&days=" + days, {
      headers,
    })
    .then((response) => {
      if (response != undefined && response != null) {
        // Save data in session storage
        sessionStorage.setItem(
          "forecastData" + loc + days + "days",
          JSON.stringify(response.data)
        );
        sessionStorage.setItem(
          "forecastDataDate" + loc + days + "days",
          currentDate
        );

        return response.data;
      }
    });
  }
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
  getForecastByDate,
  getForecastByLocation,
};

export default ForecastService;
