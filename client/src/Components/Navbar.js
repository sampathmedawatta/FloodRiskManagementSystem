import React, { useState, useEffect } from "react";

function Navbar(){
  // Mock session,
  const userSession = {
    userType: "Registered", // Change different user types: "Admin", "UnRegistered", "Registered"
  };

  // component for Registered User
  const RegisteredHeader = () => (
<div class="nav"><a class="btn btn-expanded"></a>
        <nav class="nav-main-menu">
          <ul class="main-menu">
            <li> <a class="dashboard active" href="registered-user-home.html">
              <i class="bi bi-house-door-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span></a>
            </li>
            <li> <a class="dashboard" href="#">
              <i class="bi bi-tsunami fs-5"></i>
                <span class="name">&nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;</span></a>
            </li>
            <li> <a class="dashboard" href="#">
              <i class="bi bi-clock-history fs-5"></i>
                <span class="name">&nbsp;&nbsp;Flood History &nbsp;&nbsp;</span></a>
            </li>
            <li> <a class="dashboard" href="#">
              <i class="bi bi-newspaper fs-5"></i>
                <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span></a>
            </li>
            <li> <a class="dashboard" href="#">
              <i class="bi bi-question-circle-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span></a>
            </li>
           
            <li> <a class="dashboard" href="#">
              <i class="bi bi-chat-text-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Ask Your Query&nbsp;&nbsp;</span></a>
            </li>
            
          </ul>
        </nav>
      </div>

  );

  // Define the component for Loggedin User
  const UnRegisterHeader = () => (

    <div class="nav"><a class="btn btn-expanded"></a>
    <nav class="nav-main-menu">
      <ul class="main-menu">
        <li> <a class="dashboard active" href="registered-user-home.html">
            <i class="bi bi-house-door-fill fs-5"></i>
            <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span></a>
        </li>

        <li> <a class="dashboard" href="#">
            <i class="bi bi-newspaper fs-5"></i>
            <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span></a>
        </li>
        <li> <a class="dashboard" href="#">
            <i class="bi bi-question-circle-fill fs-5"></i>
            <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span></a>
        </li>


      </ul>
    </nav>
  </div>   

  );

  // Define the component for Registered User
  const AdminHeader = () => (
    <div class="nav"><a class="btn btn-expanded"></a>
      <nav class="nav-main-menu">
        <ul class="main-menu">
          <li> <a class="dashboard active" href="registered-user-home.html">
              <i class="bi bi-house-door-fill fs-5"></i>
              <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span></a>
          </li>

          <li> <a class="dashboard" href="#">
              <i class="bi bi-newspaper fs-5"></i>
              <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span></a>
          </li>
          <li> <a class="dashboard" href="#">
              <i class="bi bi-question-circle-fill fs-5"></i>
              <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span></a>
          </li>


        </ul>
      </nav>
    </div>
  );

  // Render the appropriate header based on the user's session
  const renderNavbar = () => {
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
     
        {renderNavbar()}
     
    </div>
  );
}

export default Navbar;
