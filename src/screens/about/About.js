import React from "react";
import SheikhWithStudents from "../../assets/sheikhwithstudents.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-content-wrapper">
        <div className="about-img-wrapper">
          <img src={SheikhWithStudents} className="about-img" />
        </div>
        <div className="about-text-wrapper">
          <p className="about-text">
            We are an IRS tax exempt nonprofit Islamic organization that serves
            Muslims of the South Bay and greater Los Angeles metropolitan area,
            providing spiritual, educational and social Islamic services.
          </p>
          <p className="about-text">
            Our goal is to instill the values of being an American-Muslim into
            our patrons and students. We offer several Islamic services
            including daily classes for children with a focus on learning how to
            read and memorize Quran.
          </p>
          <p className="about-text">
            Students also learn the etiquettes of prayer, basic Islamic history,
            and Islamic values. Currently, 130 students attend classes on a
            regular basis.  Our recently launched Hifz memorization class,
            allowed students to assist in leading Taraweeh prayers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
