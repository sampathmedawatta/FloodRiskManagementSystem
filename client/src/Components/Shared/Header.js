import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "./Utils";
import { getUserSession } from "./SessionUtils";
import { Link } from "react-router-dom";
import LocationService from "../../services/location.service";
import { useLocation } from "../../contexts/LocationContext";

function Header() {
  // Get user session from sessionUtils
  const userSession = getUserSession();

  const { formattedDate, dayOfWeek, dayOfMonth } = getCurrentDateInfo();

  const { location, setLocation } = useLocation();
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await LocationService.getLocations();
        if (response) {
          const floodLocations = response.locations.filter(
            (location) => location.type === "Flood"
          );
          setLocations(floodLocations);
        }
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations();
  }, []);

  const handleLocationSelect = (locationName) => {
    setLocation(locationName); // Set the location using setLocation from the context
  };

  // component for Registered User
  const RegisteredHeader = () => (
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="/">
              <img alt="floodm" src="imgs/logo.svg" />
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="row">
            <div className="col-md-4">
              <div className="header-date">
                <h6>{formattedDate}</h6>
                <p className="text-start font-xs color-text-paragraph-2">
                  {dayOfWeek} {dayOfMonth}
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="header-location">
                <div className="dropdown">
                  <i className="bi bi-geo-alt-fill" /> &nbsp;&nbsp;
                  <a
                    className="font-sm  icon-down"
                    id="dropdownProfile"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  >
                    <strong className="color-brand-1">{location}</strong> &nbsp;
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownProfile"
                  >
                    {locations?.map((location) => (
                      <li key={location.name}>
                        <button
                          className="dropdown-item"
                          onClick={() => handleLocationSelect(location.name)} // Call handleLocationSelect when a location is clicked
                        >
                          {location.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="member-login">
                <img alt src="imgs/profile.png" />
                <div className="info-member">
                  {" "}
                  <strong className="color-brand-1">Steven Jobs</strong>
                  <div className="dropdown">
                    <a
                      className="font-xs color-text-paragraph-2 icon-down"
                      id="dropdownProfile"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-display="static"
                    >
                      User
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                      aria-labelledby="dropdownProfile"
                    >
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="login.html">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Define the component for Loggedin User
  const UnRegisterHeader = () => (
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="login.html">
              <img alt="FloodManager" src="imgs/logo.svg" />
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="row">
            <div className="col-md-4">
              <div className="header-date">
                <h6>{formattedDate}</h6>
                <p className="text-start font-xs color-text-paragraph-2">
                  {dayOfWeek} {dayOfMonth}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-location"></div>
            </div>
            <div className="col-md-2">
              <div className="member-login">
                <Link to="/login" className="btn btn-login hover-up">
                  <i className="bi bi-box-arrow-in-right fs-5" /> Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Define the component for Admin
  const AdminHeader = () => (
    <div className="container">
      <div className="main-header">
        <div className="header-left">
          <div className="header-logo">
            <a className="d-flex" href="/">
              <img alt="FloodManager" src="imgs/logo.svg" />
            </a>
          </div>
        </div>
        <div className="header-right">
          <div className="row">
            <div className="col-md-4">
              <div className="header-date">
                <h6>{formattedDate}</h6>
                <p className="text-start font-xs color-text-paragraph-2">
                  {dayOfWeek} {dayOfMonth}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-location">
                <div className="dropdown">
                  <i className="bi bi-speedometer2" /> &nbsp;&nbsp;
                  <a className="">
                    <strong className="color-brand-1">
                      Administrator Dashboard
                    </strong>{" "}
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="member-login">
                <img alt src="imgs/profile.png" />
                <div className="info-member">
                  {" "}
                  <strong className="color-brand-1">
                    {userSession.loggedFname} &nbsp;{userSession.loggedlname}
                  </strong>
                  <div className="dropdown">
                    <a
                      className="font-xs color-text-paragraph-2 icon-down"
                      id="dropdownProfile"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      data-bs-display="static"
                    >
                      Admin
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                      aria-labelledby="dropdownProfile"
                    >
                      <li>
                        {" "}
                        <a className={`dropdown-item`} href="/manage-admins">
                          <Link
                            to="/admin-profile"
                            className="nav-link px-0 align-middle"
                          >
                            Profile
                          </Link>
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item" href="login.html">
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render the appropriate header based on the user's session
  const renderHeader = () => {
    switch (userSession.userType) {
      case "Admin":
        return <AdminHeader />;
      case "UnRegistered":
        return <UnRegisterHeader />;
      case "Registered":
        return <RegisteredHeader />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header className="header sticky-bar">{renderHeader()}</header>
    </div>
  );
}

export default Header;
