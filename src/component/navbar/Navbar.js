import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../../App.css";

/**
 * @todo need to fix stlying here
 * @returns
 */
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-wrapper">
          <div className="logo-container">
            <div>Masjid Faatimah</div>
          </div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li className="option" onClick={closeMobileMenu}>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Home
              </Link>
            </li>
            <li className="option" onClick={closeMobileMenu}>
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link
        to="https://www.gofundme.com/f/masjidfaatimah2021"
        style={{
          justifyContent: "flex-end",
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 20,
          paddingRight: 20,
          border: "1px solid green",
          textDecoration: "none",
        }}
      >
        Donate!
      </Link>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
