import React, { useEffect, useState } from "react";
import Loading from "../../component/loading/Loading";
import Title from "../../component/title/Title";
import PrayerSchedule from "../../component/prayerschedule/PrayerSchedule";
import Events from "../../component/events/Events";
import Services from "../../component/services/Services";
import QuickHadith from "../../component/quickhadith/QuickHadith";

function Home() {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [hadith, setHadith] = useState("");

  const fetchData = async () => {
    try {
      const resp = await fetch("https://masjid-server.herokuapp.com/");
      const data = await resp.json();
      data && setHadith(data);
    } catch (e) {
      setHadith(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="title"></div>
      </div>

      <Title title="Quick Hadith" marginStyle={0} />

      {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}

      <Title title="Program Schedule" />

      <div className="wrapper">
        <div className="wrapper2">
          <div className="prayer-time">
            {/* change title styling */}
            <Title title="Prayer Times" textColor="white" />
            <PrayerSchedule today={today} options={options} />
          </div>
          <div className="upcoming-event">
            {/* change title styling */}
            <Title title="Events" fontSize={22} />
            <Events today={today} options={options} />
          </div>
        </div>
      </div>

      <Title title="Our Service" />
      <Services />
    </div>
  );
}

export default Home;
