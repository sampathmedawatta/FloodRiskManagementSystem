import React, { useState, useEffect } from "react";

import RegMainAlert from './RegMainAlert'
import RegFloodForecast5Days from './RegFloodForecast5Days'

function RegDashbord(){
    return(
  
      <div className="box-content">
      <RegMainAlert/>
      <RegFloodForecast5Days/>
      </div>
        
    );
}
export default RegDashbord;