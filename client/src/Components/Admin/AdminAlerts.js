import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import AlertService from "../../services/alert.service";
import Pagination from "./Pagination";
import AdminCreateAlert from "./AdminAlertCreate";
import AdminAlertsView from "./AdminAlertsView";

function AdminNewsManage() {
  const [floodWarningAlerts, setFloodWarningAlerts] = useState([]);
  const [alertsCreated, setAlertsCreated] = useState([]);
  const [loading, setLoading] = useState(false);
  let inex = 0;
  const [showCreateAlertModal, setShowCreateAlertModal] = useState(false);
  const [alertData, setAlertData] = useState({});
  const [showViewAlertModal, setShowViewAlertModal] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const floodWarnings = await ForecastService.getForecastByDate(14);
      const alerts = await AlertService.getAlertsByDays(14);

      setAlertsCreated(alerts.alerts);
      const groupedByDate = {};

      floodWarnings.forEach((location) => {
        location.data.forEach((item) => {
          item.forecast.forEach((forecastItem) => {
            const date = forecastItem.date;
            if (!groupedByDate[date]) {
              groupedByDate[date] = [];
            }
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
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const manageAlert = async (id, action) => {
    try {
      if (action === "publish") {
        await AlertService.updateAlertById(id, { active: true });
      } else if (action === "unpublish") {
        await AlertService.updateAlertById(id, { active: false });
      }
      fetchData();
    } catch (error) {
      console.error("Error updating News:", error);
    }
  };

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
    }
  };

  const getRiskLevel = (riskLevel) => {
    if (riskLevel === "High") {
      return "risklevel-high";
    } else if (riskLevel === "Moderate") {
      return "risklevel-moderate";
    } else if (riskLevel === "Low") {
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
    setAlertData({ riskLevel, flood, date, location });
  };

  const toggleViewAlertModal = (
    date,
    location,
    riskLevel,
    title,
    title_zh,
    description,
    description_zh
  ) => {
    setShowViewAlertModal(true);
    setAlertData({
      date,
      location,
      riskLevel,
      title,
      title_zh,
      description,
      description_zh,
    });
  };

  return (
    <div className="box-content">
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
                    <br />
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
                                style={{ width: "8%", textAlign: "left" }}
                              >
                                Date
                              </th>
                              <th
                                scope="col"
                                className="pl-4"
                                style={{ width: "8%", textAlign: "left" }}
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
                              <th
                                scope="col"
                                style={{ width: "8%", textAlign: "left" }}
                              >
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
                                Title Cantonese
                              </th>
                              <th scope="col" style={{ textAlign: "left" }}>
                                View
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
                                <td colSpan="14">
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

                                      if (Array.isArray(alertsCreated)) {
                                        const matchingAlert =
                                          alertsCreated.find((alert) => {
                                            const forecastDate = new Date(
                                              forecastItem.date
                                            );

                                            if (isNaN(forecastDate.getTime())) {
                                              console.error(
                                                "Invalid date:",
                                                forecastItem.date
                                              );
                                              return false;
                                            }

                                            const forecastISODate = forecastDate
                                              .toISOString()
                                              .slice(0, 10);
                                            return (
                                              alert.alertDate.startsWith(
                                                forecastISODate
                                              ) && alert.location === location
                                            );
                                          });
                                        const isDisabled =
                                          matchingAlert !== undefined;
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
                                                  !isDisabled &&
                                                  toggleCreateAlertModal(
                                                    forecastItem.riskLevel,
                                                    forecastItem.flood,
                                                    forecastItem.date,
                                                    location
                                                  )
                                                }
                                                disabled={isDisabled}
                                              >
                                                <i className="bi bi-exclamation-triangle-fill"></i>{" "}
                                                &nbsp; Create Alert
                                              </button>
                                            </td>
                                            <td className="text-left">
                                              {matchingAlert
                                                ? matchingAlert.title
                                                : ""}
                                            </td>
                                            <td className="text-left">
                                              {matchingAlert
                                                ? matchingAlert.title_zh
                                                : ""}
                                            </td>

                                            <td className="text-left">
                                              {isDisabled ? (
                                                <button
                                                  type="button"
                                                  className="btn btn-pops"
                                                  onClick={() =>
                                                    toggleViewAlertModal(
                                                      forecastItem.date,
                                                      getlocation(location),
                                                      forecastItem.riskLevel,
                                                      matchingAlert.title,
                                                      matchingAlert.title_zh,
                                                      matchingAlert.description,
                                                      matchingAlert.description_zh
                                                    )
                                                  }
                                                >
                                                  <i className="bi bi-newspaper fs-6"></i>
                                                </button>
                                              ) : null}
                                            </td>
                                            <td className="text-left">
                                              {isDisabled ? (
                                                <span
                                                  className={`label-status ${
                                                    matchingAlert &&
                                                    matchingAlert.active
                                                      ? "label-active"
                                                      : "label-inactive"
                                                  }`}
                                                >
                                                  {matchingAlert &&
                                                  matchingAlert.active
                                                    ? "Active"
                                                    : "Inactive"}
                                                </span>
                                              ) : null}
                                            </td>
                                            <td className="text-left">
                                              {isDisabled ? (
                                                <>
                                                  {matchingAlert &&
                                                  matchingAlert.active ? (
                                                    <button
                                                      type="button"
                                                      className="btn btn-pops"
                                                      onClick={() =>
                                                        manageAlert(
                                                          matchingAlert._id,
                                                          "unpublish"
                                                        )
                                                      }
                                                    >
                                                      <i className="bi bi-trash fs-6"></i>
                                                    </button>
                                                  ) : (
                                                    <button
                                                      type="button"
                                                      className="btn btn-pops "
                                                      onClick={() =>
                                                        manageAlert(
                                                          matchingAlert._id,
                                                          "publish"
                                                        )
                                                      }
                                                    >
                                                      <i className="bi bi-check-circle-fill fs-6"></i>
                                                    </button>
                                                  )}
                                                </>
                                              ) : null}
                                            </td>
                                          </tr>
                                        );
                                      } else {
                                        return null;
                                      }
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
                    fetchData={fetchData}
                  />
                  <AdminAlertsView
                    show={showViewAlertModal}
                    handleClose={() => setShowViewAlertModal(false)}
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
