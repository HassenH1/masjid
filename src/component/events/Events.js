import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal";

function Events({ today, options }) {
  const [modal, setModal] = useState({
    modal: false,
    details: null,
  });
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
          textAlign: "center",
          overflowY: "auto",
          height: "440px",
          scrollbarWidth: "thin",
        }}
      >
        {events.map((each, index) => {
          return (
            <div className="col-lg-4 w-100" key={index}>
              <div className="card card-margin">
                <div className="card-header no-border">
                  <h5 className="card-title">{each.title}</h5>
                </div>
                <div className="card-body pt-0">
                  <div className="widget-49">
                    <div className="widget-49-title-wrapper">
                      <div className="widget-49-date-warning">
                        <span className="widget-49-date-day">
                          {each.timeTense}
                        </span>
                        <br />
                        <span className="widget-49-date-month">
                          {"Monday thru Thursday"}
                        </span>
                        {/* <span className="widget-49-date-day">13</span>
                      <span className="widget-49-date-month">apr</span> */}
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title"></span>
                        <span className="widget-49-meeting-time">
                          4:00 to 6:00 o'clock
                        </span>
                      </div>
                    </div>
                    {/* <ol
                    className="widget-49-meeting-points"
                    style={{ listStyleType: "none" }}
                  >
                    <li className="widget-49-meeting-item">
                      <span>Scheming module is removed</span>
                    </li>
                    <li className="widget-49-meeting-item">
                      <span>App design contract confirmed</span>
                    </li>
                    <li className="widget-49-meeting-item">
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
                        onClick={() =>
                          setModal({
                            modal: true,
                            details: each,
                          })
                        }
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
        show={modal.modal}
        details={modal.details}
        onHide={() =>
          setModal({
            details: null,
            modal: false,
          })
        }
      />
    </>
  );
}

export default Events;
