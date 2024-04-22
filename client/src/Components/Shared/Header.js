import React, { useState, useEffect } from "react";

function Header() {
  // Mock session,
  const userSession = {
    userType: "Registered", // Change different user types: "Admin", "UnRegistered", "Registered"
  };

  // component for Registered User
  const RegisteredHeader = () => ( 
  <div className="container">
    <div className="main-header">
      <div className="header-left">
        <div className="header-logo"><a className="d-flex" href="registered-user-home.html">
            <img alt="CorpU" src="imgs/logo.svg" /></a></div>
      </div>   
      <div className="header-right">
        <div className="row">
          <div className="col-md-4">
            <div className="header-date">
              <h6>April 2024</h6>
              <p className="text-start font-xs color-text-paragraph-2">Monday 01</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="header-location">
              <div className="dropdown"> 
                <i className="bi bi-geo-alt-fill" /> 	&nbsp;&nbsp;<a className="font-sm  icon-down" id="dropdownProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><strong className="color-brand-1">Kwun Tong</strong> 	&nbsp;</a>
                <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownProfile">
                  <li><a className="dropdown-item" href="#">Sham Shui Po</a></li>
                  <li><a className="dropdown-item" href="#">Sheung Wan</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dropdown d-inline-block"><a className="btn btn-notify" id="dropdownNotify" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" />
              <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownNotify">
                <li><a className="dropdown-item active" href="#">10 notifications</a></li>
                <li><a className="dropdown-item" href="#">12 messages</a></li>
                <li><a className="dropdown-item" href="#">20 replies</a></li>
              </ul>
            </div>
            <div className="member-login"><img alt src="imgs/profile.png" />
              <div className="info-member"> <strong className="color-brand-1">Steven Jobs</strong>
                <div className="dropdown"><a className="font-xs color-text-paragraph-2 icon-down" id="dropdownProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">User</a>
                  <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownProfile">
                    <li><a className="dropdown-item" href="login.html">Logout</a></li>
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
        <div className="header-logo"><a className="d-flex" href="login.html"><img alt="CorpU" src="imgs/logo.svg" /></a></div>
      </div>
      <div className="header-right">
        <div className="row">
          <div className="col-md-4">
            <div className="header-date">
              <h6>April 2024</h6>
              <p className="text-start font-xs color-text-paragraph-2">Monday 01</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="header-location">
              <div className="dropdown">
                <i className="bi bi-geo-alt-fill" /> &nbsp;&nbsp;<a className="font-sm" id="dropdownProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><strong className="color-brand-1">All</strong> &nbsp;</a>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="member-login">
              <a className="btn btn-login hover-up" href="#"><i className="bi bi-box-arrow-in-right fs-5" /> Login</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );

  // Define the component for Registered User
  const AdminHeader = () => ( 
  <div className="container">
    <div className="main-header">
      <div className="header-left">
        <div className="header-logo"><a className="d-flex" href="registered-user-home.html">
            <img alt="CorpU" src="imgs/logo.svg" /></a></div>
      </div>   
      <div className="header-right">
        <div className="row">
          <div className="col-md-4">
            <div className="header-date">
              <h6>April 2024</h6>
              <p className="text-start font-xs color-text-paragraph-2">Monday 01</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="header-location">
              <div className="dropdown"> 
                <i className="bi bi-geo-alt-fill" /> 	&nbsp;&nbsp;<a className="font-sm  icon-down" id="dropdownProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><strong className="color-brand-1">Kwun Tong</strong> 	&nbsp;</a>
                <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownProfile">
                  <li><a className="dropdown-item" href="#">Sham Shui Po</a></li>
                  <li><a className="dropdown-item" href="#">Sheung Wan</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="dropdown d-inline-block"><a className="btn btn-notify" id="dropdownNotify" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" />
              <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownNotify">
                <li><a className="dropdown-item active" href="#">10 notifications</a></li>
                <li><a className="dropdown-item" href="#">12 messages</a></li>
                <li><a className="dropdown-item" href="#">20 replies</a></li>
              </ul>
            </div>
            <div className="member-login"><img alt src="imgs/profile.png" />
              <div className="info-member"> <strong className="color-brand-1">Steven Jobs</strong>
                <div className="dropdown"><a className="font-xs color-text-paragraph-2 icon-down" id="dropdownProfile" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">User</a>
                  <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownProfile">
                    <li><a className="dropdown-item" href="login.html">Logout</a></li>
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
      <header className="header sticky-bar">
        {renderHeader()}
      </header>
    </div>
  );
}

export default Header;
