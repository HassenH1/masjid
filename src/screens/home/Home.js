import React, { useEffect, useRef, useState, useCallback } from "react";
import Header from "./Header";
import CurrentServices from "./CurrentServices";
import About from "./About";
import DownloadOurApp from "./DownloadOurApp";
import ProgramsAndSchedules from "./ProgramsAndSchedules";
import GoToTop from "./GoToTop";
import Map from "./Map";
import useModal from "../../hooks/useModal";
import { Modal } from "react-bootstrap";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 999,
};

function getAnimationSettings(originXA, originXB) {
  return {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 999,
    particleCount: 150,
    origin: {
      x: randomInRange(originXA, originXB),
      y: Math.random() - 0.2,
    },
  };
}

function Home() {
  const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();
  const { show, toggle } = useModal(true);

  useEffect(() => {
    checkSessionStorage();
  }, []);

  useEffect(() => {
    if (show) startAnimation();
  }, [show]);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const startAnimation = useCallback(() => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 1500));
    }
  }, [intervalId]);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);

  const checkSessionStorage = () => {
    const modalOpenedBefore = window.sessionStorage.getItem("test");
    if (modalOpenedBefore) return;
    toggle();
    window.sessionStorage.setItem("test", "opened before");
  };

  return (
    <>
      <Header />
      <DownloadOurApp />
      <div className="container" id="home">
        <About />
        <ProgramsAndSchedules />
        <CurrentServices />
        <Map />
      </div>
      <GoToTop />
      <>
        {show && (
          <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
        )}
        <Modal
          show={show}
          onHide={toggle}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          backdrop={false}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body className="col-lg">
            <img
              src="https://images.pexels.com/photos/7957121/pexels-photo-7957121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={"100%"}
              height={"100%"}
              alt="ramadan"
            />
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}

export default Home;
