import React from "react";

const AlertCard = ({ message, title, alertType }) => {
  const getAlertClassName = (type) => {
    switch (type) {
      case "H":
        return "alert alert-danger p-2";
      case "M":
        return "alert alert-warning";
      case "L":
        return "alert alert-success";
      default:
        return "alert";
    }
  };
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className={getAlertClassName(alertType)} role="alert">
          <div className="d-flex flex-row gap-2">
            <i className="bi bi-exclamation-octagon-fill" />
            <p className="news-item-title-text">{title}</p>
          </div>
          <div className="row">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertCard;
