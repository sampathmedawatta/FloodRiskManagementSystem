import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBar(){
  const { today, twoWeeksDate} =
  getCurrentDateInfo();
    return(
      <div className="">

      <div className="section-box">
        <div className="container"> 
          <div className="panel-white">
           
            <div className="panel-body">
                  <div className="container">
                    <div className="row gx-2 justify-content-between">
                      <div className="col-2">
                      <a href="#">
                        <div className="card-style-1 hover-up ">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">Users Details</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-people-fill fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center color-brand-1">132</p>
                            </div>
                            <br></br>
                            <p className="text-10 text-center strong color-brand-1"><strong>4 </strong> new users this week
                            </p>
                          </div>
                        </div>
                      </a>
                      </div>
                      <div className="col-2">
                      <a href="#">
                        <div className="card-style-1 hover-up ">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">Pending Inquiries</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-envelope fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center color-brand-1">52</p>
                            </div>
                            <br></br>
                            <p className="text-10 text-center strong color-brand-1"><strong>10 </strong> pending inquiries 
                            </p>
                          </div>
                        </div>
                      </a>
                      </div>
                      <div className="col-2">
                      <a href="#">
                        <div className="card-style-1 hover-up hover-color ">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">Flood  <br></br> Alerts</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-exclamation-triangle-fill fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center color-brand-1">2000</p>
                            </div>
                            <br></br>
                            <p className="text-10 text-center strong color-brand-1"><strong>4 </strong> new alerts this week.
                            </p>
                          </div>
                        </div>
                      </a>
                      </div>
                      <div className="col-2">
                      <a href="#">
                        <div className="card-style-1 hover-up ">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">News Articles</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-newspaper fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center color-brand-1">132</p>
                            </div>
                            <br></br>
                            <p className="text-10 text-center strong color-brand-1"><strong>4 </strong> news articles this week.
                            </p>
                          </div>
                        </div>
                      </a>
                      </div>
                      <div className="col-2">
                      <a href="#">
                        <div className="card-style-1 hover-up ">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">Missing Data</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-cloud-upload-fill fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center color-brand-1">132</p>
                            </div>
                            <br></br>
                            <p className="text-10 text-center strong color-brand-1">Missing <strong>4</strong> days weather data.
                            </p>
                          </div>
                        </div>
                      </a>
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
export default AdminBar;