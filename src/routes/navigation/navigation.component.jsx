import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import logo from "../../assets/logo.svg";

import "./navigation.styles.css";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <Link to="/">
            <img src={logo} alt="pokemon db logo" className="logo" />
          </Link>
          <ul className="nav-links">
            <li>
              <Link to="/">home</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
