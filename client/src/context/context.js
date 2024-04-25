import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
 
  const [locationList, setlocationList] = useState([]);

  return (
    <Context.Provider
      value={{
        locationList,
        setlocationList,
      }}
    >
      {children}
    </Context.Provider>
  );
};
