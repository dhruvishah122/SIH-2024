import { Link } from "react-router-dom";
import styles from "../components/Startups.module.css";

const startups = [
  {
    _id: "66db3c1b09acff07fc27f88a",
    name: "Marketing ventures",
    email: "marketing@gmail.com",
    password: "123",
    technology:
      "Artificial Intelligence (AI), Consumer Apps, Enterprise Apps, AdTech, AgriTech, EdTech, FinTech, HealthTech, RetailTech, GreenTech/CleanTech, LogisticsTech, FoodTech, D2C",
    Industry_Focus:
      "Advertising,Media & EntertainmentTraining,Energy & Utilities,Healthcare & Pharmaceuticals,IT & ITES,Manufacturing,Retail,Telecom,Transportation & Logistics,Travel & Hospitality",
    Startup_eligibility_criteria: "VC Funded startups",
    Startup_Revenue_Preference: 7000000,
    location: "Ahmedabad, Gujarat, IND",
    date: "08/09/2024",
    status: "Approved",
    funds_sanctioned: 4500000,
    __v: 0,
  },
  {
    name: "GreenBite Ventures",
    email: "greenbite@gmail.com",
    password: "123",
    technology:
      "Food Science & Biotechnology, Supply Chain Management Software",
    Industry_Focus:
      "Plant-Based Foods, Alternative Proteins, Consumer Packaged Goods (CPG), E-commerce & Direct-to-Consumer (DTC)",
    Startup_eligibility_criteria: "VC Funded startups",
    Startup_Revenue_Preference: 200000,
    location: "Ahmedabad, Gujarat, IND",
    date: "06-09-2024",
    status: "Registered",
    funds_sanctioned: 0,
    _id: "66cf1be76bdad1d47b19ae26",
    __v: 0,
  },
  {
    name: "FinPath solutions",
    email: "finpath@gmail.com",
    password: "123",
    technology:
      "Big Data and Analytics, Cloud Computing, Blockchain and Cryptography",
    Industry_Focus:
      "Personal Finance Management, Digital Banking, Investment Technology (FinTech)",
    Startup_eligibility_criteria: "Gov. Funded startups",
    Startup_Revenue_Preference: 1500000,
    location: "Delhi, INDIA",
    date: "07/09/2024",
    status: "Approved",
    funds_sanctioned: 600,
    _id: "66cf1fde85f4f0202ba2be34",
    __v: 0,
  },
  {
    name: "TechWave solutions",
    email: "techwave@gmail.com",
    password: "123",
    technology:
      "Artificial Intelligence (AI) and Machine Learning (ML), DevOps and CI/CD, Internet of Things (IoT)",
    Industry_Focus:
      "Software as a Service (SaaS), E-commerce Solutions, Real Estate Technology (PropTech)",
    Startup_eligibility_criteria: "Kickstarter",
    Startup_Revenue_Preference: 7000000,
    location: "Bengaluru, INDIA",
    date: "06-09-2024",
    status: "Registered",
    funds_sanctioned: 0,
    _id: "66cf2266846b47216990b079",
    __v: 0,
  },
];

function Startups() {
  return (
    <div
      className={styles["startup-container"]}
      style={{ marginTop: "3rem", marginBottom: "3rem" }}
    >
      <div className={`d-flex flex-wrap  justify-content-center gap-5`}>
        {startups.map((startup) => (
          <Startup startup={startup} key={startup.id} />
        ))}
      </div>
    </div>
  );
}

function Startup({ startup }) {
  const name = {
    fontWeight: "500",
    color: "black",
  };
  const text = { color: "black" };
  let techString;
  if (startup.technology.length > 60) {
    techString = startup["technology"].slice(0, 60);
    techString = techString.concat("...");
  }
  let industryFocusString;
  if (startup["Industry_Focus"].length > 60) {
    industryFocusString = startup["Industry_Focus"].slice(0, 60);
    industryFocusString = techString.concat("...");
  }
  const id = {
    id: startup._id,
  };

  // async function handleClick() {
  //   // Send a POST request to add a new user
  //   try {
  //     const res = await fetch("http://localhost:9000/ids", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(id),
  //     });

  //     const re = await fetch("http://localhost:8080/profile", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(id),
  //     });

  //     const redirectUrl = `http://localhost:8080/startupProfile?name=${encodeURIComponent(
  //       startup.name
  //     )}&email=${encodeURIComponent(startup.email)}`;
  //     window.location.href = redirectUrl;
  //   } catch {
  //     alert("error");
  //   }
  // }

  return (
    <div className={`card ${styles.cards}`}>
      <div className="card-body" style={{ position: "relative" }}>
        <h5
          className="card-title text-center"
          style={{
            color: "#112A46",
            fontWeight: "600",
            fontSize: "24px",
            marginBottom: "2rem",
          }}
        >
          {startup.name}
        </h5>
        <p className="card-text">
          <span style={name}>Technology: </span>
          <span style={text}>{techString || startup.technology}</span>
        </p>
        <p className="card-text">
          <span style={name}>Industry Focus: </span>
          <span style={text}>
            {industryFocusString || startup["Industry_Focus"]}
          </span>
        </p>
        <p className="card-text">
          <span style={name}>Eligibility Startups: </span>
          <span style={text}>{startup["Startup_eligibility_criteria"]}</span>
        </p>
      </div>

      <Link
        to={`/profile/${startup.id}?name=${startup.name}`}
        className={styles.link}
      >
        <button className={styles.buttonn}>View Profile</button>
      </Link>
    </div>
  );
}

export default Startups;
