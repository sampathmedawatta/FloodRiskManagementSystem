import React from "react";


const ForecastPopup = ({ location, forecast, selectedDay, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <div className="row">
          <div className="panel-head">
            <div className="row">
              <div class="col-md-10">
                <h6 className="text-start">{location}</h6>
              </div>
              <div class="col-md-2">
                <p onClick={onClose}>X</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-md-5">
            <p className={forecast.riskLevel.toLowerCase()}>
              {forecast.riskLevel} Risk
            </p>
          </div>
          <div class="col-md-7">
            <p>
              {forecast.date} - {forecast.day}
            </p>
          </div>
        </div>

        <div className="row">
          <div class="col-md-6">
            <button onClick={onClose}>Create Alert</button>
          </div>
          <div class="col-md-6">
            <button onClick={onClose}>Send Notification</button>
          </div>
        </div>
        <div className="row">
          <div class="col-md-6">
            <button onClick={onClose}>Create a News</button>
          </div>
          <div class="col-md-6">
            <button onClick={onClose}>Inform Authorities</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForecastPopup;
