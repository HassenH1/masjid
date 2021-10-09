import React from "react";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

function About() {
  return (
    <div
      style={{ height: "100vh", marginTop: "10px", marginBottom: "10px" }}
      className="d-flex align-items-center"
    >
      <div className="container h-auto">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-sm-6">
            <img
              src={SheikhWithStudents}
              className="img-fluid mx-auto my-auto"
              alt="Responsive"
            />
          </div>
          <div className="col-sm-6">
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
  );
}

export default About;
