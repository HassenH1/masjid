import React from "react";
import FRONTOFMASJID from "../../assets/masjidfront (2).jpg";

// return <img src={FRONT} className="d-block w-100" alt="..." />;
function Header() {
  const styles = {
    backgroundImage: `url('${FRONTOFMASJID}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "20%",
    paddingBottom: "20%",
    paddingRight: "10%",
    paddingLeft: "10%",
  };
  return (
    // <div class="jumbotron text-white jumbotron-image shadow" style={styles}>
    //   <div
    //     className="container"
    //     style={{
    //       height: "100%",
    //       width: "100%",
    //       backgroundColor: "rgba(0, 0, 0, 0.5)",
    //       margin: "auto",
    //     }}
    //   >
    //     <h2 class="mb-4">Download Our App.</h2>

    //     <p class="mb-4">Hey, check this out.</p>

    //     <a class="btn btn-primary">Click!</a>
    //   </div>
    // </div>
    <div class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={FRONTOFMASJID} class="d-block w-100" alt="..." />
        </div>
      </div>
    </div>
    // <div
    //   class="jumbotron text-center"
    //   style={{
    //     backgroundImage: `url('${FRONTOFMASJID}')`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     color: "#fff",
    //     padding: "100px 25px",
    //     fontFamily: "Montserrat, sans-serif",
    //   }}
    // >
    //   <h1>Company</h1>
    //   <p>We specialize in blablabla</p>
    // </div>
  );
}

export default Header;
