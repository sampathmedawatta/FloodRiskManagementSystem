import { createContext, useContext, useEffect, useState } from "react";
import UserService from "../services/user.service";

const LocationContext = createContext({
  location: null,
  setLocation: () => {},
});

export const useLocation = () => useContext(LocationContext);

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState("Kwun Tong");
  //we can remove this id after implementing user auth part
  const userId = "662e2b867daa986ce1b85bdd";

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const locationData = await UserService.getUserById(userId);
        if (locationData) {
          setLocation(locationData.preferedLocation);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchLocationData();
  }, []);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
