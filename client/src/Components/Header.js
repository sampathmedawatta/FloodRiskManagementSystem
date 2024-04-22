import React, { useState, useEffect } from "react";

function Header(){
    return(
        <>
    <header className="header sticky-bar"> 
  <div className="container">
    <div className="main-header">
      <div className="header-left">
        <div className="header-logo"><a className="d-flex" href="registered-user-home.html"><img alt="CorpU" src="/imgs/logo.svg" /></a></div>
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
</header>
        </>
    );
}
export default Header;