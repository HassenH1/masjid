import React from "react";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

function About() {
  return (
    // <div className="about">
    <div
      style={{ height: "100vh", marginTop: "10px", marginBottom: "10px" }}
      className="d-flex align-items-center"
    >
      <div class="container h-auto">
        <div class="row d-flex align-items-center justify-content-center">
          <div class="col-sm-6">
            <img
              src={SheikhWithStudents}
              class="img-fluid mx-auto my-auto"
              alt="Responsive image"
              // style={{ height: "60%", width: "100%" }}
            />
          </div>
          <div class="col-sm-6">
            <p className="mt-4" style={{ fontSize: "20px" }}>
              We are an IRS tax exempt nonprofit Islamic organization that
              serves Muslims of the South Bay and greater Los Angeles
              metropolitan area, providing spiritual, educational and social
              Islamic services.
            </p>
            <p style={{ fontSize: "20px" }}>
              Our goal is to instill the values of being an American-Muslim into
              our patrons and students. We offer several Islamic services
              including daily classes for children with a focus on learning how
              to read and memorize Quran.
            </p>
          </div>
        </div>
      </div>
    </div>

    // <div className="border border-warning" style={{ height: "100vh" }}>
    //   <div className="container border border-primary h-100">
    //     <div class="mt-5 row border border-primary d-flex justify-content-center align-items-center w-100">
    //       <div class="col col-xs-5 border">One of three columns</div>
    //       <div class="col col-xs-5 border">One of three columns</div>
    //     </div>
    //   </div>
    // </div>

    // <div className="container border border-warning">
    //   <div className="about-content-wrapper">
    //     <div className="about-img-wrapper">
    //       <img src={SheikhWithStudents} className="about-img" />
    //     </div>
    //     <div className="about-text-wrapper">
    //       <p className="about-text">
    //         We are an IRS tax exempt nonprofit Islamic organization that serves
    //         Muslims of the South Bay and greater Los Angeles metropolitan area,
    //         providing spiritual, educational and social Islamic services.
    //       </p>
    //       <p className="about-text">
    //         Our goal is to instill the values of being an American-Muslim into
    //         our patrons and students. We offer several Islamic services
    //         including daily classes for children with a focus on learning how to
    //         read and memorize Quran.
    //       </p>
    //       <p className="about-text">
    //         Students also learn the etiquettes of prayer, basic Islamic history,
    //         and Islamic values. Currently, 130 students attend classes on a
    //         regular basis.  Our recently launched Hifz memorization class,
    //         allowed students to assist in leading Taraweeh prayers.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}

export default About;
