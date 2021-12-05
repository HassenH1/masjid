import React from "react";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

function About() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg">
            <img
              src={SheikhWithStudents}
              className="img-fluid"
              alt="Responsive"
            />
          </div>
          <div className="col-lg p-5">
            <p className="">
              We are an IRS tax exempt nonprofit Islamic organization that
              serves Muslims of the South Bay and greater Los Angeles
              metropolitan area, providing spiritual, educational and social
              Islamic services.
            </p>
            <p>
              Our goal is to instill the values of being an American-Muslim into
              our patrons and students. We offer several Islamic services
              including daily classes for children with a focus on learning how
              to read and memorize Quran.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
