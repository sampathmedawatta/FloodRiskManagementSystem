import React from "react";

const FloodForecastTable = ({ forecastTableValues }) => {

  return (
    <div className="section-box">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-12">
                <h6 className="text-left">
                  <i className="bi bi-tsunami fs-5" />
                  &nbsp;&nbsp;Flooding Forecast for Next{" "}
                  {forecastTableValues?.forecastPeriod} Days -{" "}
                  {forecastTableValues?.location}
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="table-responsive">
              <table className="table no-wrap user-table mb-0">
                <thead className="border-bottom thead-header">
                  <tr className="tr-border">
                    <th scope="col" className="pl-4">
                      Date
                    </th>
                    <th scope="col" className>
                      Flood Level (%)
                    </th>
                    <th scope="col" className>
                      Risk Level
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {forecastTableValues?.forecastData?.map((forecastItem) => (
                    <tr className="tr-border" key={forecastItem.date}>
                      <td className="text-center pl-4">
                        <span className="text-muted font-sm">
                          {forecastItem.date}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {forecastItem.flood}
                        </span>
                      </td>
                      <td className="text-center">
                        <span
                          className={`text-muted font-sm ${getRiskLevelClassName(
                            forecastItem.riskLevel
                          )}`}
                        >
                          {forecastItem.riskLevel}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* {forecastTableValues}dddd */}
            <p class="text-end">
              <a href="#" class="font-xs color-text-paragraph-2">
                See More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const getRiskLevelClassName = (riskLevel) => {
  switch (riskLevel) {
    case "Low":
      return "risklevel-norisk";
    case "Moderate":
      return "risklevel-moderate";
    case "High":
      return "risklevel-high";
    default:
      return "";
  }
};

export default FloodForecastTable;
