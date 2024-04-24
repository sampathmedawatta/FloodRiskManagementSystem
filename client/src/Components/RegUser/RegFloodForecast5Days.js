import React, { useState, useEffect } from "react";
import { response } from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";

function RegFloodForecast5Days() {
  const [forecastData, setForecastData] = useState([]);
  const myLocation = "Hong Kong Observatory";
  const today = new Date();

  useEffect(() => {
    const getForecastData = () => {
      if (response) {
        const filteredLocation = response.data.find(
          (location) => location.location === myLocation
        );

        if (filteredLocation) {
          const filteredForecast = filteredLocation.forecast.filter((item) => {
            const forecastDate = new Date(item.date);
            // Check if forecast date is after today and within 5 days
            return (
              forecastDate.getDate() > today.getDate() &&
              forecastDate - today < 5 * 24 * 60 * 60 * 1000
            );
          });

          return filteredForecast;
        }
      }
      return [];
    };
    console.log(getForecastData());
    setForecastData(getForecastData());
  }, [myLocation]);

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
                        &nbsp;&nbsp;Flood Forecast for {myLocation} - Next 5
                        Days
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
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <h5>Latest Jobs</h5>
                  <a
                    className="menudrop"
                    id="dropdownMenu3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  />
                </div>
                <div className="panel-body" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegFloodForecast5Days;
