import React from "react";

const ForecastCard = () => {
  return (
    <div className="col-2">
      <div className="card-style-1 hover-up risklevel-high">
        <div className="card-info">
          <div className="card-title row">
            <div className="col">
              <h6 className="text-start">April 26</h6>
            </div>
            <div className="col-auto">
              <i className="bi bi-cloud-lightning-rain-fill fs-3 color-brand-1" />
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

export default ForecastCard;
