import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Events({ today, options }) {
  const [modalShow, setModalShow] = useState(false);
  const events = [
    {
      title: "Daily Quran Classes",
      timeTense: "Recurring event",
      desc: "hello world",
      image: "some image",
    },
  ];

  return (
    <>
      <div
        style={{
          border: "1px solid whitesmoke",
          textAlign: "center",
          overflowY: "auto",
          height: "440px",
          scrollbarWidth: "thin",
        }}
      >
        {events.map((each, index) => {
          return (
            <div class="col-lg-4 w-100" key={index}>
              <div class="card card-margin">
                <div class="card-header no-border">
                  <h5 class="card-title">{each.title}</h5>
                </div>
                <div class="card-body pt-0">
                  <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                      <div class="widget-49-date-warning">
                        <span class="widget-49-date-day">{each.timeTense}</span>
                        <br />
                        <span class="widget-49-date-month">
                          {"Monday thru Thursday"}
                        </span>
                        {/* <span class="widget-49-date-day">13</span>
                      <span class="widget-49-date-month">apr</span> */}
                      </div>
                      <div class="widget-49-meeting-info">
                        <span class="widget-49-pro-title"></span>
                        <span class="widget-49-meeting-time">
                          4:00 to 6:00 o'clock
                        </span>
                      </div>
                    </div>
                    {/* <ol
                    class="widget-49-meeting-points"
                    style={{ listStyleType: "none" }}
                  >
                    <li class="widget-49-meeting-item">
                      <span>Scheming module is removed</span>
                    </li>
                    <li class="widget-49-meeting-item">
                      <span>App design contract confirmed</span>
                    </li>
                    <li class="widget-49-meeting-item">
                      <span>Client request to send invoice</span>
                    </li>
                  </ol> */}
                    <div className="widget-49-meeting-action mt-3">
                      {/* <button
                        type="button"
                        className="btn btn-info btn-sm text-white"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        More details...
                      </button> */}
                      <Button
                        variant="primary"
                        onClick={() => setModalShow(true)}
                      >
                        More details...
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <div
            //   key={index}
            //   style={{
            //     height: 140,
            //     border: "3px solid whitesmoke",
            //     margin: 10,
            //   }}
            // >
            //   <div
            //     style={{
            //       display: "flex",
            //       flexDirection: "row",
            //       justifyContent: "space-around",
            //       height: "100%",
            //     }}
            //   >
            //     <div
            //       style={{
            //         flex: 1,
            //         display: "flex",
            //         justifyContent: "center",
            //         alignItems: "center",
            //         textAlign: "center",
            //         flexDirection: "column",
            //       }}
            //     >
            //       <span>Hello world</span>
            //       <span>{each.timeTense} event</span>
            //     </div>
            //     <div
            //       style={{
            //         flex: 4,
            //         border: "1px solid red",
            //         justifyContent: "space-around",
            //       }}
            //     >
            //       <div style={{ border: "1px solid pink" }}>
            //         <span>{each.title}</span>
            //       </div>
            //       <div style={{ border: "1px solid green" }}>
            //         <p>{each.desc}</p>
            //         <p>{each.desc}</p>
            //       </div>
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Events;

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
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
