import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ icon, title, link, active, onClick }) {
  return (
    <li>
      <Link
        className={`dashboard ${active ? "active" : ""}`}
        to={link}
        onClick={onClick}
      >
        <i className={icon} />
        <span className="name">&nbsp;&nbsp;{title}&nbsp;&nbsp;</span>
      </Link>
    </li>
  );
}

export default NavbarItem;
