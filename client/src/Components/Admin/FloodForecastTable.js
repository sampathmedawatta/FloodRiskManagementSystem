import React, { useState, useEffect } from "react";
import ForecastPopup from "./ForecastPopup";

const FloodForecastTable = ({ location }) => {
  const [forecastData, setForecastData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [clickedForecast, setClickedForecast] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null); // State to hold the selected day
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const response = {
          data: [
            {
              location: "Location 1",
              forecast: {
                day1: "Low",
                day2: "Low",
                day3: "Medium",
                day4: "High",
                day5: "High",
                day6: "Medium",
                day7: "Low",
                day8: "Low",
                day9: "Low",
                day10: "Medium",
                day11: "High",
                day12: "High",
                day13: "Medium",
                day14: "Low",
              },
            },
            {
              location: "Location 2",
              forecast: {
                day1: "Medium",
                day2: "Medium",
                day3: "High",
                day4: "High",
                day5: "High",
                day6: "High",
                day7: "Medium",
                day8: "Medium",
                day9: "Medium",
                day10: "High",
                day11: "High",
                day12: "High",
                day13: "High",
                day14: "Medium",
              },
            },
            {
              location: "Location 3",
              forecast: {
                day1: "Low",
                day2: "Low",
                day3: "Low",
                day4: "Low",
                day5: "Medium",
                day6: "Medium",
                day7: "High",
                day8: "Low",
                day9: "Low",
                day10: "Low",
                day11: "Low",
                day12: "Medium",
                day13: "Medium",
                day14: "High",
              },
            },
            {
              location: "Location 4",
              forecast: {
                day1: "High",
                day2: "High",
                day3: "High",
                day4: "High",
                day5: "High",
                day6: "High",
                day7: "High",
                day8: "High",
                day9: "High",
                day10: "High",
                day11: "High",
                day12: "High",
                day13: "High",
                day14: "High",
              },
            },
            {
              location: "Location 5",
              forecast: {
                day1: "Medium",
                day2: "Medium",
                day3: "Medium",
                day4: "High",
                day5: "High",
                day6: "Medium",
                day7: "Low",
                day8: "Medium",
                day9: "Medium",
                day10: "Medium",
                day11: "High",
                day12: "High",
                day13: "Medium",
                day14: "Low",
              },
            },
          ],
        };
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
              <th>Day 1</th>
              <th>Day 2</th>
              <th>Day 3</th>
              <th>Day 4</th>
              <th>Day 5</th>
              <th>Day 6</th>
              <th>Day 7</th>
              <th>Day 8</th>
              <th>Day 9</th>
              <th>Day 10</th>
              <th>Day 11</th>
              <th>Day 12</th>
              <th>Day 13</th>
              <th>Day 14</th>
            </tr>
          </thead>
          <tbody>
            {forecastData.map((locationData, index) => (
              <tr key={index}>
                <td>{locationData.location}</td>
                <td
                  className={locationData.forecast.day1.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "1"
                    )
                  }
                >
                  {locationData.forecast.day1}
                </td>
                <td
                  className={locationData.forecast.day2.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "2"
                    )
                  }
                >
                  {locationData.forecast.day2}
                </td>
                <td
                  className={locationData.forecast.day3.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "3"
                    )
                  }
                >
                  {locationData.forecast.day3}
                </td>
                <td
                  className={locationData.forecast.day4.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "4"
                    )
                  }
                >
                  {locationData.forecast.day4}
                </td>
                <td
                  className={locationData.forecast.day5.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "5"
                    )
                  }
                >
                  {locationData.forecast.day5}
                </td>
                <td
                  className={locationData.forecast.day6.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "6"
                    )
                  }
                >
                  {locationData.forecast.day6}
                </td>
                <td
                  className={locationData.forecast.day7.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "7"
                    )
                  }
                >
                  {locationData.forecast.day7}
                </td>

                <td
                  className={locationData.forecast.day8.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "8"
                    )
                  }
                >
                  {locationData.forecast.day1}
                </td>
                <td
                  className={locationData.forecast.day9.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "9"
                    )
                  }
                >
                  {locationData.forecast.day2}
                </td>
                <td
                  className={locationData.forecast.day10.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "10"
                    )
                  }
                >
                  {locationData.forecast.day3}
                </td>
                <td
                  className={locationData.forecast.day11.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "11"
                    )
                  }
                >
                  {locationData.forecast.day4}
                </td>
                <td
                  className={locationData.forecast.day12.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "12"
                    )
                  }
                >
                  {locationData.forecast.day5}
                </td>
                <td
                  className={locationData.forecast.day13.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "13"
                    )
                  }
                >
                  {locationData.forecast.day6}
                </td>
                <td
                  className={locationData.forecast.day14.toLowerCase()}
                  onClick={() =>
                    togglePopup(
                      locationData.location,
                      locationData.forecast,
                      "14"
                    )
                  }
                >
                  {locationData.forecast.day7}
                </td>
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
