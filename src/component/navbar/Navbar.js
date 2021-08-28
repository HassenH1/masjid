import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";

const NavbarComponent = () => {
  const [modal, setModal] = useState(false);
  const [variableName, setVariableName] = useState("");

  return (
    <>
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
            <span
              className="nav-link"
              onClick={() => setModal(!modal)}
              style={{ cursor: "pointer" }}
            >
              {/* <a
              href="https://www.gofundme.com/f/masjidfaatimah2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
            </a> */}
              <span
                style={{
                  border: "1px solid green",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                Donate
              </span>
            </span>
            {/* <span className="nav-link">
            <a
              href="https://www.gofundme.com/f/masjidfaatimah2021"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Donate
            </a>
          </span> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MyVerticallyCenteredModal
        show={modal}
        onHide={() => setModal(!modal)}
        title={"Donate"}
        heading={"none"}
      >
        <Container fluid className="px-5">
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column",
              margin: "auto",
              width: "60%",
            }}
          >
            <div
              onClick={() => setVariableName("50")}
              style={{
                width: "auto",
                padding: 15,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                border: "1px solid gray",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <input
                type="radio"
                name="variableName"
                value="50"
                checked={variableName === "50"}
                style={{
                  marginRight: 5,
                  flex: 1,
                }}
              />
              <div style={{ flex: 5 }}>
                <label htmlFor="radio-item-2" style={{ fontSize: "1.4rem" }}>
                  $50
                </label>
              </div>
            </div>
            <div
              onClick={() => setVariableName("100")}
              style={{
                width: "auto",
                padding: 15,
                display: "flex",
                flexDirection: "row",
                border: "1px solid gray",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "10px",
              }}
            >
              <input
                type="radio"
                name="variableName"
                value="100"
                checked={variableName === "100"}
                style={{
                  marginRight: 5,
                  flex: 1,
                }}
              />
              <div style={{ flex: 5 }}>
                <label htmlFor="radio-item-2" style={{ fontSize: "1.4rem" }}>
                  $100
                </label>
              </div>
            </div>
          </div> */}
          <Row>
            <Col sm style={{ border: "1px solid red", padding: 15 }}>
              <Form.Check
                type={"radio"}
                id={`default-radio1`}
                label={`default radio1`}
              />
            </Col>
            <Col sm style={{ border: "1px solid red", padding: 15 }}>
              <Form.Check
                type={"radio"}
                id={`default-radio2`}
                label={`default radio2`}
              />
            </Col>
            <Col sm style={{ border: "1px solid red", padding: 15 }}>
              <Form.Check
                type={"radio"}
                id={`default-radio3`}
                label={`default radio3`}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4} style={{ border: "1px solid red", padding: 15 }}>
              <Form.Check
                type={"radio"}
                id={`default-radio4`}
                label={`default radio4`}
              />
            </Col>
            <Col sm={8} style={{ border: "1px solid red", padding: 15 }}>
              sm=8
            </Col>
          </Row>
        </Container>
      </MyVerticallyCenteredModal>
    </>
  );
};

export default NavbarComponent;
