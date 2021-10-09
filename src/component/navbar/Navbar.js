import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";
import Paypal from "../paypal/Paypal";

const NavbarComponent = () => {
  const [modal, setModal] = useState(false);
  const [amount, setAmount] = useState();
  const [customAmount, setCustomAmount] = useState();

  useEffect(() => {
    if (customAmount !== "" && amount !== "other") {
      setCustomAmount("");
    }
  }, [amount]);

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
            <span className="nav-link">
              <a
                href="https://www.gofundme.com/f/masjidfaatimah2021"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Gofundme
              </a>
            </span>
            <span
              className="nav-link"
              onClick={() => setModal(!modal)}
              style={{ cursor: "pointer" }}
            >
              <span
                style={{
                  border: "1px solid green",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  borderRadius: 25,
                }}
              >
                Donate
              </span>
            </span>
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
          <Row>
            <Col sm style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$25`}
                checked={amount === "25"}
                onChange={(e) => setAmount("25")}
              />
            </Col>
            <Col sm style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$50`}
                checked={amount === "50"}
                onChange={() => setAmount("50")}
              />
            </Col>
            <Col sm style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$100`}
                checked={amount === "100"}
                onChange={() => setAmount("100")}
              />
            </Col>
          </Row>
          <Row>
            <Col sm style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$200`}
                checked={amount === "200"}
                onChange={() => setAmount("200")}
              />
            </Col>
            <Col sm={4} style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$250`}
                checked={amount === "250"}
                onChange={() => setAmount("250")}
              />
            </Col>
            <Col sm={4} style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$500`}
                checked={amount === "500"}
                onChange={() => setAmount("500")}
              />
            </Col>
          </Row>
          <Row>
            <Col sm={4} style={{ padding: 15 }}>
              <Form.Check
                type={"radio"}
                label={`$1000`}
                checked={amount === "1000"}
                onChange={() => setAmount("1000")}
              />
            </Col>
            <Col
              sm={4}
              style={{ padding: 15, display: "flex", flexDirection: "row" }}
            >
              <Form.Check
                type={"radio"}
                label={`Other`}
                checked={amount === "other"}
                onChange={() => setAmount("other")}
              />
              <input
                type="number"
                style={{ marginLeft: 10 }}
                disabled={amount === "other" ? false : true}
                onChange={(e) => setCustomAmount(e.target.value)}
                value={customAmount}
              />
            </Col>
          </Row>
          {/* <Col sm={4} style={{ margin: "auto" }}>
            <Paypal customAmount={customAmount} amount={amount} />
          </Col> */}
          <Paypal customAmount={customAmount} amount={amount} />
        </Container>
      </MyVerticallyCenteredModal>
    </>
  );
};

export default NavbarComponent;
