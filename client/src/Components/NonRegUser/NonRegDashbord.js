import React, { useState, useEffect } from "react";

import Map from "../Shared/Map";

function NonRegDashbord(){
    return (
    <div className="box-content">
      <div className="row">
         <div className="col-md-12">
            allert message 
         </div>
      </div>
      <div className="row">
        <div className="col-md-6">
        
        </div>
        <div className="col-md-6">
          <Map></Map>
        </div>
      </div>
    </div>
    );
}
export default NonRegDashbord;