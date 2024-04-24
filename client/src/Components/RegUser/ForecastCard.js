import React from "react";

const ForecastCard = ({forecast}) => {
  const riskLevelClass = getRiskLevelClass(forecast.riskLevel);
  const iconClass = getIconClass(forecast.riskLevel);
  const formattedDate = new Date(forecast.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
  return (
    <div className="col-2">
      <div className={`card-style-1 hover-up ${riskLevelClass}`}>
        <div className="card-info">
          <div className="card-title row">
            <div className="col">
              <h6 className="text-start">{formattedDate}</h6>
            </div>
            <div className="col-auto">
              <i className={`bi ${iconClass} fs-3 color-brand-1`}  />
            </div>
          </div>
          <div className="ptb-10">
            <p className="font-box-flood text-center">61%</p>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-10 text-center strong color-brand-1">
                    Rainfall:
                  </td>
                  <td className="text-10 text-center strong color-brand-1">
                    50 mm
                  </td>
                </tr>
                <tr>
                  <td className="text-10 text-center color-brand-1">
                    Wind Speed:
                  </td>
                  <td className="text-10 text-center color-brand-1">69 mph</td>
                </tr>
                <tr>
                  <td className="text-10 text-center color-brand-1">
                    Water Level:
                  </td>
                  <td className="text-10 text-center color-brand-1">55 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  
};

function getRiskLevelClass(riskLevel) {
  switch (riskLevel.toLowerCase()) {
    case "low":
      return "risklevel-norisk";
    case "moderate":
      return "risklevel-moderate";
    case "high":
      return "risklevel-high";
    default:
      return "";
  }
};
function getIconClass(riskLevel) {
  switch (riskLevel.toLowerCase()) {
    case "low":
      return "bi-cloud-sun-fill"; 
    case "moderate":
      return "bi-cloud-rain-fill"; 
    case "high":
      return "bi-cloud-lightning-rain-fill"; 
    default:
      return "";
  }
}
export default ForecastCard;
