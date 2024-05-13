import React, { useState, useEffect } from "react";
import AlertService from "../../services/alert.service";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBarAlertCard() {
  const [alerts, setAlerts] = useState([]);
  const [alerts7, setAlerts7] = useState([]);

  useEffect(() => {
    fetchAllAlerts();
    fetch7Alerts();
  }, []);

  const fetchAllAlerts = async () => {
    try {
      const response = await AlertService.getAllAlerts();
      setAlerts(response.length);
    } catch (error) {
      console.error("Error fetching Alerts:", error);
    }
  };
  const fetch7Alerts = async () => {
    try {
      const response = await AlertService.getAlertsByDays(7);
      if (!response || !response.alerts || !Array.isArray(response.alerts)) {
        console.error("Alerts data is not available or is not an array.");
        return;
      }
      const alerts = response.alerts;
      setAlerts7(alerts.length);
    } catch (error) {
      console.error("Error fetching Alerts:", error);
    }
  };

  return (
    <div className="col-2">
      <a href="manage-alerts">
        <div className="card-style-1 hover-up hover-color ">
          <div className="card-info">
            <div className="card-title row">
              <div className="col">
                <h6 className="text-start">Flood Alerts</h6>
              </div>
              <div className="col-auto">
                <i className="bi bi-exclamation-triangle-fill fs-3 color-brand-1" />
              </div>
            </div>
            <div className="ptb-10">
              <p className="font-box-flood text-center color-brand-1">
                {alerts}
              </p>
            </div>
            <br />
            <p className="text-10 text-center strong color-brand-1">
              <strong>{alerts7}</strong> new alerts this week.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default AdminBarAlertCard;
