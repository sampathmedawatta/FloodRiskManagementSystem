import { createContext, useContext, useEffect, useState } from "react";
import UserService from "../services/user.service";
import { getUserSession } from "../Components/Shared/SessionUtils"

const LocationContext = createContext({
  location: null,
  setLocation: () => {},
});

export const useLocation = () => useContext(LocationContext);

const LocationProvider = ({ children }) => {

  const [location, setLocation] = useState("Kwun Tong");
 ;
  const userSession = getUserSession();
  const userId = userSession.loggedUser;
  const userType = userSession.userType;


  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        if (userType === "Registered") { // Check if userType is "Registered"
          const locationData = await UserService.getUserById(userId);
          if (locationData) {
            setLocation(locationData.preferedLocation);
          }
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };
  
    fetchLocationData();
  }, [userId, userType]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
