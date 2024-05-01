import { createContext, useContext, useEffect, useState } from "react";
import AlertService from "../services/alert.service";
import { useLocation } from "./LocationContext";

const AlertContext = createContext({
  alertList: null,
  latestAlert: null
});

export const useAlerts = () => useContext(AlertContext);

const AlertProvider = ({ children }) => {
  // const { location } = useLocation();
  const location = "location"
  const [alertList, setAlertList] = useState();
  const [latestAlert, setLatestAlert]= useState();
  //we can remove this id after implementing user auth part

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const alerts = await AlertService.getAllAlerts();
        console.log(alerts,'context')
        if (alerts && location) {
          // Sort alerts based on publish date in descending order
          const sortedAlerts = alerts.sort(
            (a, b) => new Date(b.publishDate) - new Date(a.publishDate)
          );

          // Filter alerts based on location
          const filteredAlerts = sortedAlerts.filter(
            (alert) => alert.location === location
          );

          // Set latest alert
          if (filteredAlerts.length > 0) {
            setLatestAlert(filteredAlerts[0]);
            setAlertList(filteredAlerts)
          }
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, [location]);

  return (
    <AlertContext.Provider value={{ alertList,latestAlert}}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
