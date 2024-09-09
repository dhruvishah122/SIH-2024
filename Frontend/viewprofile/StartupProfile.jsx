import { useSearchParams } from "react-router-dom";
import styles from "./StartupProfile.module.css";
import Profile from "../src/DashBoard/Profile";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";

const Base_URL = "/data.json"; // Change the base URL to the local JSON file path

function StartupProfile() {
  const [params] = useSearchParams();
  const [startups, setStartups] = useState([]);
  const [startup, setStartup] = useState([]);
  const name = params.get("name");

  useEffect(() => {
    async function fetchStartups() {
      try {
        const res = await fetch(Base_URL);
        const data = await res.json();
        console.log(data);
        setStartups(data.items); // Adjust this based on the structure of your JSON
      } catch {
        alert("There was an error loading data");
      }
    }
    fetchStartups();
  }, []);

  useEffect(() => {
    const selectedStartup = startups.find((startup) => startup.name === name);
    if (!selectedStartup) return;
    setStartup(selectedStartup);
  }, [startups, name]);

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <Profile startup={startup} />
      </div>
    </div>
  );
}

export default StartupProfile;
