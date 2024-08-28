import styles from "../components/Startups.module.css";

const startups = [
  {
    name: "tech titans",
    email: "titans@gmail.com",
    password: "123",
    technology: "ml-ai",
    Industry_Focus: "colleges",
    Startup_eligibility_criteria: " startups",
    Startup_Revenue_Preference: 1000000,
    location: "IND",
    _id: "66cb6ddb43a2f8cc103e6d89",
    __v: 0,
    id: "c78d",
  },
  {
    name: "techies",
    email: "techies@gmail.com",
    password: "123",
    technology: "ml",
    Industry_Focus: "college",
    Startup_eligibility_criteria: " startup",
    Startup_Revenue_Preference: 7000000,
    location: "IND",
    _id: "66cb6e5fdf82c6794ce543b7",
    __v: 0,
    id: "4df6",
  },
  {
    name: "web",
    email: "web-dev@gmail.com",
    password: "123",
    technology: "backend",
    Industry_Focus: "full-stack",
    Startup_eligibility_criteria: "gov. certified",
    Startup_Revenue_Preference: 7000000,
    location: "IND",
    _id: "66cb71746cad902b366c4d6b",
    __v: 0,
    id: "dddf",
  },
  {
    name: "Fin-tech",
    email: "shreya@gmail.com",
    password: "123",
    technology:
      "Artificial Intelligence (AI), Consumer Apps, Enterprise Apps, AdTech, AgriTech, EdTech, FinTech, HealthTech, RetailTech, GreenTech/CleanTech, LogisticsTech, FoodTech, D2C",
    Industry_Focus:
      "Advertising,Media & Entertainment,Automotive,Financial Services,Aviation & Aerospace,Agriculture,Consumer Packaged Goods,Education & Training,Energy & Utilities,Healthcare & Pharmaceuticals,IT & ITES,Manufacturing,Retail,Telecom,Transportation & Logistics,Travel & Hospitality",
    Startup_eligibility_criteria: "gov. certified",
    Startup_Revenue_Preference: 7000000,
    location: "IND",
    _id: "66cb720f7ecb54eac3776e83",
    __v: 0,
    id: "325d",
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

  async function handleClick() {
    // Send a POST request to add a new user
    try {
      const res = await fetch("http://localhost:9000/ids", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });

      const re = await fetch("http://localhost:8080/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
      });

      const redirectUrl = `http://localhost:8080/startupProfile?name=${encodeURIComponent(
        startup.name
      )}&email=${encodeURIComponent(startup.email)}`;
      window.location.href = redirectUrl;
    } catch {
      alert("error");
    }
  }

  return (
    <div className={`card ${styles.cards}`}>
      <div className="card-body" style={{ position: "relative" }}>
        <h5
          className="card-title text-center"
          style={{
            color: "#008080",
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

      <button onClick={handleClick} className={styles.button}>
        View Profile
      </button>
    </div>
  );
}

export default Startups;
