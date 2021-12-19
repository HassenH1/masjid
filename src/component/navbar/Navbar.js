import React from "react";
import { Link } from "react-router-dom";
import { getRandomCharityQuote } from "../../data/data";

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
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white"
                  href="https://www.gofundme.com/f/masjidfaatimah2021"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GoFundMe
                </a>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_top"
                  >
                    <input
                      type="hidden"
                      name="business"
                      value="BHGM3ZDC7SGCU"
                    />
                    <input type="hidden" name="no_recurring" value="0" />
                    <input
                      type="hidden"
                      name="item_name"
                      value={getRandomCharityQuote()}
                    />
                    <input type="hidden" name="currency_code" value="USD" />
                    <button
                      type="submit"
                      style={{
                        background: "#FFCC00",
                        borderRadius: "25px",
                        paddingLeft: "15px",
                        paddingRight: "15px",
                      }}
                    >
                      Donate
                    </button>
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
