import React, { useState, useEffect } from "react";


function RegMainAlert(){
    return(
<div>
  <br /><br />
  <div className="row">
    <div className="col-lg-12">
      <div className="alert alert-danger" role="alert">
        <i className="bi bi-exclamation-octagon-fill" /> &nbsp;&nbsp; Heavy rainfall expected in the next 12 hours. Potential flooding in low-lying areas. Take necessary precautions and stay tuned for updates. &nbsp;&nbsp; <a href="#" className="alert-link"> See More</a>
      </div>
      <div className="alert alert-warning" role="alert">
        <i className="bi bi-exclamation-octagon-fill" /> &nbsp;&nbsp; Heavy rainfall expected in the next 12 hours. Potential flooding in low-lying areas. Take necessary precautions and stay tuned for updates. &nbsp;&nbsp; <a href="#" className="alert-link"> See More</a>
      </div>
      <div className="alert alert-success" role="alert">
        <i className="bi bi-exclamation-octagon-fill" /> &nbsp;&nbsp; Heavy rainfall expected in the next 12 hours. Potential flooding in low-lying areas. Take necessary precautions and stay tuned for updates. &nbsp;&nbsp; <a href="#" className="alert-link"> See More</a>
      </div></div>
  </div>
</div>

        
    );
}
export default RegMainAlert;