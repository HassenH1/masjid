import React from "react";
import Header from "./Header";
import Loading from "../../component/loading/Loading";
import Title from "../../component/title/Title";
import PrayerSchedule from "./PrayerSchedule";
import Events from "./Events";
import Services from "../services/Services";
import QuickHadith from "./QuickHadith";
import { useData } from "../../context/data-context";

function Home() {
  const { hadith } = useData();

  return (
    <>
      <Header />

      <div className="container">
        {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}

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

        <Services />
      </div>
    </>
  );
}

export default Home;
