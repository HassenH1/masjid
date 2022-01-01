import React from "react";
import Header from "./Header";
import Loading from "../../component/loading/Loading";
import CurrentServices from "./CurrentServices";
import About from "../about/About";
import DownloadOurApp from "./DownloadOurApp";
import ProgramsAndSchedules from "./ProgramsAndSchedules";
import GoToTop from "./GoToTop";
import QuickHadith from "./QuickHadith";
import { useData } from "../../context/data-context";

function Home() {
  const { hadith } = useData();

  return (
    <>
      <Header />
      <DownloadOurApp />
      <div className="container" id="home">
        {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}
        <About />
        <ProgramsAndSchedules />
        <CurrentServices />
      </div>
      <GoToTop />
    </>
  );
}

export default Home;
