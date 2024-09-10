import { Link } from "react-router-dom";
import styles from "./Investors.module.css";

const investors = [
  {
    name: "ML technologies",
    email: "ml@gmail.com",
    password: "123",
    technology: "ML",
    Investor_Type: "Government",
    Employee_count: 200,
    headquaters: "Delhi,India",
    website: "https://www.ml.com",
    _id: "66cdf0858290fb967d4a9583",
    __v: 0,
  },
  {
    name: "FutureTech Capital",
    email: "futuretech@gmail.com",
    password: "123",
    technology: "Cybersecurity, DevOps",
    Investor_Type: " SaaS and Enterprise Solutions",
    Year_of_establishment: "2015",
    Employee_count: 1000,
    headquaters: "Gujarat, INDIA",
    website: "https://www.futuretechcapital.com",
    _id: "66cf250d846b47216990b084",
    __v: 0,
  },
  {
    name: "Deep-ML technologies",
    email: "aiml1@gmail.com",
    password: "123",
    technology: "DEEP LEARNING",
    Investor_Type: "Government",
    Employee_count: 200,
    headquaters: "Delhi,India",
    website: "https://www.deep-ml.com",
    _id: "66cdf2d36c0a6e33cda056a6",
    __v: 0,
  },
  {
    name: "Harvest Capital",
    email: "harvestcapital@gmail.com",
    password: "123",
    technology: " Food Technology, Agricultural Technology (AgTech)",
    Investor_Type: "Private",
    Year_of_establishment: "2000",
    Employee_count: 5000,
    headquaters: "Mumbai , India",
    website: "https://www.harvestcapital.com",
    _id: "66cf23ba846b47216990b07f",
    __v: 0,
  },
];

function Investors() {
  return (
    <div className={styles["investor-container"]} style={{ marginTop: "3rem" }}>
      <div className={`d-flex flex-wrap  justify-content-center gap-5`}>
        {investors.map((investor) => (
          <Investor investor={investor} key={investor.id} />
        ))}
      </div>
    </div>
  );
}

function Investor({ investor }) {
  const name = {
    fontWeight: "500",
    color: "black",
  };
  const text = { color: "black" };

  const id = {
    id: investor._id,
  };

  async function handleClick() {
    // Send a POST request to add a new user
    try {
      const res = await fetch("http://localhost:9001/ids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });
      const re = await fetch("http://localhost:8080/iProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });

      const redirectUrl = `http://localhost:8080/investorProfile?name=${encodeURIComponent(
        investor.name
      )}&email=${encodeURIComponent(investor.email)}`;
      window.location.href = redirectUrl;
    } catch {
      alert("error");
    }
  }
  return (
    <div className={`card ${styles.cards}`}>
      <div className="card-body" style={{ position: "relative" }}>
        <h5
          className="text-center"
          style={{
            color: "#112a46",
            fontWeight: "600",
            fontSize: "24px",
            marginBottom: "2rem",
          }}
        >
          {investor.name}
        </h5>
        <p className="card-text">
          <span style={name}>Technology: </span>
          <span style={text}>{investor.technology}</span>
        </p>
        <p className="card-text">
          <span style={name}>Investor type: </span>
          <span style={text}>{investor["Investor_Type"]}</span>
        </p>
        <p className="card-text">
          <span style={name}>Employee count: </span>
          <span style={text}>{investor["Employee_count"]}</span>
        </p>
        <p className="card-text">
          <span style={name}>Email: </span>
          <span style={text}>{investor["email"]}</span>
        </p>
        <p className="card-text">
          <span style={name}>Website: </span>
          <span style={text}>{investor["website"]}</span>
        </p>
      </div>

      {/* onClick={handleClick} */}

      <Link
        to={`/investorprofile/${investor.id}?name=${investor.name}`}
        className={styles.link}
      >
        <button className={styles.button}>View Profile</button>
      </Link>
    </div>
  );
}

export default Investors;
