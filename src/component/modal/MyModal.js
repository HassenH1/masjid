import React from "react";
import { Modal } from "react-bootstrap";

function MyModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {props.details.image ? (
            <>
              <div className="col-lg-5">
                <img
                  src={props.details.image}
                  alt="/./"
                  height={"100%"}
                  width={"100%"}
                  style={{
                    display: "block",
                    maxWidth: "500px",
                    maxHeight: "500px",
                    height: "auto",
                  }}
                />
              </div>
              <div className="col-lg">
                <p class="fs-2">{props.details.title}</p>
                <p>{props.details.desc}</p>
              </div>
            </>
          ) : (
            <div className="col-lg">
              <p class="fs-2 text-center">{props.details.title}</p>
              <p>{props.details.desc}</p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
