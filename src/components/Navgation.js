import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { NavXtStyled } from "../styles/AllStyles";
import YouTubeEmbedder from "../pages/Aextyt";
const NavListXt = () => {
  const [menuIcon, setMenuIcon] = useState();
  const [showEmbedder, setShowEmbedder] = useState(false);
  const handleClick = () => {
    setShowEmbedder((prev) => !prev); // Toggle visibility
  };
  const [isOpen, setIsOpen] = useState(false);
  const handle2click = () => {
    setIsOpen(false);
    setMenuIcon(false);
  };
  return (
    <NavXtStyled>
      <div
        className={menuIcon ? "darkmodebg" : "jbkbk"}
         onClick={handle2click}
      />
      <div className={menuIcon ? "navbar active" : "navbar"}>
        <ul className="navbar-lists">
          <li>
            <div className="nav-text">
              <NavLink
                to="/"
                className="navbar-link "
                 onClick={handle2click}
              >
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/inventory"
              className="navbar-link "
               onClick={handle2click}
            >
              Inventory
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loan"
              className="navbar-link "
               onClick={handle2click}
            >
              Loan
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visit-us"
              className="navbar-link "
               onClick={handle2click}
            >
              Visit Us
            </NavLink>
          </li>
          <li id="nav-item-5">
            <h3 id="nav-item-5-dropdown01" onClick={() => setIsOpen(!isOpen)}>
              Our Store
            </h3>
            {(isOpen || menuIcon) && (
              <ul className={menuIcon ? "active " : "dropdown-menu"}>
                <li>
                  <NavLink
                    to="/warranty"
                    className="navbar-link "
                    onClick={handle2click}
                  >
                    Warranty
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about-us"
                    className="navbar-link "
                    onClick={handle2click}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="navbar-link "
                    onClick={handle2click}
                  >
                    Contact
                  </NavLink>
                </li>
                <li onClick={handleClick} >
          <h3> Testimonials</h3>
        </li>
              </ul>
            )}
          </li>
        </ul>

        {/* dfvsdf */}
        {showEmbedder && (
        <div className="mt-4">
          <YouTubeEmbedder />
        </div>
      )}
        {/* two button for open and close of menu */}
        <div className="mobile-navbar-btn">
          <div
            id="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setMenuIcon(true)}> 
            <CgMenu
          /></div>
          <CgClose
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setMenuIcon(false)}
          />
        </div>
      </div>
    </NavXtStyled>
  );
};
export default NavListXt;
