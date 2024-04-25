import React, { useState, useEffect } from "react";
import AdminTodayForecast from "./AdminTodayForecast";
import AdminWeeklyForecast from "./AdminWeeklyForecast";
import AdminMap from "./AdminMap";
import AdminNextWeekForecast from "./AdminNextWeekForecast";
import AdminTwoWeeksForecast from "./AdminTwoWeeksForecast";
import AdminBar from "./AdminBar";
function AdminDashbord() {
  return (
    <div className="box-content">
      <br />
      <div className="row">
        <div className="col-md-6">
          <AdminTodayForecast />
        </div>
        <div className="col-md-6">
          <AdminMap></AdminMap>
        </div>
      </div>
      {/*<divclassName="row">
        <AdminWeeklyForecast /> 
        <AdminNextWeekForecast />
      </div>*/}
      <div className="row">
        <AdminTwoWeeksForecast />
      </div>
      <div className="row">
        <AdminBar />
      </div>
    </div>
  );
}
export default AdminDashbord;
