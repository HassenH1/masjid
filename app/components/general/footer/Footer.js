import React from "react";

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
        <a
          href={url}
          style={{
            borderRadius: "50%",
            border: "1px solid gold",
            padding: "8px 15px",
          }}
        >
          {" "}
          <i className="fa fa-facebook" aria-hidden="true"></i>{" "}
        </a>
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
        <br />
        Call: (480) 621-0096
      </div>
    </div>
  );
}

export default Footer;
