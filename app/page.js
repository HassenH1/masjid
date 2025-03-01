import Header from "./components/routes/home/Header";
import DownloadOurApp from "./components/routes/home/DownloadOurApp";
import About from "./components/routes/home/About";
import Map from "./components/routes/home/Map";
import GoToTop from "./components/routes/home/GoToTop";

export default function Page() {
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
