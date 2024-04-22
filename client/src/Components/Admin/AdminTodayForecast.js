import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from '../Shared/Utils';

//import { getCurrentDateInfo } from './Utils';

function AdminTodayForecast(){
    const {today} = getCurrentDateInfo();
    return(
  
<div className="col-xxl-8 col-xl-7 col-lg-7">
      <div className="section-box">
        <div className="container"> 
          <div className="panel-white">
            <div className="panel-head"> 
              <div className="row">
                <div className="col-md-10">
                  <h6 className="text-left"><i className="bi bi-tsunami fs-5" />&nbsp;&nbsp;Today's Flooding Forecast</h6>
                </div>
                <div className="col-md-2">
                  <p className="text-right font-xs color-text-paragraph-2">{today}</p>
                </div>
              </div>
            </div>
            <div className="panel-body"> 
              <div className="table-responsive">
                <table className="table no-wrap user-table mb-0">
                  <thead className="border-bottom thead-header">
                    <tr>
                      <th scope="col" className="pl-4">Location</th>
                      <th scope="col" className=" ">Rainfall (mm)</th>
                      <th scope="col" className>Wind (KmH)</th>
                      <th scope="col" className>Water Level (mm)</th>
                      <th scope="col" className>Flood Level (%)</th>
                      <th scope="col" className>Risk Level</th>
                    </tr>
                  </thead>
                  <tbody><tr>
                      <td className="text-center pl-4">
                        <span className="text-muted font-sm">Kwun Tong</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm risklevel-high">High</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="text-muted font-sm">Kwun Tong</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm risklevel-moderate">Moderate</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="text-muted font-sm">Kwun Tong</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm risklevel-high">High</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="text-muted font-sm">Kwun Tong</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm risklevel-norisk">No</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <span className="text-muted font-sm">Kwun Tong</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">15</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">61%</span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm risklevel-moderate">Moderate</span>
                      </td>
                    </tr>
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box">
        <div className="container"> 
          <div className="panel-white">
            <div className="panel-head"> 
              <h5>Latest Jobs</h5><a className="menudrop" id="dropdownMenu3" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" />
              <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownMenu3">
                <li><a className="dropdown-item active" href="#">Add new</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Actions</a></li>
              </ul>
            </div>
            <div className="panel-body" />
          </div>
        </div>
      </div>
    </div>
        
    );
}
export default AdminTodayForecast;