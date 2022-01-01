import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MyVerticallyCenteredModal from "../../component/modal/MyVerticallyCenteredModal";
import { useData } from "../../context/data-context";

function Events() {
  const { events } = useData();
  const [modal, setModal] = useState({
    modal: false,
    details: null,
  });

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
            <div className="col-lg-4 w-100 mb-4" key={index}>
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
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title"></span>
                        <span className="widget-49-meeting-time">
                          4:00 to 6:00 o'clock
                        </span>
                      </div>
                    </div>
                    <div className="widget-49-meeting-action mt-3">
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
          );
        })}
      </div>
      <MyVerticallyCenteredModal
        title="none"
        heading="none"
        show={modal.modal}
        details={modal.details}
        onHide={() =>
          setModal({
            details: null,
            modal: false,
          })
        }
      ></MyVerticallyCenteredModal>
    </>
  );
}

export default Events;
