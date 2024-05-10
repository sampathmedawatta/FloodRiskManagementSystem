import React from "react";

const ForecastSelector = ({
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
                    &nbsp;&nbsp;Forecast Selector
                  </h6>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-3">
                  <p className="forecast-dropdown-title">Select Location</p>
                  <div class="dropdown mt-2">
                    <button
                      class="btn dropdown-toggle forecast-dropdown w-100 "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {location}
                    </button>
                    <ul class="dropdown-menu w-100 dropdown-menu-light">
                      {locations?.map((location) => (
                        <li key={location.name}>
                          <button
                            className="dropdown-item ps-3 py-1"
                            onClick={() => onLocationSelect(location.name)}
                          >
                            {location.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
         
  
                <div className="col-3">
                  <p className="forecast-dropdown-title">Forecast Period</p>
                  <div class="dropdown">
                    <button
                      class="btn btn-lg dropdown-toggle forecast-dropdown w-100 mt-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {forecastPeriod} Days
                    </button>
                    <ul class="dropdown-menu w-100 dropdown-menu-light">
                      <li>
                        <button
                          class="dropdown-item ps-3 py-1"
                          onClick={() => onPeriodSelect(7)}
                        >
                          7 Days
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item ps-3 py-1"
                          onClick={() => onPeriodSelect(14)}
                        >
                          14 Days
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                     
                <div className="col-md-2 align-self-end">
                  <button
                    type="button"
                    class="btn forecast-button btn-lg"
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

export default ForecastSelector;
