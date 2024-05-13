import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertService from "../../services/alert.service";
import AlertsView from "./AlertsView";
import { useLocation } from "../../contexts/LocationContext";

const AlertsComponent = ({ forecastPeriod }) => {
  const [alertsbyDaysLoc, setAlertsbyDaysLoc] = useState(null);
  const [userLang, setUserLang] = useState(null);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const { location } = useLocation();

  const getlocation = (name) => {
    if (name === "Chek Lap Kok") {
      return "CLK";
    } else if (name === "Cheung Chau") {
      return "CC";
    } else if (name === "Shek Kong") {
      return "SK";
    } else if (name === "Sha Tin") {
      return "ST";
    } else if (name === "Yau Ma Tei") {
      return "YMT";
    }
  };

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await AlertService.getAlertsByDays(forecastPeriod);
        if (response.success && Array.isArray(response.alerts)) {
          const filteredAlerts = response.alerts.filter(
            (alert) =>
              alert.location === getlocation(location) && alert.active === true
          );
          setAlertsbyDaysLoc(filteredAlerts);
        } else {
          console.error("Unexpected response format:", response);
        }
      } catch (error) {
        console.error("Error fetching alerts:", error);
      }
    };

    fetchAlerts();

    const userData = sessionStorage.getItem("user");
    const user = JSON.parse(userData);
    if (user) {
      setUserLang(user.lang);
    }
  }, [forecastPeriod, location]);

  const getAlertClassName = (type) => {
    switch (type) {
      case "High":
        return "alert alert-danger p-2";
      case "Moderate":
        return "alert alert-warning";
      default:
        return "alert";
    }
  };

  const handleSeeMoreClick = (alert) => {
    setSelectedAlert(alert);
  };

  return (
    <div className="section-box">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-12">
                <h6 className="text-left">
                  <i className="bi bi-water fs-5" />
                  &nbsp; &nbsp;&nbsp;
                  {`${location} Weather Alerts for the next ${forecastPeriod} Days`}
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body overflow-auto">
            {alertsbyDaysLoc ? (
              alertsbyDaysLoc.map((alert, index) => (
                <div key={index} className="row">
                  <div className="col-lg-12">
                    <div
                      className={` ${getAlertClassName(alert.riskLevel)}`}
                      role="alert"
                    >
                      {userLang === "Chinese" ? (
                        <div className="d-flex flex-row gap-2">
                          <i className="bi bi-exclamation-octagon-fill" />
                          <p className="news-item-title-text">{alert.title_zh}</p>
                        </div>
                      ) : (
                        <div className="d-flex flex-row gap-2">
                          <i className="bi bi-exclamation-octagon-fill" />
                          <p className="news-item-title-text">{alert.title}</p>
                        </div>
                      )}
                      <div className="row text-end">
                        <p
                          className="text-end font-xs color-text-paragraph-2"
                          onClick={() => handleSeeMoreClick(alert,userLang)}
                        >
                          See more
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      {selectedAlert && (
        <AlertsView
          show={true}
          handleClose={() => setSelectedAlert(null)}
          alertData={selectedAlert}
          userLang={userLang}
        />
      )}
    </div>
  );
};

export default AlertsComponent;
