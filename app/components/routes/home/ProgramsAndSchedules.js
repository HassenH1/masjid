import React from "react";
import Title from "../../component/title/Title";
import PrayerSchedule from "./PrayerSchedule";

function ProgramsAndSchedules() {
  return (
    <div id="programschedule">
      <Title title="Program Schedule" />
      <div className="row">
        <div className="col-lg">
          <PrayerSchedule />
        </div>
      </div>
    </div>
  );
}

export default ProgramsAndSchedules;
