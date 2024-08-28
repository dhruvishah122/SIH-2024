import styles from "./Investors.module.css";

function investors({ investors }) {
  return (
    <div className={styles["investor-container"]}>
      <div className={styles["sub-title"]}>Empowering Startups for Success</div>
      <div className={`d-flex flex-wrap  justify-content-center gap-4`}>
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
            color: "#008080",
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

      <button onClick={handleClick} className={styles.button}>
        View Profile
      </button>
    </div>
  );
}

export default investors;
