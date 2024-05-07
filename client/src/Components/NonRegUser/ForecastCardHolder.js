import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";

const ForecastComponent = ({ forecastData }) => {
  return (
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
                          <h5 className="mb-2">{locationForecast.location}</h5>
                          <div className="d-flex flex-wrap gap-3 justify-content-evenly">
                            {locationForecast.data.map(
                              (forecastItem, forecastIndex) =>
                                forecastItem.forecast.map((weather, index) => (
                                  <ForecastCard key={index} weather={weather} />
                                ))
                            )}
                          </div>
                          <hr className="mt-3" />
                        </div>
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
};

const ForecastCardHolder = () => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const allLocationsForecast = await ForecastService.getForecastByDate(5);
        setForecastData(allLocationsForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <div>
      {forecastData !== null && <ForecastComponent forecastData={forecastData} />}
    </div>
  );
};

export default ForecastCardHolder;
