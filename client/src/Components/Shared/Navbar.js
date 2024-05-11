import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getUserSession } from "./SessionUtils";
import NavbarItem from "./NavbarItem";
import { registeredUserNavItems } from "../../utils/NavbarItems";

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
          {registeredUserNavItems.map((navItem) => (
            <NavbarItem
              active={isActiveLink(navItem.link)}
              icon={navItem.icon}
              title={navItem.title}
              link={navItem.link}
            />
          ))}
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
              className={`dashboard ${isActiveLink("/news-feed") ? "active" : ""}`}
              href="/news-feed"
            >
              <Link to="/news-feed" className="nav-link px-0 align-middle">
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
              <Link
                to="/admin-dashboard"
                className="nav-link px-0 align-middle"
              >
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
              <Link to="/view-forecast" className="nav-link px-0 align-middle">
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
              <Link to="/view-flood-history" className="nav-link px-0 align-middle">
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
              className={`dashboard ${isActiveLink("/manage-inquires") ? "active" : ""}`}
              href="/manage-inquires"
            >
              <Link to="/manage-inquires" className="nav-link px-0 align-middle">
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
              className={`dashboard ${isActiveLink("/manage-admins") ? "active" : ""}`}
              href="/manage-admins"
            >
              <Link to="/manage-admins" className="nav-link px-0 align-middle">
                <i class="bi bi-person-fill-gear fs-5"></i>
                <span class="name">&nbsp;&nbsp;&nbsp;Manage Admins</span>
              </Link>
            </a>
            
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/manage-users") ? "active" : ""}`}
              href="/manage-users"
            >
              <Link to="/manage-users" className="nav-link px-0 align-middle">
                <i class="bi bi-people-fill fs-5"></i>
                <span class="name">&nbsp;&nbsp;&nbsp;Manage Users</span>
              </Link>
            </a>
            
          </li>
          <li>
            {" "}
            <a
              className={`dashboard ${isActiveLink("/") ? "active" : ""}`}
              href="/manage-news"
            >
              <Link to="/manage-news" className="nav-link px-0 align-middle">
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
              className={`dashboard ${
                isActiveLink("/manage-faq") ? "active" : ""
              }`}
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
