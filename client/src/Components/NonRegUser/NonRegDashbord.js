import React, { useState, useEffect } from "react";

import Map from "../Shared/Map";
import ForecastCardHolder from "./ForecastCardHolder";
import EmergencyContactCard from "./EmergencyContactCard";

function NonRegDashbord(){
    return (
    <div className="box-content">
      <div className="row">
         <div className="col-md-12">
            <ForecastCardHolder/>
         </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        <EmergencyContactCard/>
        </div>
        <div className="col-md-6">
          <Map></Map>
        </div>
      </div>
    </div>
    );
}
export default NonRegDashbord;