import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
      <div class="nav">
        <a class="btn btn-expanded"></a>
        <nav class="nav-main-menu">
          <ul class="main-menu">
            <li>
              {" "}
              <a class="dashboard active" href="registered-user-home.html">
                <Link to="/dashboard" className="nav-link px-0 align-middle">
                  <i class="bi bi-house-door-fill fs-5"></i>
                  <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span>
                </Link>
              </a>
            </li>
            <li>
              {" "}
              <a class="dashboard" href="#">
                <i class="bi bi-tsunami fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;
                </span>
              </a>
            </li>
            <li>
              {" "}
              <a class="dashboard" href="#">
                <i class="bi bi-clock-history fs-5"></i>
                <span class="name">&nbsp;&nbsp;Flood History &nbsp;&nbsp;</span>
              </a>
            </li>
            <li>
              {" "}
              <a class="dashboard" href="#">
                <i class="bi bi-newspaper fs-5"></i>
                <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span>
              </a>
            </li>
            <li>
              {" "}
              <a class="dashboard" href="#">
                <i class="bi bi-question-circle-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span>
              </a>
            </li>

            <li>
              {" "}
              <a class="dashboard" href="#">
                <i class="bi bi-chat-text-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Ask Your Query&nbsp;&nbsp;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
}
export default Navbar;