import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Acceuil</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/projet-1"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Reservia</li>
            </NavLink>
            <NavLink
              to="/projet-2"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Oh my food !</li>
            </NavLink>
            <NavLink
              to="/projet-3"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>La chouette agence</li>
            </NavLink>
            <NavLink
              to="/projet-4"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Kanap</li>
            </NavLink>
            <NavLink
              to="/projet-5"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Hot Takes !</li>
            </NavLink>
            <NavLink
              to="/projet-6"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Groupomania</li>
            </NavLink>
            <NavLink
              to="/projet-7"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>App Flag</li>
            </NavLink>
            <NavLink
              to="/projet-8"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>App movies</li>
            </NavLink>
            <NavLink
              to="/projet-9"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            ></NavLink>
          </ul>
        </li>

        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
