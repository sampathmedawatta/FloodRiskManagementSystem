import React, { useState, useEffect } from "react";
import AdminTodayForecast from "./AdminFaqManage";
import AdminWeeklyForecast from "./AdminWeeklyForecast";
import AdminMap from "./AdminMap";
import AdminNextWeekForecast from "./AdminNextWeekForecast";
import AdminTwoWeeksForecast from "./AdminTwoWeeksForecast";
import AdminBar from "./AdminBar";
function AdminFaq() {
  return (
    <div className="box-content">
      <br />
      <div className="row">
        <AdminTodayForecast />
     
      </div>
    </div>
  );
}
export default AdminFaq;
