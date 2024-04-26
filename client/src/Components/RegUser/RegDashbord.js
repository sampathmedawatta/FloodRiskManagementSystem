import React, { useState, useEffect } from "react";

import RegMainAlert from "./RegMainAlert";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import Map from "../Shared/Map";
import { mainAlertList } from "../../utils/MainAlerts";

function RegDashbord() {
  return (
    <div className="box-content">
      <div className="row">
        {mainAlertList.length > 0 &&
          mainAlertList.map((alert) => (
            <RegMainAlert
              key={alert.id}
              message={alert.message}
              alertType={alert.type}
            />
          ))}
      </div>
      <div className="row">
        <div className="col-md-6">
          <RegFloodForecast5Days />
        </div>
        <div className="col-md-6">
          <Map></Map>
        </div>
      </div>
    </div>
  );
}
export default RegDashbord;
