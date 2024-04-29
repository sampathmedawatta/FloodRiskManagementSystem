import React, { useEffect, useState } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import ObservationService from "../../services/observation.service";

const WeatherObservationCard = () => {
  const { dayOfWeek, dayOfMonth } = getCurrentDateInfo();
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  //TODO: we have to look for a proper API and use the actual location with context value
  const location = "Hong Kong Observatory";

  useEffect(() => {
    const getObservations = async () => {
      try {
        const observations = await ObservationService.getObservations();
        
        if (observations) {
          const humidityData = observations.humidity.data.find(item => item.place === location);
          const temperatureData = observations.temperature.data.find(item => item.place === location);

          const weatherInfo = {
            humidity: humidityData ? humidityData.value : null,
            temperature: temperatureData ? temperatureData.value : null,
          };
          
          setWeatherData(weatherInfo);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    getObservations();
  },[]);

  useEffect(() => {
    const interval = setInterval(() => {
      const {currentTime} = getCurrentDateInfo(); // Get current time using utility function
      setCurrentTime(currentTime);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container bg-subtle observation-table-header">
      <div className="row p-2">
        <div className="col-9">
          <h6 className="text-white">Weather Observation</h6>
          <p>
            {dayOfWeek}, {dayOfMonth}
          </p>
        </div>
        <div className="col-3 text-center">{currentTime}</div>
      </div>
      <div className="table-responsive observation-table-body">
        <table className="table text-white">
          <tbody>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-thermometer-half"></i>
                  <p>Temperature</p>
                  <p>{weatherData?.temperature}°C</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-clouds"></i>
                  <p>Cloud</p>
                  <p>24%</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-wind"></i>
                  <p>Haze</p>
                  <p>20km/h</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-sunrise"></i>
                  <p>Sun raise</p>
                  <p>06.00am</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-sunset"></i>
                  <p>Sun set</p>
                  <p>06.00pm</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-droplet"></i>
                  <p>Drop</p>
                  <p>{weatherData?.humidity}%</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherObservationCard;
