import React from "react";
import { useAlerts } from "../../contexts/AlertContext";
import AlertCard from "./AlertCard";

const AdminAlertsContainer = () => {
  const { alertList } = useAlerts();
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
            {alertList?.map((alert, index) => (
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

export default AdminAlertsContainer;
