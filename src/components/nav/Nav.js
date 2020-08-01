import React from "react";
import { Link } from "react-router-dom";

import NavLink from "./NavLink";

const Nav = () => {
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/rules", name: "Rules" },
    { to: "/routes", name: "Routes" },
  ];

  const renderNavLinks = () => {
    return navLinks.map(({ to, name }, i) => {
      return <NavLink to={to} name={name} key={i} />;
    });
  };

  return (
    <nav className="navContainer">
      <Link
        to="/"
        className={`${window.location.pathname !== "/" ? "navActive" : null}`}
      >
        <div className="balooBold" style={{ fontSize: "1.5rem" }}>
          <h1>Bike Berlin</h1>
        </div>
      </Link>

      <div className="navRight" id="navbarNav">
        <ul>{renderNavLinks()}</ul>
      </div>
    </nav>
  );
};

export default Nav;
