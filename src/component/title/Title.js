import React from "react";

function Title({ title, textColor, marginStyle, fontSize }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          letterSpacing: 3,
          fontWeight: 50,
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
        <hr />
      </div>
    </>
  );
}

export default Title;
