import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import AlertService from "../../services/alert.service";
import Pagination from "./Pagination";
import AdminCreateAlert from "./AdminAlertCreate";

function AdminNewsManage() {
  const [floodWarningAlerts, setFloodWarningAlerts] = useState([]);
  const [loading, setLoading] = useState(false);
  let inex = 0;
  const [showCreateAlertModal, setShowCreateAlertModal] = useState(false); // State to control modal visibility
  const [alertData, setAlertData] = useState({});

  useEffect(() => {
    const fetchFloodWarnings = async () => {
      setLoading(true);
      try {
        const floodWarnings = await ForecastService.getForecastByDate(14);
        const alertsCreated = await AlertService.getAlertsByDays(7);
        console.log("alertsCreated "+alertsCreated);
        const groupedByDate = {};

        // Group the forecast items by date and filter by risk level
        floodWarnings.forEach((location) => {
          location.data.forEach((item) => {
            item.forecast.forEach((forecastItem) => {
              const date = forecastItem.date;
              if (!groupedByDate[date]) {
                groupedByDate[date] = [];
              }
              // Filter by risk level (Moderate or high)
              if (
                forecastItem.riskLevel === "Moderate" ||
                forecastItem.riskLevel === "High"
              ) {
                groupedByDate[date].push({
                  location: location.location,
                  forecastItem: forecastItem,
                });
              }
            });
          });
        });

        setFloodWarningAlerts(groupedByDate);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching forecast data:", error);
        setLoading(false);
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
  const toggleCreateAlertModal = (riskLevel, flood, date, location) => {
    setShowCreateAlertModal(!showCreateAlertModal);
    console.log("setAlertData", riskLevel, flood, date, location);
    setAlertData({ riskLevel, flood, date, location });
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
                    <p>
                      Forecasted flood risk prediction for the next two weeks.{" "}
                    </p>
                    <br></br>
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
                              <th scope="col" style={{ textAlign: "left" }}>
                                Date
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
                                Flood Prediction %
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Risk Level
                              </th>
                              <th
                                scope="col"
                                style={{ width: "10%", textAlign: "left" }}
                              >
                                Alert
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Title
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Description
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Title Zh
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Description Zh
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Published Date
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Status
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Status
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                Manage
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                View
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
                            ) : (
                              Object.keys(floodWarningAlerts).map(
                                (date, index) =>
                                  floodWarningAlerts[date].map(
                                    ({ location, forecastItem }) => {
                                      inex++;
                                      return (
                                        <tr
                                          className="tr-border"
                                          key={`${date}-${location}-${forecastItem.date}`}
                                        >
                                          <td className="text-left pl-4">
                                            <span className="text-muted font-sm">
                                              {inex}
                                            </span>
                                          </td>
                                          <td className="text-left">
                                            <span className="text-muted font-sm">
                                              {forecastItem.date}
                                            </span>
                                          </td>
                                          <td className="text-left">
                                            <span className="text-muted font-sm">
                                              {getlocation(location)}
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
                                              {toSentenceCase(
                                                forecastItem.riskLevel
                                              )}
                                            </span>
                                          </td>
                                          <td className="text-left">
                                          <button
  className="btn btn-alert text-12"
  onClick={() =>
    toggleCreateAlertModal(
      forecastItem.riskLevel,
      forecastItem.flood,
      forecastItem.date,
      location
    )
  }
>
  <i className="bi bi-exclamation-triangle-fill"></i> &nbsp; Create Alert
</button>
                                          </td>
                                          <td className="text-center"></td>
                                        </tr>
                                      );
                                    }
                                  )
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <br />
                  <AdminCreateAlert
                    showModal={showCreateAlertModal}
                    toggleModal={toggleCreateAlertModal} 
                    alertData={alertData}
                  />
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
