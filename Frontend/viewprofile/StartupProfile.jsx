import { useSearchParams } from "react-router-dom";
import styles from "./StartupProfile.module.css";
// import { useStartups } from "../hooks/useStartups";
import Profile from "../src/DashBoard/Profile";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";

const Base_URL = "http://localhost:900/";

function StartupProfile() {
  const [params] = useSearchParams();
  //   const { startups } = useStartups();
  const [startups, setStartups] = useState([]);
  const [startup, setStartup] = useState([]);
  const name = params.get("name");

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

  useEffect(
    function () {
      const id = startups.filter((startup) => startup.name === name)[0]?.id;
      console.log(id);
      if (!id) return;
      async function FetchStartup() {
        try {
          const res = await fetch(`${Base_URL}items/${id}`);
          const data = await res.json();
          console.log(data);
          setStartup(data);
        } catch {
          alert("There was an error loading data");
        }
      }
      FetchStartup();
    },
    [startups]
  );

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
