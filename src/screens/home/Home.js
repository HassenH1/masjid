import React, { useEffect, useState } from "react";

import Header from "./Header";
import Loading from "../../component/loading/Loading";
import Title from "../../component/title/Title";
import PrayerSchedule from "../../component/prayerschedule/PrayerSchedule";
import Events from "../../component/events/Events";
import Services from "../../component/services/Services";
import QuickHadith from "../../component/quickhadith/QuickHadith";

import { getHadith } from "../../actions/actions";

function Home() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [hadith, setHadith] = useState("");

  console.log(getHadith(), "<==-=-does this ever come back?");

  // const fetchData = async () => {
  //   try {
  //     const resp = await fetch("https://masjid-server.herokuapp.com/");
  //     const data = await resp.json();
  //     data && setHadith(data);
  //   } catch (e) {
  //     setHadith(e);
  //   }
  // };

  // useEffect(() => {
  //   getHadith().then((res) => setHadith(res));
  // }, []);

  return (
    <>
      <Header />

      <div className="container">
        {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}

        <Title title="Program Schedule" />

        <div className="row">
          <div className="col-lg">
            <Title title="Prayer Times" fontSize={22} />
            <PrayerSchedule today={today} options={options} />
          </div>
          <div className="col-lg">
            <Title title="Events" fontSize={22} />
            <Events today={today} options={options} />
          </div>
        </div>

        <Services />
      </div>
    </>
  );
}

export default Home;
