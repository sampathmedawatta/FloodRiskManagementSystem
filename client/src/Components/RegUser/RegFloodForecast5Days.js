import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";
import { useLocation } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";

function RegFloodForecast5Days() {
  const [forecastData, setForecastData] = useState([]);
  const { location } = useLocation();

  useEffect(() => {
    // Function to remove duplicate forecasts with the same date
    const removeDuplicateForecasts = (forecasts) => {
      const uniqueDates = new Set();
      const uniqueForecasts = [];
      forecasts.forEach((forecast) => {
        const forecastDate = new Date(forecast.date).toDateString();
        if (!uniqueDates.has(forecastDate)) {
          uniqueDates.add(forecastDate);
          uniqueForecasts.push(forecast);
        }
      });
      return uniqueForecasts;
    };

    // Function to filter forecast data for the next five days
    const filterForecastData = (forecastData) => {
      const today = new Date();
      // Calculate five days from today
      const fiveDaysLater = new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000);
      return forecastData.filter((forecastItem) => {
        const forecastDate = new Date(forecastItem.date);
        return forecastDate >= today && forecastDate <= fiveDaysLater;
      });
    };

    // Fetch forecast data and filter it
    const getForecastData = async () => {
      try {
        const forecastResponse = await ForecastService.getForecast();
        if (forecastResponse) {
          let filteredLocation = forecastResponse.find(
            (loc) => loc.location === location
          );
          if (filteredLocation) {
            const filteredForecast = filterForecastData(
              filteredLocation.forecast
            );
            const uniqueForecasts = removeDuplicateForecasts(filteredForecast);
            setForecastData(uniqueForecasts);
          } else {
            setForecastData([]);
          }
        }
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    getForecastData();
  }, [location]);

  return (
    <div>
      <div className="row gx-2 justify-content-between">
        <div className="col-12">
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="row">
                    <div className="col-md-10">
                      <h6 className="text-start">
                        <i className="bi bi-tsunami fs-5" />
                        &nbsp;&nbsp;Flood Forecast for {location} - Next 5 Days
                      </h6>
                    </div>
                    <div className="col-md-2">
                      <p className="text-end font-xs color-text-paragraph-2">
                        <Link to={"/flood-forecast"}>See More</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="container">
                    <div className="row gx-2 justify-content-between">
                      {forecastData.length > 0 ? (
                        forecastData.map((forecastItem, index) => (
                          <ForecastCard key={index} forecast={forecastItem} />
                        ))
                      ) : (
                        <p>No forecast data available.</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegFloodForecast5Days;
