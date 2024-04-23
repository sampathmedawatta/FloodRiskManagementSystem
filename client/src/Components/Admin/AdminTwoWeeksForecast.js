import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminTwoWeeksForecast() {
  const { today, twoWeeksDate } = getCurrentDateInfo();
  return (
    <div className="">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-tsunami fs-5" />
                    &nbsp;Two Weeks Flood Forecast
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2">
                    {today} to {twoWeeksDate}
                  </p>
                </div>
              </div>
            </div>
            <div className="panel-body">Two Weeks Flood Forecast</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminTwoWeeksForecast;
