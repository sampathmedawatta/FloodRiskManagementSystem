import React, { useState, useEffect } from "react";

import AdminTodayForecast from "./AdminTodayForecast"; 

function AdminDashbord(){
    return(
  <div className="box-content">
  <br />
  <div className="row"> 
  <AdminTodayForecast/>
    <div className="col-xxl-4 col-xl-5 col-lg-5">
      <div className="section-box">
        <div className="container"> 
          <div className="panel alert-danger">
            <div className="panel-head"> 
              <h5>Watch and Act</h5>
            </div>
            <div className="panel-body">
              <div className="card-style-3 hover-up">
                <div className="card-image online"><img src="assets/imgs/page/dashboard/avata2.png" alt="jobBox" /></div>
                <div className="card-title"> 
                  <h6>Cody Fisher</h6><span className="job-position">Network Engineer</span>
                </div>
                <div className="card-location"> <span className="location">New York, US</span></div>
                <div className="card-rating"><img src="assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <img src="assets/imgs/page/dashboard/star.svg" alt="jobBox" /> <span className="font-xs color-text-mutted">
                    (65)</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        
    );
}
export default AdminDashbord;