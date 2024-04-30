import React, { useState, useEffect } from "react";
import RegMainAlert from "./RegMainAlert";
import RegFloodForecast5Days from "./RegFloodForecast5Days";
import Map from "../Shared/Map";
import AlertService from "../../services/alert.service";
import WeatherObservationCard from "./WeatherObservationCard";
import NewsFeedCard from "./NewsFeedCard";
import EmergencyContact from "./EmergencyContact";

function RegDashbord() {
  const [alertData, setAlertData] = useState(null);
  //TODO: const {location} = useLocation(); can use this after modifying alert data to existing locations
  const location = "location";

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const alerts = await AlertService.getAllAlerts();
        if (alerts) {
          // Sort alerts based on publish date in descending order
          const sortedAlerts = alerts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

          // Filter alerts based on location
          const filteredAlerts = sortedAlerts.filter(alert => alert.location === location);
          
          // Set latest alert
          if (filteredAlerts.length > 0) {
            setAlertData(filteredAlerts[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [location]);

  return (
    <div className="box-content">
      <div className="row">
      {alertData && (
          <RegMainAlert
            key={alertData.id}
            message={alertData.description}
            alertType={alertData.riskLevel}
          />
        )}
      </div>
      <div className="row">
        <div className="col-md-12">
          <RegFloodForecast5Days />
        </div>
      </div>
      <div className="row mt-1">
        <div className="col-md-6">
          <Map></Map>
          <EmergencyContact/>
        </div>
        <div className="col-md-6">
          <div className="row">
            <div>
              <WeatherObservationCard />
            </div>
            <div className="mt-3">
              <NewsFeedCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegDashbord;
