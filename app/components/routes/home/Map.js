import React from "react";
import Title from "../../general/title/Title";

function Map() {
  return (
    <>
      <Title title={"Location"} />
      <div>
        <img
          src="./masjidfaatimahmap.png"
          // src={MasjidLocation}
          className="img-fluid rounded-3"
          style={{ boxShadow: "-3px -3px 15px 1px rgba(0,0,0,0.2)" }}
          alt="..."
        />
      </div>
    </>
  );
}

export default Map;
