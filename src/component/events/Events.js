import React from "react";

function Events({ today, options }) {
  const events = [
    {
      title: "Daily Quran Classes",
      timeTense: "Recurring event",
      desc: "hello world",
    },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "past" },
    // { title: "test", timeTense: "past" },
    // { title: "test", timeTense: "past" },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "upcoming" },
    // { title: "test", timeTense: "past" },
    // { title: "test", timeTense: "past" },
    // { title: "test", timeTense: "past" },
  ];

  return (
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
          <div class="col-lg-4 w-100">
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
                        {"Monday thur Thursday"}
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
                  {/* <div class="widget-49-meeting-action">
                    <a href="#" class="btn btn-sm btn-flash-border-warning">
                      View All
                    </a>
                  </div> */}
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
  );
}

export default Events;
