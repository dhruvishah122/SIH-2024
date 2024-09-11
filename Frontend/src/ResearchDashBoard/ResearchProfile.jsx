import { Link, useSearchParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

// Assuming data.json is placed in the public folder
// const DATA_URL = "/data.json";

const startup = {
  name: "Hopscotch",
  email: "hopscotch@gmail.com",
  password: "123",
  technology:
    "Artificial Intelligence (AI), Consumer Apps, Enterprise Apps, AdTech, AgriTech, EdTech, FinTech, HealthTech, RetailTech, GreenTech/CleanTech, LogisticsTech, FoodTech, D2C",
  Industry_Focus:
    "Advertising,Media & EntertainmentTraining,Energy & Utilities,Healthcare & Pharmaceuticals,IT & ITES,Manufacturing,Retail,Telecom,Transportation & Logistics,Travel & Hospitality",
  Startup_eligibility_criteria: "VC Funded startups",
  Startup_Revenue_Preference: 7000000,
  location: "Ahmedabad, Gujarat, IND",
  date: "06-09-2024",
  status: "Registered",
  funds_sanctioned: 0,
  _id: "66db3e1270fc7617f926c888",
  __v: 0,
};

function ResearchProfile() {
  // const [param, setParam] = useSearchParams();
  // const name = param.get("name");
  // console.log(name);

  // const [startupData, setStartupData] = useState(null);

  // Fetch and filter the specific startup based on the name parameter
  // useEffect(() => {
  //   async function fetchStartup() {
  //     try {
  //       const res = await fetch(DATA_URL);
  //       const data = await res.json();
  //       // Filter only the startup that matches the URL name
  //       const foundStartup = data.items.find((item) => item.name === name);
  //       console.log(foundStartup);
  //       setStartupData(foundStartup || null); // Set the specific startup data or null if not found
  //     } catch (error) {
  //       console.error("Error fetching startup:", error);
  //     }
  //   }
  //   fetchStartup();
  // }, [name]);

  // if (!startup) startup = startupData;

  return (
    <>
      {startup && (
        <div className={styles.container}>
          <div className={styles.title}>
            <Link className={styles.title}>
              <div className={styles.website}>{startup.name}</div>
            </Link>
          </div>
          <div className={styles.info}>
            <div>Email :</div> <div>{startup.email}</div>
            <div>Technology :</div> <div>{startup.technology}</div>
            <div>Location :</div> <div>{startup.location}</div>
            <div>Industry Focus :</div> <div> {startup.Industry_Focus}</div>
            <div>Startup Eligibility Criteria :</div>
            <div> {startup.Startup_eligibility_criteria}</div>
            <div>Startup Revenue Preference :</div>
            <div> {startup.Startup_Revenue_Preference}</div>
            <div>Profit Margin :</div>
            <div> 60%</div>
          </div>
        </div>
      )}
    </>
  );
}

export default ResearchProfile;
