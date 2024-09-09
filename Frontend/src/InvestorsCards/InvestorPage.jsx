import { useEffect, useState } from "react";
import Investors from "./Investors";
import NavBar from "../components/NavBar";

const Base_URL = "http://localhost:800/";
function StartupPage() {
  const [investors, setInvestors] = useState([]);

  useEffect(function () {
    async function FetchInvestors() {
      try {
        const res = await fetch(`${Base_URL}items1`);
        const data = await res.json();
        console.log(data);
        setInvestors(data);
      } catch {
        console.log("There was an error loading data");
      }
    }
    FetchInvestors();
  }, []);
  return (
    <div>
      <NavBar />
      {investors.length != 0 && <Investors investors={investors} />}
    </div>
  );
}

export default StartupPage;
