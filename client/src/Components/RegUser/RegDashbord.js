import React, { useState, useEffect } from "react";
import { useLocation } from "../../contexts/LocationContext";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import Map from "../Shared/Map";
import AlertService from "../../services/alert.service";
import WeatherObservationCard from "./WeatherObservationCard";
import NewsFeedCard from "./NewsFeedCard";
import EmergencyContactCardHolder from "./EmergencyContactCard";
import AlertsComponent from "./AlertsComponent";

function RegDashboard() {
  const {location} = useLocation(); //can use this after modifying alert data to existing locations
  //const location = "location";
  const [alertData, setAlertData] = useState(null);
  const dummylocation="Chek Lap Kok";


  useEffect(() => {
    const fetchLocationData = async () => {
     /* try {
        const alerts = await AlertService.getAllAlerts();
        if (alerts) {
          const sortedAlerts = alerts.sort(
            (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
          );
          const filteredAlerts = sortedAlerts.filter(
            (alert) => alert.location === location
          );
          if (filteredAlerts.length > 0) {
            setAlertData(filteredAlerts[0]);
          } else {
            setAlertData(null); // Clear alert data if no alerts for the location
          }
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
        // You might want to handle this error more gracefully, like displaying a message to the user
      }*/
    };

    fetchLocationData();
  }, );



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
          forecastPeriod={7} 
          location={dummylocation} />
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
