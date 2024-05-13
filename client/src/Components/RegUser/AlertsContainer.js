import React from "react";
import { useAlerts } from "../../contexts/AlertContext";
import RegMainAlert from "./RegMainAlert";
import AlertCard from "./AlertCard";

const AlertsContainer = () => {
  const { alertList } = useAlerts();

  // Ensure alertList is an array before mapping over it
  if (!Array.isArray(alertList)) {
    return null; // Or render a loading indicator or message
  }

  return (
    <div className="section-box">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-12">
                <h6 className="text-left">
                  <i className="bi bi-water fs-5" />
                  &nbsp; Alerts
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body overflow-auto">
            {alertList.map((alert, index) => (
              <AlertCard
                message={alert.description}
                title={alert.title}
                alertType={alert.riskLevel}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsContainer;