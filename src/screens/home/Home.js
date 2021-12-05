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
      <div className="containercustom d-flex justify-content-center">
        <div
          className="text-center bg-image w-100"
          style={{
            height: "500px",
          }}
        >
          {/* <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              height: "100%",
              border: "1px solid red",
              margin: "0 auto",
            }}
          > */}
          <div className="h-auto w-50 mx-auto ">
            <h4 className="text-uppercase text-white">Download our App</h4>
            <div className="row gap-1">
              <div className="col-lg">
                <a href="https://apps.apple.com/us/app/quran-qaidah-level-1/id1536581660">
                  <button className="btn btn-dark app-button">
                    <i className="fa fa-apple fa-2x me-3 align-middle"></i>
                    <span className="text-uppercase ml-2 align-middle">
                      Apple store
                    </span>
                  </button>
                </a>
              </div>
              <div className="col-lg">
                <a href="https://play.google.com/store/apps/details?id=air.com.fatima.quranqaidah1">
                  <button className="btn btn-dark app-button">
                    <i className="fa fa-play fa-2x me-3 align-middle"></i>
                    <span className="text-uppercase ml-2 align-middle">
                      Google store
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>

      <Title title="Quick Hadith" marginStyle={0} />

      {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}

      <Title title="Program Schedule" />

      <div className="container d-flex flex-row p-0">
        <div className="wrapper2 w-100 text-center">
          <div className="prayer-time">
            <Title title="Prayer Times" textColor="white" />
            <PrayerSchedule today={today} options={options} />
          </div>
          <div className="upcoming-event">
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
