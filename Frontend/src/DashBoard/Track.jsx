import { useEffect, useState } from "react";
import styles from "./Track.module.css";
import TrackingCard from "./TrackingCard";
import { useSearchParams } from "react-router-dom";

// const startup = {
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
const Base_URL = "http://localhost:600/";
function Track() {
  const [startups, setStartups] = useState([]);
  const [startup, setStartup] = useState([]);

  const [param, setParm] = useSearchParams();
  const name = param.get("name");
  console.log(name);

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
  const [showTable, setShowTable] = useState(false);
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (query === startup._id) setShowTable(true);
    else setShowTable(false);
    setQuery("");
  }

  return (
    <div className={styles["main-container"]}>
      <div className={styles.title}>Track Application Status</div>
      <div className={styles.validation}>
        <label className={styles.label}>Enter application id</label>
        <form onSubmit={handleSubmit}>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button className={styles.button} type="submit">
            Submit
          </button>
        </form>
      </div>
      {showTable && (
        <>
          <Table startup={startup}/>
          <TrackingCard startup={startup}/>
        </>
      )}
    </div>
  );
}

function Table({startup}) {
  return (
    <table className={styles.table}>
      <tr>
        <th>Application Id</th>
        <th>Date</th>
        <th>Location</th>
        <th>Status</th>
        <th>Funds Sanctioned</th>
      </tr>
      <tr>
        <td>{startup._id}</td>
        <td>{startup.date}</td>
        <td>{startup.location}</td>
        <td>{startup.status}</td>
        <td>{startup.funds_sanctioned}</td>
      </tr>
    </table>
  );
}

export default Track;
