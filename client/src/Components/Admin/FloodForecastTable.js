import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import ForecastPopup from "./ForecastPopup";

const FloodForecastTable = () => {
  const [forecastData, setForecastData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedForecast, setClickedForecast] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null); // State to hold the selected day
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
     function fetchData() {
       const responseData = ForecastService.getForecast();
      if (responseData !== null) {
        setForecastData(responseData);
      }
    }
    fetchData();
  }, []);

  const togglePopup = (location, forecast, day) => {
    setSelectedLocation(location);
    setClickedForecast(forecast);
    setSelectedDay(day);
    setShowPopup(!showPopup);
  };

  return (
    <div className="panel-body">
      <div className="table-responsive">
        <table className="table no-wrap user-table mb-0">
          <thead className="border-bottom">
            <tr>
              <th></th>
              {forecastData.length > 0 &&
                forecastData[0].forecast.map((day, index) => (
                  <th key={index}>
                    {" "}
                    <p>{day.day}</p>
                    <p>{day.date}</p>
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {forecastData.map((locationData, index) => (
              <tr key={index}>
                <td>{locationData.location}</td>
                {locationData.forecast.map((dayForecast, dayIndex) => (
                  <td
                    key={dayIndex}
                    className={dayForecast.riskLevel.toLowerCase()}
                    onClick={() =>
                      togglePopup(
                        locationData.location,
                        dayForecast,
                        `Day ${dayIndex + 1}`
                      )
                    }
                  >
                    {dayForecast.riskLevel}
                  </td>
                ))}
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

export default FloodForecastTable;
