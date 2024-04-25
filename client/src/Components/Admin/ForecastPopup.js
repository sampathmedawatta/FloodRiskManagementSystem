import React from "react";

const ForecastPopup = ({ location, forecast, selectedDay, onClose }) => {
  const handleCreateAlert = () => {
    console.log(
      "alert - " + forecast.riskLevel + " - " + location + " - " + forecast.date
    );
  };

  const handleCreateNews = () => {
    console.log(
      "news - " + forecast.riskLevel + " - " + location + " - " + forecast.date
    );
  };

  const handleCreateInformAuth = () => {
    console.log(
      "inform auth - " +
        forecast.riskLevel +
        " - " +
        location +
        " - " +
        forecast.date
    );
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="row">
          <div className="panel-head">
            <div className="row">
              <div class="col-md-10">
                <h6 className="text-start td-nowrap">
                  {" "}
                  <i class="bi bi bi-geo-alt-fill"></i>&nbsp;{location}
                </h6>
              </div>
              <div class="col-md-2">
                <p onClick={onClose}>
                  <i class="bi bi-x-square-fill"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-start">
          <div class="col-md-12">
            <span className="color-brand-1 text-12">{forecast.day}</span>{" "}
            <span>&nbsp;</span>
            <span className="color-brand-1 text-12">{forecast.date}</span>
          </div>
        </div>
        <div className="row text-muted text-12 td-nowrap ">
          <div class="col-md-2 text-start">
            <p className="color-brand-1"> Risk : &nbsp;</p>
          </div>
          <div class="col-md-10">
            <p className={forecast.riskLevel.toLowerCase()}>
              {forecast.riskLevel}
            </p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-12">
            <button
              className="btn btn-login hover-up text-12 w-100"
              onClick={handleCreateAlert}
            >
              <i class="bi bi-exclamation-triangle-fill" /> &nbsp; Create Alert
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              className="btn btn-login text-12 hover-up w-100"
              onClick={handleCreateNews}
            >
              <i class="bi bi-newspaper" /> &nbsp; Create a News
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              className="btn btn-login hover-up text-12 w-100"
              onClick={handleCreateInformAuth}
            >
              <i class="bi bi-info-square-fill" /> &nbsp; Inform Authorities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForecastPopup;
