import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import Pagination from "./Pagination";

function AdminNewsManage() {
  const [floodWarningAlerts, setFloodWarningAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  let inex = 0;

  useEffect(() => {
    const fetchFloodWarnings = async () => {
      setLoading(true);
      try {
        const floodWarnings = await ForecastService.getForecastByDate(14);

        // Filter flood warnings based on risk level being "moderate" or "high"
        const filteredWarnings = floodWarnings.map((location) => ({
          location: location.location,
          data: location.data.map((item) => ({
            forecast: item.forecast.filter(
              (forecastItem) =>
                forecastItem.riskLevel === "low" ||
                forecastItem.riskLevel === "high"
            ),
          })),
        }));

        setFloodWarningAlerts(filteredWarnings);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching forecast data:", error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchFloodWarnings();
  }, []);

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

  const getRiskLevel = (riskLevel) => {
    if (riskLevel == "High") {
      return "risklevel-high";
    } else if (riskLevel == "Moderate") {
      return "risklevel-moderate";
    } else if (riskLevel == "Low") {
      return "risklevel-norisk";
    } else {
      return "risklevel-norisk";
    }
  };
  const toSentenceCase = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
                        <i className="bi bi-exclamation-triangle-fill fs-5" />
                        &nbsp;&nbsp;Manage Alerts
                      </h6>
                    </div>
                    <div className="col-md-5">
                      <p className="text-end font-xs color-text-paragraph-2"></p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="table-responsive">
                        <table className="table no-wrap user-table mb-0">
                          <thead className="border-bottom thead-header">
                            <tr>
                              <th
                                scope="col"
                                className="pl-4"
                                style={{ width: "2%", textAlign: "left" }}
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
                                Flood prediction %
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Risk Level
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Alert
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Status
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Manage
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {loading ? (
                              <tr>
                                <td colSpan="7">
                                  Loading...
                                  <img
                                    src="imgs/spinning-loading.gif"
                                    alt="Loading..."
                                  />
                                </td>
                              </tr>
                            ) : 
                 

                            floodWarningAlerts.length > 0 ? (
                              floodWarningAlerts.map((locationData, locationIndex) =>
                                locationData.data[0].forecast.map((forecastItem, forecastIndex) => {
                                  inex++; // Increment the index counter
                            
                                  return (
                                    <tr
                                      className="tr-border"
                                      key={`${locationIndex}-${forecastIndex}`}
                                    >
                                      <td className="text-left pl-4">
                                        <span className="text-muted font-sm">{inex}</span>
                                      </td>
                                      <td className="text-left">
                                        <span className="text-muted font-sm">
                                          {getlocation(locationData.location)}
                                        </span>
                                      </td>
                            
                                      <td className="text-left">
                                        <span className="text-muted font-sm">
                                          {forecastItem.flood.toFixed(2)}
                                        </span>
                                      </td>
                                      <td className="text-left">
                                        <span
                                          className={`text-muted font-sm ${getRiskLevel(
                                            forecastItem.riskLevel
                                          )}`}
                                        >
                                          {toSentenceCase(forecastItem.riskLevel)}
                                        </span>
                                      </td>
                                      <td className="text-left">
                                      <button class="btn btn-login hover-up text-12 w-100"><i class="bi bi-exclamation-triangle-fill"></i> &nbsp; Create Alert</button>
                                      </td>
                                      <td className="text-center">
                                        {/* Add manage functionality */}
                                      </td>
                                    </tr>
                                  );
                                })
                              )
                            ) : (
                              // If floodWarningAlerts is empty or null, display "No data available"
                              <tr>
                                <td colSpan="7">No data available</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <br />
                  {/* Display forecast data here */}
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNewsManage;
