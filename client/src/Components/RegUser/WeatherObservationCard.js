import React from "react";
import { getCurrentDateInfo } from "../Shared/Utils";

const WeatherObservationCard = () => {
  const { dayOfWeek, dayOfMonth} = getCurrentDateInfo();
  return (
    <div className="container bg-subtle observation-table-header">
      <div className="row p-2">
        <div className="col-9"><h6 className="text-white">Weather Observation</h6><p>{dayOfWeek}, {dayOfMonth}</p></div>
        <div className="col-3 text-center">11.45 AM</div>
      </div>
      <div className="table-responsive observation-table-body">
        <table className="table text-white">
          <tbody>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-thermometer-half"></i>
                  <p>min/Min</p>
                  <p>-3/3</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-clouds"></i>
                  <p>Cloud</p>
                  <p>24%</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-clouds"></i>
                  <p>Haze</p>
                  <p>20km/h</p>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-wind"></i>
                  <p>Sun raise</p>
                  <p>06.00am</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                  <i class="bi bi-sunrise"></i>
                  <p>Sun set</p>
                  <p>06.00pm</p>
                </div>
              </td>
              <td>
                <div className="d-flex flex-column align-items-center">
                <i class="bi bi-droplet"></i>
                  <p>Drop</p>
                  <p>80%</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherObservationCard;
