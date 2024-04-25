import React, { useState, useEffect } from "react";

import RegMainAlert from "./RegMainAlert";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import { mainAlertList } from "../../utils/MainAlerts";

function RegDashbord() {
  return (
    <div className="box-content">
      {mainAlertList.length > 0 &&
        mainAlertList.map((alert) => (
          <RegMainAlert
            key={alert.id}
            message={alert.message}
            alertType={alert.type}
          />
        ))}
      <RegFloodForecast5Days />
    </div>
  );
}
export default RegDashbord;
