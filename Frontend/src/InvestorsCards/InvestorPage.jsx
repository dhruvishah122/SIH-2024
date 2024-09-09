import { useEffect, useState } from "react";
import Investors from "./Investors";
import NavBar from "../components/NavBar";

const Base_URL = "/investorData.json"; // Change the base URL to the local JSON file path

function StartupPage() {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    async function fetchInvestors() {
      try {
        const res = await fetch(Base_URL);
        const data = await res.json();
        console.log(data);
        setInvestors(data.items1); // Adjust this based on the structure of your JSON
      } catch (err) {
        console.log("There was an error loading data: ", err);
      }
    }
    fetchInvestors();
  }, []);

  return (
    <div>
      <NavBar />
      {investors.length !== 0 && <Investors investors={investors} />}
    </div>
  );
}

export default StartupPage;
