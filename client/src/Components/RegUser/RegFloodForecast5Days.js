import React, { useState, useEffect } from "react";


function RegFloodForecast5Days(){
    return (
<div>
  <div className="row gx-2 justify-content-between">
    <div className="col-12">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-10">
                  <h6 className="text-start">
                    <i className="bi bi-tsunami fs-5" />&nbsp;&nbsp;Flood
                    Forecast for [Location] - Next 5 Days
                  </h6>
                </div>
                <div className="col-md-2">
                  <p className="text-end font-xs color-text-paragraph-2">
                    Weekly
                  </p>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="container">
                <div className="row gx-2 justify-content-between">
                  <div className="col-2">
                    <div className="card-style-1 hover-up risklevel-high">
                      <div className="card-info">
                        <div className="card-title row">
                          <div className="col">
                            <h6 className="text-start">April 26</h6>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-cloud-lightning-rain-fill fs-3 color-brand-1" />
                          </div>
                        </div>
                        <div className="ptb-10">
                          <p className="font-box-flood text-center">61%</p>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="text-10 text-center strong color-brand-1">
                                  Rainfall:
                                </td>
                                <td className="text-10 text-center strong color-brand-1">
                                  50 mm
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Wind Speed:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  69 mph
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Water Level:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  55 mm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="card-style-1 hover-up risklevel-moderate">
                      <div className="card-info">
                        <div className="card-title row">
                          <div className="col">
                            <h6 className="text-start">April 23</h6>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-cloud-rain-fill fs-3 color-brand-1" />
                          </div>
                        </div>
                        <div className="ptb-10">
                          <p className="font-box-flood text-center">61%</p>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="text-10 text-center strong color-brand-1">
                                  Rainfall:
                                </td>
                                <td className="text-10 text-center strong color-brand-1">
                                  50 mm
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Wind Speed:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  69 mph
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Water Level:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  55 mm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="card-style-1 hover-up risklevel-norisk">
                      <div className="card-info">
                        <div className="card-title row">
                          <div className="col">
                            <h6 className="text-start">April 23</h6>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-cloud-sun-fill fs-3 color-brand-1" />
                          </div>
                        </div>
                        <div className="ptb-10">
                          <p className="font-box-flood text-center">61%</p>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="text-10 text-center strong color-brand-1">
                                  Rainfall:
                                </td>
                                <td className="text-10 text-center strong color-brand-1">
                                  50 mm
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Wind Speed:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  69 mph
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Water Level:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  55 mm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="card-style-1 hover-up risklevel-high">
                      <div className="card-info">
                        <div className="card-title row">
                          <div className="col">
                            <h6 className="text-start">April 23</h6>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-cloud-lightning-rain-fill fs-3 color-brand-1" />
                          </div>
                        </div>
                        <div className="ptb-10">
                          <p className="font-box-flood text-center">61%</p>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="text-10 text-center strong color-brand-1">
                                  Rainfall:
                                </td>
                                <td className="text-10 text-center strong color-brand-1">
                                  50 mm
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Wind Speed:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  69 mph
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Water Level:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  55 mm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="card-style-1 hover-up risklevel-moderate">
                      <div className="card-info">
                        <div className="card-title row">
                          <div className="col">
                            <h6 className="text-start">April 23</h6>
                          </div>
                          <div className="col-auto">
                            <i className="bi bi-cloud-rain-fill fs-3 color-brand-1" />
                          </div>
                        </div>
                        <div className="ptb-10">
                          <p className="font-box-flood text-center">61%</p>
                        </div>
                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <td className="text-10 text-center strong color-brand-1">
                                  Rainfall:
                                </td>
                                <td className="text-10 text-center strong color-brand-1">
                                  50 mm
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Wind Speed:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  69 mph
                                </td>
                              </tr>
                              <tr>
                                <td className="text-10 text-center color-brand-1">
                                  Water Level:
                                </td>
                                <td className="text-10 text-center color-brand-1">
                                  55 mm
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-end font-xs color-text-paragraph-2">
                  <a href="your_link_here" className="color-text-paragraph-2">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <h5>Latest Jobs</h5>
              <a className="menudrop" id="dropdownMenu3" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" />
            </div>
            <div className="panel-body" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}
export default RegFloodForecast5Days;