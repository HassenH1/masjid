import React from "react";

function QuickHadith({ hadith }) {
  return (
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
  );
}

export default QuickHadith;
