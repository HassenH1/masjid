import React from "react";

function Title({ title, textColor, marginStyle, fontSize }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 250,
          fontSize: fontSize ? fontSize : 32,
          marginTop: 35,
        }}
      >
        <p style={{ marginBottom: 0, color: textColor }} className="display-6">
          {title}
        </p>
      </div>
      <div
        style={{
          width: "20%",
          margin: "auto",
          marginBottom: marginStyle ? marginStyle : 32,
        }}
      >
        <hr style={{ background: "#D36582" }} />
      </div>
    </>
  );
}

export default Title;
