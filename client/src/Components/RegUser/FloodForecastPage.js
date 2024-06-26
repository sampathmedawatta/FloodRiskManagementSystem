import React, { useEffect, useState } from "react";
import ForecastSelector from "./ForecastSelector";
import FloodForecastTable from "./FloodForecastTable";
import LocationService from "../../services/location.service";
import ForecastService from "../../services/forecast.service";
import { useLocation } from "../../contexts/LocationContext";
import FloodForecastLineGraph from "./FloodForecastLineGraph";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import RainfallBarGraph from "./RailfallBarGraph";
import AlertsComponent from "./AlertsComponent";

Chart.register(CategoryScale);

const FloodForecastPage = () => {
  const { location, setLocation } = useLocation();
  const [locations, setLocations] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [forecastPeriod, setForecastPeriod] = useState(7);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const floodLocations = await LocationService.getFloodLocations("Flood");
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
    setLocation(location);
  };

  useEffect(() => {
    handleLocationSelect(location);
  }, [location]);

  const handleDurationSelect = (duration) => {
    setForecastPeriod(duration);
  };

  const getFloodForecastOnPeriod = async () => {
    setLocation(selectedLocation);
    try {
      const locationForecast = await ForecastService.getForecastByLocation(
        selectedLocation,
        forecastPeriod
      );

      const forecastWithDetails = {
        forecastData: locationForecast.forecast,
        location: selectedLocation,
        forecastPeriod: forecastPeriod,
      };

      setForecastData(forecastWithDetails);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="box-content">
      <div className="row">
        <div className="col-md-12">
          <ForecastSelector
            location={selectedLocation}
            locations={locations}
            onLocationSelect={handleLocationSelect}
            onPeriodSelect={handleDurationSelect}
            forecastPeriod={forecastPeriod}
            onGetForecast={getFloodForecastOnPeriod}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-7">
          <FloodForecastTable
            forecastTableValues={forecastData}
            forecastPeriod={forecastPeriod}
            location={selectedLocation}
          />
        </div>
        <div className="col-md-5">
  <AlertsComponent
    forecastPeriod={forecastPeriod}
    location={selectedLocation}
  />
</div>

      </div>

      <div className="row">
        <div className="col-md-6">
          <FloodForecastLineGraph chartData={forecastData} />
        </div>
        <div className="col-md-6">
          <RainfallBarGraph chartData={forecastData} />
        </div>
      </div>
    </div>
  );
};

export default FloodForecastPage;
