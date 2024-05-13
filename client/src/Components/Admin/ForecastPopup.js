import React, { useState, useEffect } from "react";
import AdminCreateAlert  from "./AdminAlertCreate"
import AlertsService from "../../services/alert.service";

const ForecastPopup = ({ location, forecast, date, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [showAlertData, setShowAlertData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await AlertsService.getAllAlerts();
      if (response) {
        const alerts = response.filter(
          (alert) => alert.alertDate === new Date(forecast.date).toISOString()
        );
        
        if (!alerts || alerts.length === 0) {
          setShowAlertData(false);
          setShowModal(true);
        } else {
          setShowAlertData(true);
          setShowModal(false);
        }

      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowAlertData(false);
  };

  return (
    <div>
      {showAlertData && (
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
                <p>Allert message already created!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        {/* Render AdminCreateAlert modal */}
        {showModal && (
          <AdminCreateAlert
            showModal={showModal}
            toggleModal={handleCloseModal}
            alertData={{
              location,
              riskLevel: forecast.riskLevel,
              flood: forecast.flood,
              date: forecast.date,
            }}
            fetchData={() => {}}
          />
        )}
      </div>
    </div>
  );
};

export default ForecastPopup;
