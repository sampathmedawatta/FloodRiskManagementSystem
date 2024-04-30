import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function RegMainAlert({ message, alertType }) {
  const getAlertClassName = (type) => {
    switch (type) {
      case "H":
        return "alert alert-danger";
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
          <i className="bi bi-exclamation-octagon-fill" /> &nbsp;&nbsp;{" "}
          {message}&nbsp;&nbsp;{" "}
          <Link to={"/dashboard"} className="alert-link">
            {" "}
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
export default RegMainAlert;
