import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import LocationService from "../../services/location.service";
import WeatherHistoryService from "../../services/weatherhistory.service";

function AdminFloodHistory() {
  const [locations, setLocations] = useState(null);
  const [months, setMonths] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [historyData, setHistoryData] = useState(null); // State to hold history data
  const [loading, setLoading] = useState(false); // State to manage loading state

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const floodLocations = await LocationService.getFloodLocations("Flood");
        if (floodLocations) {
          setLocations(floodLocations);
        }
      } catch (error) {
        console.error("Error while fetching flood location data", error);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    // Generate months based on the selected year
    if (selectedYear === new Date().getFullYear().toString()) {
      const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      setMonths(monthNames.slice(0, currentMonth));
      setSelectedMonth(""); // Reset selected month when changing years
    } else {
      setMonths([
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ]);
    }
  }, [selectedYear]);

  const generateYears = (startYear, endYear) => {
    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years.reverse();
  };

  const years = generateYears(2019, new Date().getFullYear());

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity()) {
      const locationCode = selectedLocation;
      const year = selectedYear;
      const monthSelect = form.querySelector('select[name="month"]');
      const month = monthSelect ? monthSelect.value : "";

      try {
        setLoading(true);
        const data = await WeatherHistoryService.getWeatherHistory(locationCode, year, month);
        setHistoryData(data);
      } catch (error) {
        console.error("Error fetching weather history data:", error);
      } finally {
        setLoading(false);
      }
    } else {
      e.stopPropagation();
    }

    form.classList.add("was-validated");
  };

  return (
    <div className="box-content">
      <br />
      <div className="row">
        <div className="col-md-12">
          <div className="box-content">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="text-start">
                        <i className="bi bi-newspaper fs-5 " />
                        &nbsp;&nbsp;View Flood History Data
                      </h6>
                    </div>
                    <div className="col-md-5">
                      <p className="text-end font-xs color-text-paragraph-2"></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="panel-body">
                    <form
                      className="needs-validation"
                      noValidate
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="font-sm mb-10" required>
                              Select Location *
                            </label>
                            <select
                              required
                              className="form-control"
                              value={selectedLocation}
                              onChange={(e) =>
                                setSelectedLocation(e.target.value)
                              }
                            >
                              <option value="">Select Location</option>
                              {locations &&
                                locations.map((location, index) => (
                                  <option key={index} value={location.code}>
                                    {location.name}
                                  </option>
                                ))}
                            </select>
                            <div className="invalid-feedback">
                              Location is required
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="font-sm mb-10">
                              Select Year *
                            </label>
                            <select
                              className="form-control"
                              required
                              onChange={(e) => setSelectedYear(e.target.value)}
                            >
                              <option value="">Select Year</option>
                              {years.map((year, index) => (
                                <option key={index} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                            <div className="invalid-feedback">
                              Year is required
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label className="font-sm mb-10">
                              Select Month *
                            </label>
                            <select
                              className="form-control"
                              required
                              name="month"
                              value={selectedMonth}
                              onChange={(e) =>
                                setSelectedMonth(e.target.value)
                              }
                            >
                              <option value="">Select Month</option>
                              {months.map((month, index) => (
                                <option key={index} value={index + 1}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <div className="invalid-feedback">
                              Month is required
                            </div>
                          </div>
                        </div>
                        <div className="col-md-1 align-self-end">
                          <div className="form-group ">
                            <button
                              type="submit"
                              className="btn btn-login hover-up text-12 w-100"
                            >
                              <i className="bi bi-search fs-6"></i> &nbsp;
                              Search
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <hr></hr>
                    <div className="row">
                      <div className="table-responsive">
                        <table className="table no-wrap user-table mb-0">
                          <thead className="border-bottom thead-header">
                            <tr>
                              <th
                                scope="col"
                                className="pl-4"
                                style={{ width: "1%", textAlign: "left" }}
                              >
                                #
                              </th>
                              <th
                                scope="col"
                                className="pl-4"
                                style={{ textAlign: "left" }}
                              >
                                Location
                              </th>
                              <th
                                scope="col"
                                className="pl-4"
                                style={{ textAlign: "left" }}
                              >
                                Flood %
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Rainfall
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Rain Duration
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Temperature
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Humidity
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? (
                              <tr>
                                <td colSpan="7">Loading...</td>
                              </tr>
                            ) : historyData ? (
                              <tr className="tr-border">
                                <td className="text-left">1</td>
                                <td className="text-left">{historyData.location}</td>
                                <td className="text-left"></td>
                                <td className="text-left">{historyData.rainfall}</td>
                                <td className="text-left">{historyData.duration}</td>
                                <td className="text-left">{historyData.mean_temperature}</td>
                                <td className="text-left">{historyData.humidity}</td>
                              </tr>
                            ) : (
                              <tr>
                                <td colSpan="7">No data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <Pagination />{" "}
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

export default AdminFloodHistory;
