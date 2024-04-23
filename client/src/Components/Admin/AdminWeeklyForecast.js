import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
function AdminWeeklyForecast() {
  const { today, fifthCurrentDate } = getCurrentDateInfo();
  return (
    <div class="col-md-6">
      <div className="row gx-2 justify-content-between">
        <div className="col-12">
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="text-start">
                        <i className="bi bi-tsunami fs-5" />
                        &nbsp;Weekly Flood Forecast
                      </h6>
                    </div>
                    <div className="col-md-5">
                      <p className="text-end font-xs color-text-paragraph-2">
                        {today} to {fifthCurrentDate}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="container">
                    <div className="row gx-2 justify-content-between">
                      <div className="col-6">
                        <div className="card-style-1 hover-up risklevel-high">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">High Risk</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-cloud-lightning-rain-fill fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center">5</p>
                            </div>
                            <p className="text-10 text-center strong color-brand-1">
                              Life threatening situations
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="card-style-1 hover-up risklevel-moderate">
                          <div className="card-info">
                            <div className="card-title row">
                              <div className="col">
                                <h6 className="text-start">Moderate Risk</h6>
                              </div>
                              <div className="col-auto">
                                <i className="bi bi-cloud-rain-fill fs-3 color-brand-1" />
                              </div>
                            </div>
                            <div className="ptb-10">
                              <p className="font-box-flood text-center">10</p>
                            </div>
                            <p className="text-10 text-center strong color-brand-1">
                              Flood Expected: Take Immediate Action
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default AdminWeeklyForecast;
