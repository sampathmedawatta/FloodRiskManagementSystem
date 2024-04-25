import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";
import { useLocation } from "../../contexts/LocationContext";
import WeatherObservationCard from "./WeatherObservationCard";

function RegFloodForecast5Days() {
  const [forecastData, setForecastData] = useState([]);
  const { location } = useLocation();

  useEffect(() => {
    const getForecastData = async () => {
      try {
        const forecastResponse = await ForecastService.getForecast();
        //filter location and forecast data according to dropdown selection
        if (forecastResponse) {
          let filteredLocation = forecastResponse.find(
            (loc) => loc.location === location
          );
          if (filteredLocation) {
            const filteredForecast = filteredLocation.forecast.filter(
              (item) => {
                const forecastDate = new Date(item.date);
                const today = new Date();
                // Check if forecast date is after today and within 5 days
                return (
                  forecastDate.getDate() > today.getDate() &&
                  forecastDate - today < 5 * 24 * 60 * 60 * 1000
                );
              }
            );
            setForecastData(filteredForecast);
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
                        Weekly
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="container">
                    <div className="row gx-2 justify-content-between">
                      {forecastData.map((forecastItem) => (
                        <ForecastCard forecast={forecastItem} />
                      ))}
                    </div>
                    <p className="text-end font-xs color-text-paragraph-2">
                      <a
                        href="your_link_here"
                        className="color-text-paragraph-2"
                      >
                        See More
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-box">
            <div className="row">
              <div className="col-6">
                <div className="container">
                  <div className="panel-white">
                    <div className="panel-body" />
                  </div>
                </div>
              </div>
              <div className="col-6">
                
                  <WeatherObservationCard />
      
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegFloodForecast5Days;
