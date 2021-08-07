import React from "react";
import "../../App.css";

function Loading() {
  return (
    <div
      className="d-flex justify-content-center align-items-center container"
      style={{ height: "50vh" }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
