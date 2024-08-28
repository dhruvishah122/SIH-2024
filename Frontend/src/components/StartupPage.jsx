import { useEffect, useState } from "react";
import Startups from "./Startups";
import NavBar from "./NavBar";

const Base_URL = "http://localhost:900/";
function StartupPage() {
  const [startups, setStartups] = useState([]);

  useEffect(function () {
    async function FetchStartups() {
      try {
        const res = await fetch(`${Base_URL}items`);
        const data = await res.json();
        console.log(data);
        setStartups(data);
      } catch {
        alert("There was an error loading data");
      }
    }
    FetchStartups();
  }, []);
  return (
    <div>
      <NavBar />
      {startups.length != 0 && <Startups startups={startups} />}
    </div>
  );
}

export default StartupPage;
