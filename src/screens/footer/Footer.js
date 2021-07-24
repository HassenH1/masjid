import React from "react";
import "../../App.css";

function Footer() {
  const url = "https://www.facebook.com/MasjidFaatimahAzZahra/";
  return (
    <div className="footer">
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: "19px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        Masjid Faatimah {"©"} {new Date().getFullYear()}. All Rights Reserved.
      </div>
      <div
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          padding: "19px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <a href={url} className="fa fa-facebook"></a>
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          padding: "19px",
          textAlign: "center",
          margin: "auto",
        }}
      >
        15012 Prairie Ave Suite A, Hawthorne CA, 90250
      </div>
    </div>
  );
}

export default Footer;
