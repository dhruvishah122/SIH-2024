// const data = {
//   name: "Hopscotch",
//   email: "hopscotch@gmail.com",
//   password: "123",
//   technology:
//     "Artificial Intelligence (AI), Consumer Apps, Enterprise Apps, AdTech, AgriTech, EdTech, FinTech, HealthTech, RetailTech, GreenTech/CleanTech, LogisticsTech, FoodTech, D2C",
//   Industry_Focus:
//     "Advertising,Media & EntertainmentTraining,Energy & Utilities,Healthcare & Pharmaceuticals,IT & ITES,Manufacturing,Retail,Telecom,Transportation & Logistics,Travel & Hospitality",
//   Startup_eligibility_criteria: "VC Funded startups",
//   Startup_Revenue_Preference: 7000000,
//   location: "Ahmedabad, Gujarat, IND",
//   date: "06-09-2024",
//   status: "Registered",
//   funds_sanctioned: 0,
//   _id: "66db3e1270fc7617f926c888",
//   __v: 0,
// };

import { Link, useSearchParams } from "react-router-dom";
import styles from "./InvestorProfile.module.css";
import { useEffect, useState } from "react";

const Base_URL = "http://localhost:800/";

function InvestorProfile({ startup }) {
  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  // console.log(email);

  const [startups, setStartups] = useState([]);
  const [startuplogin, setStartupLogin] = useState([]);

  useEffect(function () {
    async function FetchStartups() {
      try {
        const res = await fetch(`${Base_URL}items1`);
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
          const res = await fetch(`${Base_URL}items1/${id}`);
          const data = await res.json();
          console.log(data);
          setStartupLogin(data);
        } catch {
          alert("There was an error loading data");
        }
      }
      FetchStartup();
    },
    [startups]
  );
  if (!startup) startup = startuplogin;
  return (
    <>
      {startup.name && (
        <div className={styles.container}>
          <div className={styles.title}>
            <div>{startup.name}</div>
            <Link className={styles.title}>
              <div className={styles.website}>View Our Website</div>
            </Link>
          </div>
          <div className={styles.info}>
          <div>Name :</div> <div>{startup.name}</div>
            <div>Email :</div> <div>{startup.email}</div>
            <div>Technology :</div> <div>{startup.technology}</div>
            <div>Investor Type :</div> <div> {startup.Investor_Type}</div>
            <div>Year of establishment:</div>
            <div> 2005 </div>
            <div>Employee_count :</div>
            <div> {startup.Employee_count}</div>
            <div>headquaters :</div>
            <div> {startup.headquaters}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default InvestorProfile;
