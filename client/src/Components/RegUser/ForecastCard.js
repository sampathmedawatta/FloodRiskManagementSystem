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
            <p className="font-box-flood text-center">{forecast.flood}%</p>
          </div>
          <div className="table-responsive">
            <table className="table">
              <tbody>
                <tr>
                  <td className="text-10 strong color-brand-1 col-6 text-end">
                    Rainfall:
                  </td>
                  <td className="text-10 strong color-brand-1 col-6 text-start ">
                    {forecast.rainfall}
                  </td>
                </tr>
                <tr>
                  <td className="text-10 color-brand-1 col-6 text-end">
                    Wind Speed:
                  </td>
                  <td className="text-10 color-brand-1 col-6 text-start">69 mph</td>
                </tr>
                <tr>
                  <td className="text-10 color-brand-1 col-6 text-end">
                    Wind Direction:
                  </td>
                  <td className="text-10 color-brand-1 col-6 text-start">east</td>
                </tr>
                <tr>
                  <td className="text-10 color-brand-1 col-6 text-end">
                    Mean Temperature:
                  </td>
                  <td className="text-10 color-brand-1 col-6 text-start">30 °C</td>
                </tr>
                <tr>
                  <td className="text-10 color-brand-1 col-6 text-end">
                    Humidity:
                  </td>
                  <td className="text-10 color-brand-1 col-6 text-start">80%</td>
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
