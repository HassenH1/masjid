import React, { useState } from "react";
import Header from "./Header";
import Loading from "../../component/loading/Loading";
import CurrentServices from "./CurrentServices";
import About from "./About";
import DownloadOurApp from "./DownloadOurApp";
import ProgramsAndSchedules from "./ProgramsAndSchedules";
import GoToTop from "./GoToTop";
import QuickHadith from "./QuickHadith";
import { useData } from "../../context/data-context";
import Map from "./Map";

function Home() {
  const { hadith } = useData();

  const [selectedFile, setSelectedFile] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(selectedFile, "<=-=-=-=selectedFile?");
    formData.append("File", selectedFile);
    try {
      const resp = await fetch("http://localhost:4000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await resp.json();
      console.log(JSON.stringify(data, null, 2), "<=-=-=data?");
    } catch (e) {
      throw new Error(`cannot upload image`);
    }
  };

  return (
    <>
      <Header />
      <DownloadOurApp />
      <div className="container" id="home">
        {!hadith ? <Loading /> : <QuickHadith hadith={hadith} />}
        <div>
          {/* <input type="file" name="file" onChange={changeHandler} />
          <div>
            <button onClick={handleSubmission}>Submit</button>
          </div> */}
          <form onSubmit={handleSubmission}>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={changeHandler}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <About />
        <ProgramsAndSchedules />
        <CurrentServices />
        <Map />
      </div>
      <GoToTop />
    </>
  );
}

export default Home;
