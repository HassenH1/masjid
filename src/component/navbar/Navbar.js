import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#3f467c" }}
      >
        <div className="container-fluid">
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
            <ul className="navbar-nav">
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
                <span
                  className="nav-link"
                  onClick={() => setModal(!modal)}
                  style={{ cursor: "pointer" }}
                >
                  <span className="text-white">Donate</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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
          <Paypal customAmount={customAmount} amount={amount} />
        </Container>
      </MyVerticallyCenteredModal>
    </>
  );
};

export default NavbarComponent;
