import React, { useState } from "react";
import AdminCreateAlert  from "./AdminAlertCreate"

const ForecastPopup = ({ location, forecast, selectedDay, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [alertData, setAlertData] = useState(null);

  const handleCreateAlert = () => {
    setAlertData({
      location,
      riskLevel: forecast.riskLevel,
      flood: forecast.flood,
      date: forecast.date
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="row">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-10">
                <h6 className="text-start td-nowrap">
                  <i className="bi bi bi-geo-alt-fill"></i>&nbsp;{location}
                </h6>
              </div>
              <div className="col-md-2">
                <p onClick={onClose}>
                  <i className="bi bi-x-square-fill"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row text-start">
          <div className="col-md-12">
            <span className="color-brand-1 text-12">{forecast.day}</span>{" "}
            <span>&nbsp;</span>
            <span className="color-brand-1 text-12">{forecast.date}</span>
          </div>
        </div>
        <div className="row text-muted text-12 td-nowrap ">
          <div className="col-md-2 text-start">
            <p className="color-brand-1"> Risk : &nbsp;</p>
          </div>
          <div className="col-md-10">
            <p className={forecast.riskLevel.toLowerCase()}>
              {forecast.riskLevel}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn btn-login hover-up text-12 w-100"
              onClick={handleCreateAlert}
            >
              <i className="bi bi-exclamation-triangle-fill" /> &nbsp; Create Alert
            </button>
          </div>
        </div>
      </div>

      {/* Render AdminCreateAlert modal */}
      {showModal && (
        <AdminCreateAlert
          showModal={showModal}
          toggleModal={handleCloseModal}
          alertData={alertData}
          fetchData={() => {}}
        />
      )}
    </div>
  );
};

export default ForecastPopup;
