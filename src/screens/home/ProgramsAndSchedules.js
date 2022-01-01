import React from "react";
import Title from "../../component/title/Title";
import PrayerSchedule from "./PrayerSchedule";
import Events from "./Events";

function ProgramsAndSchedules() {
  return (
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
  );
}

export default ProgramsAndSchedules;
