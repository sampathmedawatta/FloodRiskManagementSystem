import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import ForecastService from "../../services/forecast.service";
import LocationService from "../../services/location.service";

const Forecast = ({ location, data }) => {
  const forecastData = data[0].forecast[0];


  const getlocation = (code) => {
    if (code == "CLK") {
      return "Chek Lap Kok";
    } else if (code == "CC") {
      return "Cheung Chau";
    } else if (code == "SK") {
      return "Shek Kong";
    } else if (code == "ST") {
      return "Sha Tin";
    } else if (code == "YMT") {
      return "Yau Ma Tei";
    }
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
  const toSentenceCase = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <tr className="tr-border">
      <td className="text-center pl-4">
        <span className="text-muted font-sm">{getlocation(location)}</span>
      </td>
      <td className="text-center">
        <span className="text-muted font-sm">{forecastData.rainfall}</span>
      </td>
      <td className="text-center">
        <span className="text-muted font-sm">{forecastData.meanWindspeed}</span>
      </td>
      <td className="text-center">
        <span className="text-muted font-sm">{forecastData.humidity}</span>
      </td>
      <td className="text-center">
        <span className="text-muted font-sm">
          {forecastData.meanTempurature}
        </span>
      </td>
      <td className="text-center">
        <span className="text-muted font-sm">
          {parseInt(forecastData.flood)}
        </span>
      </td>
      <td className="text-center">
        <span
          className={`text-muted font-sm ${getRiskLevel(
            forecastData.riskLevel
          )}`}
        >
          {toSentenceCase(forecastData.riskLevel)}
        </span>
      </td>
    </tr>
  );
};

function AdminTodayForecast() {
 const { today } = getCurrentDateInfo();
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchFloodForecast = async () => {
      const locationForecast = await ForecastService.getForecastByDate(1);
       setForecastData(locationForecast);

      
    };
    fetchFloodForecast();
  }, []);

  return (
    <div className="forecast-list">
      <div className="col-xxl-12 col-xl-6 col-lg-6">
        <div className="section-box">
          <div className="container">
            <div className="panel-white">
              <div className="panel-head">
                <div className="row">
                  <div className="col-md-9">
                    <h6 className="text-left">
                      <i className="bi bi-tsunami fs-5" />
                      &nbsp;&nbsp;Today's Weather Forecast
                    </h6>
                  </div>
                  <div className="col-md-3">
                    <p className="text-end font-xs color-text-paragraph-2">
                      {today}
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead className="border-bottom thead-header">
                      <tr className="tr-border">
                        <th scope="col" className="pl-4">
                          Location
                        </th>
                        <th scope="col" className=" ">
                          Rainfall (mm)
                        </th>
                        <th scope="col" className>
                          Wind (KmH)
                        </th>
                        <th scope="col" className>
                          Humidity
                        </th>
                        <th scope="col" className>
                          Tempurature (C)
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
                      {forecastData?.map((forecast, index) => (
                        <Forecast
                          key={index}
                          location={forecast.location}
                          data={forecast.data}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
                <p class="text-end">
                  <a href="view-forecast" class="font-xs color-text-paragraph-2">
                    See More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminTodayForecast;
