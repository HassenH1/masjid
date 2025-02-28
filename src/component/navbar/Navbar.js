import React from "react";
import NavItem from "./NavItem";

const NavbarComponent = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#253C78" }}
      >
        <div className="container">
          <a className="navbar-brand text-white" href="/">
            Masjid Faatimah
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavItem text="Home" href="home" />
              <NavItem text="About us" href="aboutus" />
              <NavItem text="Programs" href="programschedule" />
              <NavItem text="Services" href="services" />
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://www.gofundme.com/f/masjidfaatimah2022"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GoFundMe
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  {/* <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_top"
                  >
                    <input
                      type="hidden"
                      name="business"
                      value="94QUZPMJYJCKL"
                    />
                    <input type="hidden" name="no_recurring" value="1" />
                    <input
                      type="hidden"
                      name="item_name"
                      value="Masjid Faatimah Donation "
                    />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                      border="0"
                      name="submit"
                      title="PayPal - The safer, easier way to pay online!"
                      alt="Donate with PayPal button"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form> */}
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_top"
                  >
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="RZH3PLNAANE3C"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                      border="0"
                      name="submit"
                      title="PayPal - The safer, easier way to pay online!"
                      alt="Donate with PayPal button"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;

//generate QR code for masjid!!
