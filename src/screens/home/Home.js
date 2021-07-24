import React, { useEffect, useState } from "react";
import Loading from "../../component/loading/Loading";
import Title from "../../component/title/Title";

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
      // const resp = await fetch("http://localhost:4000");
      // const resp = await fetch(`${process.env.NODE_ENV}`);
      const resp = await fetch(
        "https://masjid-fatimah-az-zahra.herokuapp.com/"
      );
      // const resp = await fetch();
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
        <div className="title">
          <h1>Masjid Fatimah Az Zahra</h1>
        </div>
      </div>

      <Title title="Quick Hadith" />

      {/* {!hadith ? (
        <Loading />
      ) : (
        <div className="wrapper">
          <div
            className="one"
            dangerouslySetInnerHTML={{
              __html: hadith && hadith?.hadith[0].body,
            }}
          ></div>
          <div
            className="two"
            dangerouslySetInnerHTML={{
              __html: hadith && hadith?.hadith[1].body,
            }}
          ></div>
        </div>
      )} */}

      <Title title="Program Schedule" />

      <div className="wrapper">
        <div className="wrapper2">
          <div className="prayer-time">
            {/* change title styling */}
            <Title title="Prayer Times" />

            <div
              style={{
                border: "1px solid white",
                margin: "30px 30px",
                background: "white",
                padding: "60px 0",
              }}
            >
              <table>
                <tr>
                  <th colSpan="2">
                    <p>{today.toLocaleDateString("en-US", options)}</p>
                  </th>
                </tr>
                <tr>
                  <td style={{ padding: 10 }}>Fajir</td>
                  <td style={{ padding: 10 }}>5:15 am</td>
                </tr>
                <tr>
                  <td style={{ padding: 10 }}>Dhuhr</td>
                  <td style={{ padding: 10 }}>1:15 pm</td>
                </tr>
                <tr>
                  <td style={{ padding: 10 }}>Asr</td>
                  <td style={{ padding: 10 }}>6:00 pm</td>
                </tr>
                <tr>
                  <td style={{ padding: 10 }}>Maghrib</td>
                  <td style={{ padding: 10 }}>sunset</td>
                </tr>
                <tr>
                  <td style={{ padding: 10 }}>Isha'a</td>
                  <td style={{ padding: 10 }}>9:00 pm </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="upcoming-event">
            {/* change title styling */}
            <Title title="Upcoming events" />
            <div
              style={{ border: "1px solid whitesmoke", textAlign: "center" }}
            >
              <span>No current events</span>
            </div>
          </div>
        </div>
      </div>

      <Title title="Our Service" />
      <div className="wrapper3">
        <div className="box green">
          <div className="content">
            <div>
              <p>Five Times Congregational Salaat</p>
            </div>
          </div>
        </div>

        <div className="box pink">
          <div className="content">
            <div>
              <p>Kids Quran, Arabic, Tajweed and Hifz Classes Daily</p>
            </div>
          </div>
        </div>

        <div className="box aqua">
          <div className="content">
            <div>
              <p>Adult Tajweed and Hifz Classes</p>
            </div>
          </div>
        </div>

        <div className="box orange">
          <div className="content">
            <div>
              <p>
                Social Services - Marriage, Birth, Death Bereavement,
                Arbitration
              </p>
            </div>
          </div>
        </div>

        <div className="box purple">
          <div className="content">
            <div>
              <p>Youth Activities</p>
            </div>
          </div>
        </div>

        <div className="box tomato">
          <div className="content">
            <div>
              <p>Dawah Programs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
