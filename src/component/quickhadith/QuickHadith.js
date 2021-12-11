import React from "react";
import Title from "../../component/title/Title";

function QuickHadith({ hadith }) {
  return (
    <>
      <Title title="Quick Hadith" />

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
