import React from "react";

const ForecastPopup = ({ location, forecast, selectedDay, onClose }) => {

     const handleCreateAlert = () => {
       console.log(
         "alert - " +
           forecast.riskLevel +
           " - " +
           location +
           " - " +
           forecast.date
       );
     };

     const handleCreateNews = () => {
       console.log(
         "news - " +
           forecast.riskLevel +
           " - " +
           location +
           " - " +
           forecast.date
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
                <h6 className="text-start">{location}</h6>
              </div>
              <div class="col-md-2">
                <p onClick={onClose}>X</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div class="col-md-4">
            <p className={forecast.riskLevel.toLowerCase()}>
              {forecast.riskLevel} Risk
            </p>
          </div>
          <div class="col-md-8">
            <p>{forecast.date}</p>
            <p>{forecast.day}</p>
          </div>
        </div>
        <div className="row">
          <div class="col-md-12">
            <button
              className="btn btn-login hover-up w-100"
              onClick={handleCreateAlert}
            >
              Create Alert
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              className="btn btn-login hover-up w-100"
              onClick={handleCreateNews}
            >
              Create a News
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <button
              className="btn btn-login hover-up w-100"
              onClick={handleCreateInformAuth}
            >
              Inform Authorities
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForecastPopup;
