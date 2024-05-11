import React from "react";

const AdminForecastSelector = ({
  location,
  locations,
  onLocationSelect,
  onPeriodSelect,
  forecastPeriod,
  onGetForecast,
}) => {
  return (
    <div className="row gx-2 justify-content-between mt-2">
      <div className="col-12">
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <div className="row">
                  <div className="col">
                    <h6 className="text-start">
                      <i className="bi bi-tsunami" />
                      &nbsp;&nbsp;Flood Forecast
                    </h6>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-3">
                    <label className="font-sm mb-10" required="">Select Location *</label>
                    <select
                      required=""
                      className="form-control mt-2"
                      value={location}
                      onChange={(e) => onLocationSelect(e.target.value)}
                    >
                      {locations?.map((location) => (                                    
                        <option key={location.name} value={location.name}>
                          {location.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-3">
                    <label className="font-sm mb-10" required="">Forecast Period *</label>
                    <select
                      className="form-control mt-2"
                      value={forecastPeriod}
                      onChange={(e) => onPeriodSelect(parseInt(e.target.value))}
                    >
               
                      <option value={7}>7 Days</option>
                      <option value={14}>14 Days</option>
                    </select>
                  </div>

                  <div className="col-md-2 align-self-end">
                    <button
                      type="button"
                      className="btn forecast-button btn-lg"
                      onClick={onGetForecast}
                    >
                      <i className="bi bi-tsunami" />
                      &nbsp;&nbsp; Get Forecast
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForecastSelector;
