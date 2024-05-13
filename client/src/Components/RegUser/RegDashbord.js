import React from "react";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import Map from "../Shared/Map";
import WeatherObservationCard from "./WeatherObservationCard";
import NewsFeedCard from "./NewsFeedCard";
import EmergencyContactCardHolder from "./EmergencyContactCard";
import AlertsComponent from "./AlertsComponent";

function RegDashboard() {
  
  return (
    <div className="box-content">
      <div className="row">
        <div className="col-md-9">
          <RegFloodForecast5Days />
        </div>
        <div className="col-md-3">
          <WeatherObservationCard />
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-md-8">
          <Map />
        </div>
        <div className="col-md-4">
          <AlertsComponent 
          forecastPeriod={7}  />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6">
          <EmergencyContactCardHolder />
        </div>
        <div className="col-md-6">
          <NewsFeedCard />
        </div>
      </div>
    </div>
  );
}

export default RegDashboard;
