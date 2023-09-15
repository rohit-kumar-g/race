import React from "react";
import { Button } from "../styles/AllStyles";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FooterStyledWrap } from "../styles/AllStyles";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <FooterStyledWrap>
        <div className="footer-top site">
          <div className="container">
            <h3> About us</h3>
            <p>
              Your trusted used car dealership for Quality Vehicle and
              Exceptional Service
            </p>
          </div>
          <div id="item2" className="container">
            <h3>Follow Us</h3>
            <div className="footer-social--icons">
              {/* <div>
                <a href="https://www.facebook.com/marketplace/profile/100092029053941/?ref=permalink&mibextid=6ojiHh">
                  <FaTwitter className="icons" />
                </a>
              </div> */}
              
              <div>
                <a href="https://www.facebook.com/marketplace/profile/100092029053941/?ref=permalink&mibextid=6ojiHh">
                  <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/racemotors">
                <FaInstagram className="icons" />
                </a>
              </div>
            </div>
            <h3>Call Us</h3>
            <Button>
              <a href="tel:+12813729238">281-372-9238</a>
            </Button>
          </div>
          {/* <div className="container">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input type="email" name="email" placeholder="YOUR E-MAIL" />
              <Button>Subscribe</Button>
            </form>
          </div> */}
        </div>
        <div>
          <hr />
          <div className="footer-bottom site">
            <p>@{new Date().getFullYear()} Race Motors. All Rights Reserved</p>
            <p className="xtsmall">
              <NavLink to="/contact"> Privacy Policy </NavLink>
              <span> | </span>
              <NavLink to="/contact"> Terms of use </NavLink>
            </p>
          </div>
        </div>
      </FooterStyledWrap>
    </>
  );
};
export default Footer;
