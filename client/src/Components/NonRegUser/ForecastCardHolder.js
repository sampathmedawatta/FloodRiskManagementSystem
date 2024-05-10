import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastCard from "./ForecastCard";
import { Link } from "react-router-dom";

const ForecastComponent = ({ forecastData }) => {
  const getlocation = (code) => {
    if (code === "CLK") {
      return "Chek Lap Kok";
    } else if (code === "CC") {
      return "Cheung Chau";
    } else if (code === "SK") {
      return "Shek Kong";
    } else if (code === "ST") {
      return "Sha Tin";
    } else if (code === "YMT") {
      return "Yau Ma Tei";
    } else {
      return "Unknown Location";
    }
  };

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
                      &nbsp;&nbsp;Flood Forecast for Next 3 Days
                    </h6>
                  </div>
                  <div className="col-md-2">
                    {/*TODO: link this to news feed page */}
                    <Link to="/registration">
                      <p className="text-end font-xs color-text-paragraph-2">
                        See more
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="container">
                  <div className="row justify-content-between px-lg-75">
                    {forecastData.length > 0 ? (
                      forecastData.map((locationForecast, index) => (
                        <div className="row " key={index}>
                          <h6 className="mb-2">
                            {getlocation(locationForecast.location)}
                          </h6>
                          <div className="d-flex flex-wrap gap-3 justify-content-evenly panel-head">
                            {locationForecast.data.map(
                              (forecastItem, forecastIndex) =>
                                forecastItem.forecast.map((weather, index) => (
                                  <ForecastCard key={index} weather={weather} />
                                ))
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p>
                        <img src="imgs/spinning-loading.gif" alt="Loading..." />
                      </p>
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
        const allLocationsForecast = await ForecastService.getForecastByDate(3);
        setForecastData(allLocationsForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <div>
      {forecastData !== null && (
        <ForecastComponent forecastData={forecastData} />
      )}
    </div>
  );
};

export default ForecastCardHolder;
