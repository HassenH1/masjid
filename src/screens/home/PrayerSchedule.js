import React from "react";
import { useData } from "../../context/data-context";

function PrayerSchedule() {
  const { today, options } = useData();
  return (
    <div className="p-5" style={{ background: "#2B59C3" }}>
      <table
        className="mx-auto my-5 p-5 w-100 text-center"
        style={{ background: "white" }}
      >
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
      </table>
    </div>
  );
}

export default PrayerSchedule;
