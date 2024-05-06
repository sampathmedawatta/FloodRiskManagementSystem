import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";

const ForecastCardHolder = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const allLocationsForecast = await ForecastService.getForecast();
        setForecastData(allLocationsForecast);
        console.log(allLocationsForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, []);

  const filterForecastForNextFiveDays = (forecast) => {
    const currentDate = new Date();
    const nextFiveDays = new Date(
      currentDate.getTime() + 5 * 24 * 60 * 60 * 1000
    ); // Calculate five days from today

    const filteredForecast = [];

    for (const item of forecast) {
      const forecastDate = new Date(item.date);
      if (forecastDate >= currentDate && forecastDate <= nextFiveDays) {
        const existingDateIndex = filteredForecast.findIndex(
          (filteredItem) =>
            new Date(filteredItem.date).toDateString() ===
            forecastDate.toDateString()
        );
        if (existingDateIndex === -1) {
          filteredForecast.push(item);
          if (filteredForecast.length === 5) break; // Stop when 5 items are added
        }
      }
    }

    return filteredForecast;
  };

  return (
    <div>
      <div className="row gx-2 justify-content-between mt-2">
        <div className="col-12">
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="row">
                    <div className="col-md-10">
                      <h6 className="text-start">
                        <i className="bi bi-tsunami fs-5" />
                        &nbsp;&nbsp;Flood Forecast for Next 5 Days
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="container">
                    <div className="row justify-content-between px-lg-75">
                      {forecastData.length > 0 ? (
                        forecastData.map((locationForecast, index) => (
                          <div className="row" key={index}>
                            <h5 className="mb-2">
                              {locationForecast.location}
                            </h5>
                            <div className="d-flex flex-wrap gap-3 justify-content-evenly">
                              {filterForecastForNextFiveDays(
                                locationForecast.forecast
                              ).map((forecastItem, forecastIndex) => (
                                <ForecastCard
                                  key={forecastIndex}
                                  forecast={forecastItem}
                                />
                              ))}
                            </div>
                            <hr className="mt-3" />
                          </div>
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
};

export default ForecastCardHolder;
