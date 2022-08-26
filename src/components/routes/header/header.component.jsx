import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import "./header.styles.css";

const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <span className="title">ThePokemonDB</span>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Header;
