import React from "react";
import { Button, Modal } from "react-bootstrap";

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
          <div className="row">
            {props.details.image ? (
              <>
                <div className="col-lg-5 border">
                  <img
                    src={props.details.image}
                    alt="/./"
                    height={"100%"}
                    width={"100%"}
                  />
                  {/* <iframe
                    className={"jpg"}
                    width="100%"
                    height="600"
                    frameborder="0"
                    src={`https://docs.google.com/gview?url=${file_url}&embedded=true`}
                  ></iframe> */}
                  {/* <iframe className={filetype} width="100%" height="600" frameborder="0" src={`https://docs.google.com/gview?url=${file_url}&embedded=true`}></iframe> */}
                </div>
                <div className="col-lg border border-danger">
                  {props.details.title}
                </div>
              </>
            ) : (
              <div className="col-lg border">{props.details.title}</div>
            )}
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal>
    </>
  );
}

export default MyModal;
