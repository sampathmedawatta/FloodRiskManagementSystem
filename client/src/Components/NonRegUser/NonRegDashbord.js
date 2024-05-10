import React, { useState, useEffect } from "react";

import Map from "../Shared/Map";
import ForecastCardHolder from "./ForecastCardHolder";
import EmergencyContactCard from "./EmergencyContactCard";

function NonRegDashbord() {
  return (
    <div className="box-content">
    <div className="row">
    <div className="col-md-6">
          <ForecastCardHolder />
        </div>


    <div className="col-md-6">
      <div>
      
      <EmergencyContactCard />
  
      </div>
      <div>
        <br></br>
      <Map></Map>
      </div>
         
      </div>


    </div>
    </div>
  );
}
export default NonRegDashbord;
