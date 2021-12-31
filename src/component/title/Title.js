import React from "react";

function Title({ title, textColor, marginStyle, fontSize }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          letterSpacing: 3,
          fontWeight: 250,
          fontSize: fontSize ? fontSize : 32,
        }}
      >
        <p style={{ marginTop: 32, marginBottom: 0, color: textColor }}>
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
    </div>
  );
}

export default Title;
