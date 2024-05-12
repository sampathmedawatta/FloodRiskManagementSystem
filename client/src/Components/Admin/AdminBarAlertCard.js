import React, { useState, useEffect } from "react";
import ForecastService from "../../services/forecast.service";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBarAlertCard() {
  const [alerts, setAlerts] = useState([]);
  const [alerts7, setAlerts7] = useState([]);

  useEffect(() => {
    fetchData14();
    fetchData7();
  }, []);

  const fetchData14 = async () => {
    try {
      const response = await ForecastService.getForecastByDate(14);
      console.log("Response from fetchData14:", response); // Log the response
      if (response.success) {
        const filteredAlerts = response.data.flatMap(entry => {
          console.log("Forecast data for location:", entry.location, entry.forecast); // Log the forecast data
          return entry.forecast.filter(alert =>
            alert.riskLevel.toLowerCase() === "moderate" || alert.riskLevel.toLowerCase() === "high"
          );
        });
        console.log("Filtered Alerts for 14 days:", filteredAlerts); // Log the filtered alerts
        setAlerts(filteredAlerts);
      } else {
        console.warn("No alerts found in the response.");
      }
    } catch (error) {
      console.error("Error fetching Alerts:", error);
    }
  };
  const fetchData7 = async () => {
  try {
    const response = await ForecastService.getForecastByDate(7);
    console.log("Response from fetchData7:", response); // Log the response
    if (response.success) {
      const filteredAlerts7 = response.data.flatMap(entry => {
        console.log("Forecast data for location:", entry.location, entry.forecast); // Log the forecast data
        return entry.forecast.filter(alert =>
          alert.riskLevel.toLowerCase() === "moderate" || alert.riskLevel.toLowerCase() === "high"
        );
      });
      console.log("Filtered Alerts for 7 days:", filteredAlerts7); // Log the filtered alerts
      setAlerts7(filteredAlerts7);
    } else {
      console.warn("No alerts found in the response.");
    }
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
                {alerts.length}
              </p>
            </div>
            <br />
            <p className="text-10 text-center strong color-brand-1">
              <strong>{alerts7.length} </strong> new alerts this week.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default AdminBarAlertCard;
