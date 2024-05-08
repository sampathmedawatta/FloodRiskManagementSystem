import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";
import { useLocation } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";

function RegFloodForecast5Days() {
  const [forecastData, setForecastData] = useState(null);
  const { location } = useLocation();

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const locationForecast = await ForecastService.getForecastByLocation(
          location,
          5
        );
        setForecastData(locationForecast.forecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, [location]);

  return (
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
                      &nbsp;&nbsp;Flood Forecast for - {location} Next 5 Days
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
                    {forecastData ? (
                      forecastData.map((weather, index) => (
                        <ForecastCard key={index} weather={weather} />
                      ))
                    ) : (
                      <p>Loading.........</p>
                    )}
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
