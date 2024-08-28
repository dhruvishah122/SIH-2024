import styles from "./Startups.module.css";

function Startups({ startups }) {
  return (
    <div className={styles["startup-container"]}>
      <div className={styles["sub-title"]}>Collaborate or invest with Startups</div>
      <div className={`d-flex flex-wrap  justify-content-center gap-4`}>
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

      {/* onClick={handleClick} */}

      <button onClick={handleClick} className={styles.button}>
        View Profile
      </button>
    </div>
  );
}

export default Startups;
