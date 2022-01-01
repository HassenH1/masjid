import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
  const [hadith, setHadith] = useState("");
  const [events, setEvents] = useState([
    {
      title: "Daily Quran Classes",
      timeTense: "Recurring event",
      desc: "hello world",
      image:
        "https://images.unsplash.com/photo-1607296393394-6e25d0fc15cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2618&q=80",
    },
    {
      title: "Testing another one",
      timeTense: "test event",
      desc: "hello world",
      image: "some image",
    },
    {
      title: "Testing another two",
      timeTense: "test event",
      desc: "hello world",
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
