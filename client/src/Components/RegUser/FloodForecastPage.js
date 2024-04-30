import React, { useEffect, useState } from "react";
import ForecastSelector from "./ForecastSelector";
import FloodForecastTable from "./FloodForecastTable";
import LocationService from "../../services/location.service";
import ForecastService from "../../services/forecast.service";
import { useLocation } from "../../contexts/LocationContext";

const FloodForecastPage = () => {
  const { location } = useLocation();
  const [locations, setLocations] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [forecastPeriod, setForecastPeriod] = useState(7);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const floodLocations = await LocationService.getFloodLocations();
        if (floodLocations) {
          setLocations(floodLocations);
        }
      } catch (error) {
        console.error("Error while fetching flood location data", error);
      }
    };
    fetchLocations();
    getFloodForecastOnPeriod();
  }, []);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleDurationSelect = (duration) => {
    setForecastPeriod(duration);
  };

  const getFloodForecastOnPeriod = async () => {
    try {
      const forecastData = ForecastService.getForecast().find(
        (forecast) => forecast.location === selectedLocation
      );

      if (forecastData) {
        const filteredForecast = forecastData.forecast.filter((item) => {
          const forecastDate = new Date(item.date);
          const today = new Date();
          const laterDuration = new Date(
            today.getTime() + forecastPeriod * 24 * 60 * 60 * 1000
          );
          return forecastDate >= today && forecastDate <= laterDuration;
        });
        const forecastWithDetails = {
          forecastData: filteredForecast,
          location: selectedLocation,
          forecastPeriod: forecastPeriod,
        };
        setForecastData(forecastWithDetails);
      } else {
        setForecastData({forecastData: [], location: null, forecastPeriod: null})
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="box-content">
      <div className="row">
        <div className="col-4">
          <ForecastSelector
            location={selectedLocation}
            locations={locations}
            onLocationSelect={handleLocationSelect}
            onPeriodSelect={handleDurationSelect}
            forecastPeriod={forecastPeriod}
            onGetForecast={getFloodForecastOnPeriod}
          />
        </div>
        <div className="col-8">
          <FloodForecastTable forecastTableValues={forecastData} forecastPeriod={forecastPeriod} location={selectedLocation}/>
        </div>
      </div>
    </div>
  );
};

export default FloodForecastPage;