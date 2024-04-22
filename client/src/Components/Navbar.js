import React, { useState, useEffect } from "react";


function Navbar(){
    return(
        <>
  <div>
  <div className="burger-icon burger-icon-white"><span className="burger-icon-top" /><span className="burger-icon-mid" />
    <span className="burger-icon-bottom" /></div>
  <div className="mobile-header-active mobile-header-wrapper-style perfect-scrollbar">
    <div className="mobile-header-wrapper-inner">
      <div className="mobile-header-content-area">
        <div className="perfect-scroll">
          <div className="mobile-menu-wrap mobile-header-border">
            {/* mobile menu start*/}
            <nav>
              <ul className="main-menu">
                <li> <a className="dashboard active" href="registered-user-home.html">
                    <i className="bi bi-house-door-fill fs-5" />
                    <span className="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span></a>
                </li>
                <li> <a className="dashboard" href="#">
                    <i className="bi bi-tsunami fs-5" />
                    <span className="name">&nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;</span></a>
                </li>
                <li> <a className="dashboard" href="#">
                    <i className="bi bi-clock-history fs-5" />
                    <span className="name">&nbsp;&nbsp;Flood History &nbsp;&nbsp;</span></a>
                </li>
                <li> <a className="dashboard" href="#">
                    <i className="bi bi-newspaper fs-5" />
                    <span className="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span></a>
                </li>
                <li> <a className="dashboard" href="#">
                    <i className="bi bi-question-circle-fill fs-5" />
                    <span className="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span></a>
                </li>
                <li> <a className="dashboard" href="#">
                    <i className="bi bi-chat-text-fill fs-5" />
                    <span className="name">&nbsp;&nbsp;Ask Your Query&nbsp;&nbsp;</span></a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mobile-account">
            <h6 className="mb-10">Your Account</h6>
            <ul className="mobile-menu font-heading">
              <li><a href="#">Profile</a></li>
              <li><a href="page-signin.html">Sign Out</a></li>
            </ul>
          </div>
          <div className="site-copyright">Copyright © 2024 Hong Kong Flood Risk Management. All rights reserved</div>
        </div>
      </div>
    </div>
  </div>
  <main className="main">
    <div className="nav"><a className="btn btn-expanded" />
      <nav className="nav-main-menu">
        <ul className="main-menu">
          <li> <a className="dashboard active" href="registered-user-home.html">
              <i className="bi bi-house-door-fill fs-5" />
              <span className="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span></a>
          </li>
          <li> <a className="dashboard" href="#">
              <i className="bi bi-tsunami fs-5" />
              <span className="name">&nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;</span></a>
          </li>
          <li> <a className="dashboard" href="#">
              <i className="bi bi-clock-history fs-5" />
              <span className="name">&nbsp;&nbsp;Flood History &nbsp;&nbsp;</span></a>
          </li>
          <li> <a className="dashboard" href="#">
              <i className="bi bi-newspaper fs-5" />
              <span className="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span></a>
          </li>
          <li> <a className="dashboard" href="#">
              <i className="bi bi-question-circle-fill fs-5" />
              <span className="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span></a>
          </li>
          <li> <a className="dashboard" href="#">
              <i className="bi bi-chat-text-fill fs-5" />
              <span className="name">&nbsp;&nbsp;Ask Your Query&nbsp;&nbsp;</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </main></div>
        </>
    );
}
export default Navbar;