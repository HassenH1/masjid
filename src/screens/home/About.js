import React from "react";
import Title from "../../component/title/Title";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

//TODO: Modularized the borders into a component

function About() {
  return (
    <div id="aboutus" className="mt-5">
      <Title title="About Us" />
      <div>
        <div className="row gap-2">
          <div className="col-lg">
            <img
              src={SheikhWithStudents}
              className="img-fluid"
              alt="Responsive"
            />
          </div>
          <div className="col-lg d-flex align-items-center justify-content-center">
            <div className="h-100 w-100 position-relative">
              <div
                className="position-absolute"
                style={{
                  border: "3px solid #D36582",
                  top: "70%",
                  bottom: "0",
                }}
              />
              <div
                className="position-absolute"
                style={{
                  border: "3px solid #D36582",
                  right: "10%",
                  left: "0",
                  bottom: "0",
                }}
              />
              <div
                className="position-absolute"
                style={{
                  border: "3px solid #D36582",
                  top: "0",
                  bottom: "70%",
                  right: "0",
                }}
              />
              <div
                className="position-absolute"
                style={{
                  border: "3px solid #D36582",
                  top: "0",
                  left: "10%",
                  right: "0",
                }}
              />
              <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100 p-5">
                <p>
                  We are an IRS tax exempt nonprofit Islamic organization that
                  serves Muslims of the South Bay and greater Los Angeles
                  metropolitan area, providing spiritual, educational and social
                  Islamic services.
                </p>
                <p>
                  Our goal is to instill the values of being an American-Muslim
                  into our patrons and students. We offer several Islamic
                  services including daily classes for children with a focus on
                  learning how to read and memorize Quran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
