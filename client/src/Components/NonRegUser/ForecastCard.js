import React from 'react'

const ForecastCard = ({ weather }) => {
  console.log(weather); 

  const getRiskLevel = (rainfall) => {
    if (rainfall >= 50) {
      return "high";
    } else if (rainfall >= 45) {
      return "moderate";
    } else if (rainfall >= 20) {
      return "low";
    } else {
      return "low";
    }
  };
  const geticonClass = (rainfall) => {
    if (rainfall >= 20) {
     return "bi-cloud-lightning-rain-fill";
    } else if (rainfall >= 15) {
       return "bi-cloud-rain-fill"; 
    } else if (rainfall >= 10) {
       return "bi-cloud-sun-fill"; 
    } else {
      return "";
    }
  };

  return (
    <div>
      <div className="non-reg-forecast-card">
        <div className={`card-style-1 hover-up ${getRiskLevel(weather.flood)}`}>
          <div className="card-info">
            <div className="card-title row">
              <div className="col">
                <h6 className="text-start">{weather.date}</h6>
              </div>
              <div className="col-auto">
                <i
                  className={`bi ${ geticonClass(
                    weather.flood
                  )} fs-5 color-brand-1`}
                />
              </div>
            </div>
            <div className="ptb-10">
              <p className="font-box-flood  text-center">
                {parseInt(weather.flood)}%
              </p>
            </div>
            <div className="table-responsive">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="text-10 strong color-brand-1 col-6 text-end">
                      Rainfall:
                    </td>
                    <td className="text-10 strong color-brand-1 col-6 text-start">
                      {weather.rainfall} mm
                    </td>
                  </tr>
                  <tr>
                    <td className="text-10 color-brand-1 col-6 text-end">
                      Wind Speed:
                    </td>
                    <td className="text-10 color-brand-1 col-6 text-start">
                      {weather.meanWindspeed}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-10 color-brand-1 col-6 text-end">
                      Wind Direction:
                    </td>
                    <td className="text-10 color-brand-1 col-6 text-start">
                      {weather.windDirection}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-10 color-brand-1 col-6 text-end">
                      Mean Temperature:
                    </td>
                    <td className="text-10 color-brand-1 col-6 text-start">
                      {weather.meanTempurature}
                    </td>
                  </tr>
                  <tr>
                    <td className="text-10 color-brand-1 col-6 text-end">
                      Humidity:
                    </td>
                    <td className="text-10 color-brand-1 col-6 text-start">
                      {weather.humidity}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ForecastCard;
