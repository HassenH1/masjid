import React from "react";
import Title from "../../component/title/Title";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

function About() {
  return (
    <div id="aboutus" className="mt-5">
      <Title title="About Us" />
      <div className="">
        <div className="row gap-2">
          <div className="col-lg">
            <img
              src={SheikhWithStudents}
              className="img-fluid"
              alt="Responsive"
            />
          </div>
          <div
            className="col-lg d-flex align-items-center justify-content-center flex-column"
            style={{ border: "3px solid #D36582" }}
          >
            {/* <div className="col-lg p-5 border center-block text-center"> */}
            <p>
              Our goal is to instill the values of being an American-Muslim into
              our patrons and students. We offer several Islamic services
              including daily classes for children with a focus on learning how
              to read and memorize Quran.
            </p>
            <p>
              We are an IRS tax exempt nonprofit Islamic organization that
              serves Muslims of the South Bay and greater Los Angeles
              metropolitan area, providing spiritual, educational and social
              Islamic services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
