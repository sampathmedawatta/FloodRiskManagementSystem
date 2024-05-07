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
    <div>
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col">
                  <h6 className="text-start">
                    <i className="bi bi-phone-vibrate" />
                    &nbsp;&nbsp;Forecast Selector
                  </h6>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col">
                  <p className="forecast-dropdown-title">Select Location</p>
                  <div class="btn-group w-100 mt-2">
                    <button
                      class="btn btn-lg dropdown-toggle forecast-dropdown text-14"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {location}
                    </button>
                    <ul class="dropdown-menu w-100 text-center">
                      {locations?.map((location) => (
                        <li key={location.name}>
                          <button
                            className="dropdown-item p-1 text-15"
                            onClick={() => onLocationSelect(location.name)}
                          >
                            {location.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p className="forecast-dropdown-title">Forecast Period</p>
                  <div class="btn-group w-100 mt-2">
                    <button
                      class="btn btn-lg dropdown-toggle forecast-dropdown"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {forecastPeriod} Days
                    </button>
                    <ul class="dropdown-menu w-100">
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => onPeriodSelect(7)}
                        >
                          7 Days
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item"
                          onClick={() => onPeriodSelect(14)}
                        >
                          14 Days
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row mt-4 mb-2">
                <div className="col">
                  <button
                    type="button"
                    class="btn forecast-button btn-lg w-100"
                    onClick={onGetForecast}
                  >
                    Get Forecast
                  </button>
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
