import { Link, useSearchParams } from "react-router-dom";
import styles from "./Profile.module.css";
import { useEffect, useState } from "react";

// Assuming data.json is placed in the public folder
const DATA_URL = "/data.json";

function Profile({ startup }) {
  const [param, setParam] = useSearchParams();
  const name = param.get("name");
  console.log(name);

  const [startupData, setStartupData] = useState(null);

  // Fetch and filter the specific startup based on the name parameter
  useEffect(() => {
    async function fetchStartup() {
      try {
        const res = await fetch(DATA_URL);
        const data = await res.json();
        // Filter only the startup that matches the URL name
        const foundStartup = data.items.find((item) => item.name === name);
        console.log(foundStartup);
        setStartupData(foundStartup || null); // Set the specific startup data or null if not found
      } catch (error) {
        console.error("Error fetching startup:", error);
      }
    }
    fetchStartup();
  }, [name]);

  if (!startup) startup = startupData;

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

export default Profile;
