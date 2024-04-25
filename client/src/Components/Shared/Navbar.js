import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserSession } from './SessionUtils';

function Navbar() {
  // Mock session,
  const userSession = getUserSession();

  const location = useLocation();
  const isActiveLink = (link) => {
    return window.location.pathname === link;
  };

  // component for Registered User
  const RegisteredHeader = () => (
    <div class="nav">
      <nav class="nav-main-menu">
        <ul class="main-menu">
          <li>
            {" "}
            <a
              className={`dashboard ${
                isActiveLink("/dashboard") ? "active" : ""
              }`}
              href="/dashboard"
            >
              <Link to="/dashboard" className="nav-link px-0 align-middle">
                <i class="bi bi-house-door-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-tsunami fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-clock-history fs-5"></i>
                <span class="name">&nbsp;&nbsp;Flood History &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-newspaper fs-5"></i>
                <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/faq") ? "active" : ""}`}
              href="/faq"
            >
              <Link to="/faq" className="nav-link px-0 align-middle">
                <i class="bi bi-question-circle-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>

          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-chat-text-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Ask Your Query&nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  // Define the component for Loggedin User
  const UnRegisterHeader = () => (
    <div class="nav">
      <nav class="nav-main-menu">
        <ul class="main-menu">
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/home") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-house-door-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>

          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-newspaper fs-5"></i>
                <span class="name">&nbsp;&nbsp; News Feed &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-question-circle-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;FAQ &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

  // Define the component for Registered User
  const AdminHeader = () => (
    <div class="nav">
      <nav class="nav-main-menu">
        <ul class="main-menu">
          <li>
            {" "}
            <a
              className={`dashboard ${
                isActiveLink("/admin-dashboard") ? "active" : ""
              }`}
              href="/admin-dashboard"
            >
              <Link to="/admin-dashboard" className="nav-link px-0 align-middle">
                <i class="bi bi-house-door-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;Dashboard &nbsp;&nbsp;</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-tsunami fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Flood Forecast &nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-clock-history fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Flood History &nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-exclamation-triangle-fill fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Manage Alerts&nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-cloud-upload-fill fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Predication Data&nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-envelope fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Manage Inquiries&nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-people-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;&nbsp;Manage Users</span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/"
            >
              <Link to="/" className="nav-link px-0 align-middle">
                <i class="bi bi-newspaper fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Manage News &nbsp;&nbsp;
                </span>
              </Link>
            </a>
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/manage-faq") ? "active" : ""}`}
              href="/manage-faq"
            >
              <Link to="/manage-faq" className="nav-link px-0 align-middle">
                <i class="bi bi-question-circle-fill fs-5"></i>
                <span class="name">
                  &nbsp;&nbsp;&nbsp;Manage FAQ &nbsp;&nbsp;
                </span>
              </Link>
            </a>
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

  return <div>{renderNavbar()}</div>;
}

export default Navbar;
