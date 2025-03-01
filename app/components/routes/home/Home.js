import React from "react";
import Header from "./Header";
import CurrentServices from "./CurrentServices";
import About from "./About";
import DownloadOurApp from "./DownloadOurApp";
import ProgramsAndSchedules from "./ProgramsAndSchedules";
import GoToTop from "./GoToTop";
import Map from "./Map";

function Home() {
  return (
    <>
      <Header />
      <DownloadOurApp />
      <div className="container" id="home">
        <About />
        {/* <ProgramsAndSchedules /> */}
        {/* <CurrentServices /> */}
        <Map />
      </div>
      <GoToTop />
    </>
  );
}

export default Home;
