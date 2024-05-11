import React from "react";





const AdminFloodForecast = ({ forecastTableValues }) => {
  const toSentenceCase = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

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
                      Wind Speed (KmH)
                    </th>
                    <th scope="col" className>
                      Wind Direction
                    </th>
                    <th scope="col" className>
                      Humidity
                    </th>
                    <th scope="col" className>
                      Tempurature (C)
                    </th>
                    <th scope="col" className>
                      Rainfall (mm)
                    </th>
                    <th scope="col" className>
                      Flood (%)
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
                          {forecastItem.meanWindspeed}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {forecastItem.windDirection}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {forecastItem.humidity}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {forecastItem.meanTempurature}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {toSentenceCase(forecastItem.rainfall)}
                        </span>
                      </td>
                      <td className="text-center">
                        <span className="text-muted font-sm">
                          {parseInt(forecastItem.flood)}
                        </span>
                      </td>
                      <td className="text-center">
                        <span
                          className={`text-muted font-sm ${getRiskLevel(
                            forecastItem.riskLevel
                          )}`}
                        >
                           {toSentenceCase(forecastItem.riskLevel)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const getRiskLevel = (riskLevel) => {
  if (riskLevel =='High') {
    return "risklevel-high";
  } else if (riskLevel == 'Moderate') {
    return "risklevel-moderate";
  } else if (riskLevel =='Low') {
    return "risklevel-norisk";
  } else {
    return "risklevel-norisk";
  }
};

export default AdminFloodForecast;
