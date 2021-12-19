import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [hadith, setHadith] = useState("");
  const [events, setEvents] = useState([
    {
      title: "Daily Quran Classes",
      timeTense: "Recurring event",
      desc: "hello world",
      image: "some image",
    },
  ]);
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const getHadith = async () => {
    try {
      const hadithResponse = await fetch(
        "https://masjid-server.herokuapp.com/"
      );
      const hadithToJSON = await hadithResponse.json();
      hadithToJSON && setHadith(hadithToJSON);
    } catch (e) {
      setHadith(e);
    }
  };

  useEffect(() => {
    getHadith();
  }, []);

  return (
    <DataContext.Provider value={{ hadith, today, options, events, setEvents }}>
      {children}
    </DataContext.Provider>
  );
}

const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
