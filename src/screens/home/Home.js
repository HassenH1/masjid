import React, { useState, useEffect } from "react";
import Header from "./Header";
import Loading from "../../component/loading/Loading";
import Title from "../../component/title/Title";
import PrayerSchedule from "./PrayerSchedule";
import Events from "./Events";
import CurrentServices from "./CurrentServices";
import QuickHadith from "./QuickHadith";
import { useData } from "../../context/data-context";
import About from "../about/About";

function Home() {
  const { hadith } = useData();
  const [scrollToTopButtonStyle, setScrollToTopButtonStyle] = useState({
    display: "none",
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: "99",
    fontSize: "18px",
    border: "none",
    outline: "none",
    backgroundColor: "red",
    color: "white",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "4px",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showOrRemoveToTopButton = () => {
    if (window.pageYOffset > 50) {
      setScrollToTopButtonStyle((prev) => {
        return {
          ...prev,
          display: "block",
        };
      });
    } else {
      setScrollToTopButtonStyle((prev) => {
        return {
          ...prev,
          display: "none",
        };
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", showOrRemoveToTopButton, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", showOrRemoveToTopButton);
    };
  }, []);

  return (
    <>
      <Header />

      <div
        className="row text-center"
        style={{
          backgroundColor: "#21080E",
          color: "white",
          width: "100%",
          margin: 0,
          // margintTop: 10,
          padding: "45px",
        }}
      >
        <p className="display-6">Download our App.</p>
        {/* <div className="col-lg">test</div>
        <div className="col-lg">test</div> */}
      </div>
      <div className="container" id="home">
        {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}
        <About />
        <div id="programschedule">
          <Title title="Program Schedule" />
          <div className="row">
            <div className="col-lg">
              <Title title="Prayer Times" fontSize={22} />
              <PrayerSchedule />
            </div>
            <div className="col-lg">
              <Title title="Events" fontSize={22} />
              <Events />
            </div>
          </div>
        </div>
        {/* <Title title="Program Schedule" />
        <div className="row">
          <div className="col-lg">
            <Title title="Prayer Times" fontSize={22} />
            <PrayerSchedule />
          </div>
          <div className="col-lg">
            <Title title="Events" fontSize={22} />
            <Events />
          </div>
        </div> */}
        <CurrentServices />
      </div>

      <button
        onClick={scrollToTop}
        title="Go to top"
        style={scrollToTopButtonStyle}
      >
        Top
      </button>
    </>
  );
}

export default Home;
