import React from "react";
import { NavLink } from "react-router-dom";
import NavListXt from "./Navgation";
import { HeaderStyledWrap } from "../styles/AllStyles";
const Header = () => {
  return (
    <HeaderStyledWrap>
      <div className="site">
        <NavLink to="/">
          <img
            className="logo"
            src="./images/logo-png.png"
            alt="Race Motor"
          />
        </NavLink>
        <NavListXt />
      </div>
    </HeaderStyledWrap>
  );
};
export default Header;
