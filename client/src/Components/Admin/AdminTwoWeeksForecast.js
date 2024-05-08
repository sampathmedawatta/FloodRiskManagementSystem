import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import FloodForecastTable from "./FloodForecastTable";
import ForecastService from "../../services/forecast.service";

const ForecastComponent = ({ forecastData }) => {
  return (
    <div className="panel-body">
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead className="border-bottom text-center">
            <tr>
              <th>
                <i class="bi bi bi-geo-alt-fill" />
              </th>
              {forecastData.length > 0 ? (
                forecastData.map((locationForecast, index) => (
                  <th key={index}>
                    {locationForecast.data.map((forecastItem, forecastIndex) =>
                      forecastItem.forecast.map((weather, index) => (
                        <div>
                          <p className="color-brand-1 text-12">
                            {weather.dayofweek}
                          </p>
                          <p className="color-brand-1 text-8">{weather.date}</p>
                        </div>
                      ))
                    )}
                  </th>
                ))
              ) : (
                <p>Loading.........</p>
              )}
            </tr>
          </thead>
          <tbody>
            {forecastData.length > 0 ? (
              forecastData.map((locationForecast, index) => (
                <div className="row" key={index}>
                  <h5 className="mb-2">{locationForecast.location}</h5>
                  <div className="d-flex flex-wrap gap-3 justify-content-evenly">
                    something
                  </div>
                  <hr className="mt-3" />
                </div>
              ))
            ) : (
              <p>Loading.........</p>
            )}
          </tbody>
        </table>
        {/* {showPopup && (
          <ForecastPopup
            location={selectedLocation}
            forecast={clickedForecast}
            selectedDay={selectedDay}
            onClose={() => setShowPopup(false)}
          />
        )} */}
      </div>
    </div>
  );
};

function AdminTwoWeeksForecast() {
  const { today, twoWeeksDate } = getCurrentDateInfo();

  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const allLocationsForecast = await ForecastService.getForecastByDate(1);
        setForecastData(allLocationsForecast);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <div className="">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-tsunami fs-5" />
                    &nbsp;Two Weeks Flood Forecast
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2">
                    {today} to {twoWeeksDate}
                  </p>
                </div>
              </div>
            </div>
            <div>
              {forecastData !== null && (
                <ForecastComponent
                  forecastData={forecastData}
                ></ForecastComponent>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminTwoWeeksForecast;
