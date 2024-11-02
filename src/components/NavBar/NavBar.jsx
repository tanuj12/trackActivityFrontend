import React from "react";
import "./index.scss";
import { Link, useLocation } from "react-router-dom";
export const NavBar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-1 " align="center">
            <Link
              className={
                "navItem " + (location.pathname === "/" ? "active-nav" : "")
              }
              to="/"
            >
              Home
            </Link>
          </div>
          <div className="col-sm-1 " align="center">
            <Link
              className={
                "navItem " +
                (location.pathname === "/login" ? "active-nav" : "")
              }
              to="/login"
            >
              Login
            </Link>
          </div>
          <div className="col-10 align-items-center"></div>
        </div>
      </div>
    </nav>
  );
};
