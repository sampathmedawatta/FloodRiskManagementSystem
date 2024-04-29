import React, { useState, useEffect } from "react";

import RegMainAlert from "./RegMainAlert";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import AlertService from "../../services/alert.service";
import Map from "../Shared/Map";
import { useLocation } from "../../contexts/LocationContext";
import WeatherObservationCard from "./WeatherObservationCard";
import NewsFeedCard from "./NewsFeedCard";

function RegDashbord() {

  const [alertData, setAlertData] = useState(null);
  // const {location} = useLocation(); can use this after modifying alert data to existing locations
  const location = "location"

    useEffect(() => {
      const fetchLocationData = async () => {
        try {
          const alerts = await AlertService.getAllAlerts();
          if (alerts) {
            // Filter alerts based on location
            const filteredAlerts = alerts.filter((alert) => alert.location === location);
            setAlertData(filteredAlerts);
          }
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      };
  
      fetchLocationData();
    }, []);
  
  return (
    <div className="box-content">
      <div className="row">
        {alertData?.length > 0 &&
          alertData?.map((alert) => (
            <RegMainAlert
              key={alert.id}
              message={alert.description}
              alertType={alert.riskLevel}
            />
          ))}
      </div>
      <div className="row">
        <div className="col-md-12">
          <RegFloodForecast5Days />
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <Map></Map>
        </div>
        <div className="col-md-6">
          <WeatherObservationCard/>
        </div>
        <div className="col-md-6">
          <NewsFeedCard/>
        </div>
      </div>
    </div>
  );
}
export default RegDashbord;
