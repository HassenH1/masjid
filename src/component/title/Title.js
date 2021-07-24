import React from "react";

function Title({ title }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          letterSpacing: 3,
          fontWeight: 50,
          fontSize: 32,
        }}
      >
        <p style={{ marginTop: 32, marginBottom: 0 }}>{title}</p>
      </div>
      <div
        style={{
          width: "20%",
          margin: "auto",
          marginBottom: 32,
        }}
      >
        <hr />
      </div>
    </>
  );
}

export default Title;
