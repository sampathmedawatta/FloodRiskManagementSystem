import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import ForecastService from "../../services/forecast.service";
import ForecastPopup from "./ForecastPopup";

const ForecastComponent = ({ forecastData }) => {

  const [showPopup, setShowPopup] = useState(false);
  const [clickedForecast, setClickedForecast] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null); // State to hold the selected day
  const [selectedLocation, setSelectedLocation] = useState(null);

  const togglePopup = (location, forecast, day) => {
    setSelectedLocation(location);
    setClickedForecast(forecast);
    setSelectedDay(day);
    setShowPopup(!showPopup);
  };
  // Group forecasts by location
  const groupedForecasts = forecastData.reduce((acc, forecast) => {
    if (!acc[forecast.location]) {
      acc[forecast.location] = [];
    }
    acc[forecast.location] = [
      ...acc[forecast.location],
      ...forecast.data[0].forecast,
    ];
    return acc;
  }, {});

  // Get unique dates for the header
  const dates = Object.values(groupedForecasts).reduce(
    (acc, locationForecasts) => {
      locationForecasts.forEach((entry) => {
        if (!acc.includes(entry.date)) {
          acc.push(entry.date);
        }
      });
      return acc;
    },
    []
  );

   const getlocation = (code) => {
     if (code == "CLK") {
       return "Chek Lap Kok";
     } else if (code == "CC") {
       return "Cheung Chau";
     } else if (code == "SK") {
       return "Shek Kong";
     } else if (code == "ST") {
       return "Sha Tin";
     } else if (code == "YMT") {
       return "Yau Ma Tei";
     }
   };

  return (
    <div className="panel-body">
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead className="border-bottom text-center">
            <tr>
              <th>
                <i class="bi bi bi-geo-alt-fill" />
              </th>
              {dates.map((date) => (
                <th key={date}>
                  {new Date(date).toLocaleDateString(undefined, {
                    weekday: "short",
                  })}
                  <br />
                  {date}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(groupedForecasts).map((location) => (
              <tr key={location}>
                <td className="text-muted text-12 td-nowrap">
                  {getlocation(location)}
                </td>
                {dates.map((date) => {
                  const forecast = groupedForecasts[location].find(
                    (entry) => entry.date === date
                  );
                  return (
                    <td
                      key={`${date}-${location}`}
                      className={`${forecast.riskLevel.toLowerCase()} ${
                        forecast.riskLevel === "Low"
                          ? ""
                          : "pointer-cursor hover-up"
                      }`}
                      onClick={() => {
                        if (forecast.riskLevel !== "Low") {
                          togglePopup(
                            getlocation(location),
                            forecast,
                            `Day ${1}`
                          );
                        }
                      }}
                    >
                      {forecast ? (
                        <div>{forecast.riskLevel}</div>
                      ) : (
                        <div>No data</div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        {showPopup && (
          <ForecastPopup
            location={selectedLocation}
            forecast={clickedForecast}
            selectedDay={selectedDay}
            onClose={() => setShowPopup(false)}
          />
        )}
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
        const allLocationsForecast = await ForecastService.getForecastByDate(14);
        
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
