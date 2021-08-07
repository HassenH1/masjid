import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="me-3"
    >
      <Navbar.Brand className="ms-3">Masjid Faatimah</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About Us
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Our Services
            </Link>
          </Nav.Link>
          <span className="nav-link">
            <a
              href="https://www.gofundme.com/f/masjidfaatimah2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Donate
            </a>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
