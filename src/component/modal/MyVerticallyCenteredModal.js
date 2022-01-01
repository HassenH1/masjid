import React from "react";
import { Button, Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {props.title && props.title !== "none" ? (
            <Modal.Title id="contained-modal-title-vcenter">
              {props.title}
            </Modal.Title>
          ) : props.title === "none" ? null : (
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          )}
        </Modal.Header>
        <Modal.Body>
          {props.heading && props.heading !== "none" ? (
            props.heading
          ) : props.heading === "none" ? null : (
            <h4>Centered Modal</h4>
          )}
          <div className="row">
            {props.image && (
              <>
                <div className="col-lg-5 border">test</div>
                <div className="col-lg border border-danger">test</div>
              </>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyVerticallyCenteredModal;
