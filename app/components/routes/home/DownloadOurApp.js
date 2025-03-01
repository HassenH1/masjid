import React from "react";

function DownloadOurApp() {
  return (
    <div
      className="row text-center gap-4 w-100 m-0 p-5"
      style={{
        backgroundColor: "#21080E",
        color: "white",
      }}
    >
      <p className="display-6">Download our App.</p>
      <div className="col-lg">
        <a
          href="https://apps.apple.com/tr/app/quran-qaidah-level-1/id1536581660"
          style={{
            borderRadius: "13px",
            width: "250px",
            height: "53px",
          }}
          className="d-inline-block overflow-hidden"
        >
          <img
            src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1250467200&h=d4c88f091ec0f6af1feeb784ed7adc94"
            alt="Download on the App Store"
            style={{ borderRadius: "13px", width: "250px", height: "53px" }}
          />
        </a>
      </div>
      <div className="col-lg">
        <a
          href="https://play.google.com/store/apps/details?id=air.com.fatima.quranqaidah1"
          style={{
            borderRadius: "13px",
            width: "250px",
            height: "70px",
          }}
          className="d-inline-block overflow-hidden"
        >
          <img
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            style={{ borderRadius: "13px", width: "210px", height: "78px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default DownloadOurApp;
