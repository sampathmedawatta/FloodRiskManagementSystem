import React, { useState, useEffect } from "react";
import ForecastPopup from "./ForecastPopup";

const response = {
  data: [
    {
      location: "Hong Kong Observatory",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Low",
        },
      ],
    },
    {
      location: "Shek Kong",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Moderate",
        },
      ],
    },
    {
      location: "Cheung Chau",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "Low",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
        },
      ],
    },
    {
      location: "Tseung Kawn",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "High",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "High",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "High",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "High",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "High",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "High",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "High",
        },
      ],
    },
    {
      location: "Tai Po",
      forecast: [
        {
          date: "2024-04-24",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-25",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-26",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-27",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-04-28",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-04-29",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-04-30",
          day: "Tuesday",
          riskLevel: "Low",
        },
        {
          date: "2024-05-01",
          day: "Wednesday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-02",
          day: "Thursday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-03",
          day: "Friday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-04",
          day: "Saturday",
          riskLevel: "High",
        },
        {
          date: "2024-05-05",
          day: "Sunday",
          riskLevel: "High",
        },
        {
          date: "2024-05-06",
          day: "Monday",
          riskLevel: "Moderate",
        },
        {
          date: "2024-05-07",
          day: "Tuesday",
          riskLevel: "Low",
        },
      ],
    },
  ],
};

const FloodForecastTable = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedForecast, setClickedForecast] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null); // State to hold the selected day
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // write a code to get data from API

        setForecastData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [location]);

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
