import React, { createContext, useContext, useState } from "react";
import Madrash from "./../assets/madrash.png";

const DataContext = createContext();

function DataProvider({ children }) {
  const [events, setEvents] = useState([
    {
      title: "Taraweeh Prayer",
      timeTense: "Every night",
      clock: "starts at 8:30pm",
    },
    {
      title: "Kids Daily Quran Classes",
      timeTense: "Currently on Spring Break",
      image: Madrash,
      clock: "4:00pm to 6:00pm o'clock",
      dayOfWeek: "Monday thru Thursday",
    },
  ]);
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <DataContext.Provider value={{ today, options, events, setEvents }}>
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
