import React from "react";

function PrayerSchedule({ today, options }) {
  return (
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
  );
}

export default PrayerSchedule;
