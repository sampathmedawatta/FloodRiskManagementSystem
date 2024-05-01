import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LocationProvider from "./contexts/LocationContext";
import AlertProvider from "./contexts/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LocationProvider>
    <AlertProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AlertProvider>
  </LocationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
