import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useData } from "../../context/data-context";
import MyModal from "../../component/modal/MyModal";
import useModal from "../../hooks/useModal";
import Title from "../../component/title/Title";

function Events() {
  const { events } = useData();
  const { show, toggle } = useModal();
  const [modalDetails, setModalDetails] = useState("");

  const onPressMoreDetails = (eventIndex) => {
    setModalDetails(events[eventIndex]);
    toggle();
  };

  return (
    <>
      <Title title="Events" fontSize={22} />

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
                          {each.dayOfWeek}
                        </span>
                      </div>
                      <div className="widget-49-meeting-info">
                        <span className="widget-49-pro-title"></span>
                        <span className="widget-49-meeting-time">
                          {each.clock}
                        </span>
                      </div>
                    </div>
                    <div className="widget-49-meeting-action mt-3">
                      <Button
                        variant="primary"
                        onClick={() => onPressMoreDetails(index)}
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
      <MyModal
        title="none"
        heading="none"
        show={show}
        details={modalDetails}
        onHide={toggle}
      ></MyModal>
    </>
  );
}

export default Events;
