import React from "react";
import Title from "../../component/title/Title";
import MasjidLocation from "../../assets/masjidfaatimahmap.png";

function Map() {
  return (
    <>
      <Title title={"Location"} />
      <div>
        <img
          src={MasjidLocation}
          className="img-fluid rounded-3"
          style={{ boxShadow: "-4px -3px 45px 21px rgba(0,0,0,0.2)" }}
          alt="..."
        />
      </div>
    </>
  );
}

export default Map;
