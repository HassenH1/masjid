import React from "react";
import "../../App.css";

function Loading() {
  return (
    <div
      style={{
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loading"></div>
    </div>
  );
}

export default Loading;
