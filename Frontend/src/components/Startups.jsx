import styles from "./Startups.module.css";

function Startups({ startups }) {
  return (
    <div className={styles["startup-container"]}>
      <div className={styles["sub-title"]}>Registered Startups</div>
      <div className={`d-flex flex-wrap  justify-content-center gap-4`}>
        {startups.map((startup) => (
          <Startup startup={startup} key={startup.id} />
        ))}
      </div>
    </div>
  );
}

function Startup({ startup }) {
  const card = {
    width: "20rem",
    boxShadow: "0px 0px 2px #e9601b",
    border: "2px solid #e9601b",
    backgroundColor: "rgb(233, 96, 27, 0.2)",
  };
  const name = {
    fontWeight: "500",
    color: "#e9601b",
  };
  const text = { color: "#e9601b" };
  let techString;
  if (startup.technology.length > 100) {
    techString = startup["technology"].slice(0, 100);
    techString = techString.concat("...");
  }
  let industryFocusString;
  if (startup["Industry_Focus"].length > 100) {
    industryFocusString = startup["Industry_Focus"].slice(0, 100);
    industryFocusString = techString.concat("...");
  }

  return (
    <div className="card" style={card}>
      <div className="card-body" style={{ position: "relative" }}>
        <h5
          className="card-title text-center"
          style={{ color: "#e9601b", fontWeight: "600", fontSize: "24px" }}
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
      <button className={styles.button}>View Profile</button>
    </div>
  );
}

export default Startups;
