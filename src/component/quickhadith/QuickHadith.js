import React from "react";

function QuickHadith({ hadith }) {
  return (
    <>
      <div
        className="col-lg"
        dangerouslySetInnerHTML={{
          __html: hadith && hadith?.hadith[0].body,
        }}
      ></div>
      <div
        className="col-lg"
        dangerouslySetInnerHTML={{
          __html: hadith && hadith?.hadith[1].body,
        }}
      ></div>
    </>
  );
}

export default QuickHadith;
