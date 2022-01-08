import React from "react";
import { useData } from "../../context/data-context";
import Title from "../../component/title/Title";

function PrayerSchedule() {
  const { today, options } = useData();
  return (
    <>
      <Title title="Prayer Times" fontSize={22} />
      <div
        // className="px-5 py-4"
        style={{
          background: "#2B59C3",
          // border: "1px solid red",
          padding: "10px 10px",
          height: "72%",
          margin: "auto",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <div className="p-5" style={{ background: "#2B59C3" }}> */}
        <table
          className="h-100 w-100 text-center"
          // className="mx-auto my-auto w-100 text-center"
          style={{ background: "white" }}
        >
          <tbody>
            <tr>
              <th colSpan="2">
                <p>{today.toLocaleDateString("en-US", options)}</p>
              </th>
            </tr>
            <tr className="border-bottom">
              <td style={{ padding: 10 }}>Fajir</td>
              <td style={{ padding: 10 }}>5:15 am</td>
            </tr>
            <tr className="border-bottom">
              <td style={{ padding: 10 }}>Dhuhr</td>
              <td style={{ padding: 10 }}>1:15 pm</td>
            </tr>
            <tr className="border-bottom">
              <td style={{ padding: 10 }}>Asr</td>
              <td style={{ padding: 10 }}>6:00 pm</td>
            </tr>
            <tr className="border-bottom">
              <td style={{ padding: 10 }}>Maghrib</td>
              <td style={{ padding: 10 }}>sunset</td>
            </tr>
            <tr className="border-bottom">
              <td style={{ padding: 10 }}>Isha'a</td>
              <td style={{ padding: 10 }}>9:00 pm </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PrayerSchedule;
