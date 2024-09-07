import { useState } from "react";
import styles from "./Track.module.css";
import TrackingCard from "./TrackingCard";

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

function Track() {
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
          <button type="submit">Submit</button>
        </form>
      </div>
      {showTable && (
        <>
          <Table />
          <TrackingCard />
        </>
      )}
    </div>
  );
}

function Table() {
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
