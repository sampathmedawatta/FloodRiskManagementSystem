import React, { useEffect, useState } from "react";
import AdminForecastSelector from "./AdminForecastSelector";
import AdminFloodForecastTable from "./AdminFloodForecastTable";
import LocationService from "../../services/location.service";
import ForecastService from "../../services/forecast.service";
import { useLocation } from "../../contexts/LocationContext";
import AdminFloodForecastLineGraph from "./AdminFloodForecastLineGraph";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import AdminRainfallBarGraph from "./AdminRailfallBarGraph";


Chart.register(CategoryScale);

const AdminFloodForecastPage = () => {
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
          <AdminForecastSelector
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
        <div className="col-md-12">
          <AdminFloodForecastTable
            forecastTableValues={forecastData}
            forecastPeriod={forecastPeriod}
            location={selectedLocation}
          />
        </div>
  
        </div>

      
      <div className="row">
        <div className="col-md-6">
          <AdminFloodForecastLineGraph chartData={forecastData} />
        </div>
        <div className="col-md-6">
          <AdminRainfallBarGraph chartData={forecastData} />
        </div>
      </div>
      </div>
  

  );    
};

export default AdminFloodForecastPage;
