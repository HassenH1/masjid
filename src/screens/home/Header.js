import React from "react";
import FRONTOFMASJID from "../../assets/masjidfront (2).jpg";

function Header() {
  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={FRONTOFMASJID} className="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Header;
