import React from "react";

function Events({ today, options }) {
  const events = [
    { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "upcoming" },
    // { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "past" },
    // { name: "test", timeTense: "past" },
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
          <div
            key={index}
            style={{
              height: 140,
              border: "3px solid whitesmoke",
              margin: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  flexDirection: "column",
                }}
              >
                <span>Hello world</span>
                <span>{each.timeTense} event</span>
              </div>
              <span style={{ flex: 4 }}>Hello world</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Events;
