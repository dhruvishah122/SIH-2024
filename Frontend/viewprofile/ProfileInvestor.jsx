import styles from "./ProfileInvestor.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../src/components/NavBar";
import InvestorProfile from "../src/InvestorDashBoard/InvestorProfile";
import InvestorNavBar from "../src/NavBars/InvestorNavBar";

const Base_URL = "/investorData.json"; // Change the base URL to the local JSON file path

function ProfileInvestor() {
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
        setStartups(data.items1); // Adjust this based on the structure of your JSON
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
      <InvestorNavBar />
      <div className={styles.container}>
        <InvestorProfile startup={startup} />
      </div>
    </div>
  );
}

export default ProfileInvestor;
