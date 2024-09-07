import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      {/* Heading*/}

      <div className="heading">
        <div>Our Services</div>
      </div>

      {/* Cards */}

      <div className="container container-fluid">
        <div className="d-flex flex-wrap gap-4 justify-content-evenly align-items-center mb-5">
          <Link to="/startup" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Startup Registeration</div>
            </div>
          </Link>

          <Link to="/startup" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Startup Funding</div>
            </div>
          </Link>

          <Link to="/ResearchHomePage" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Grant Listings</div>
            </div>
          </Link>

          <Link to="/ResearchHomePage" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Track Funding Allocations</div>
            </div>
          </Link>

          <Link to="/iprhomepage" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Patent Filing</div>
            </div>
          </Link>

          <Link to="/iprhomepage" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Trademark Registeration</div>
            </div>
          </Link>

          <Link to="/startups" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">View Registered Startups</div>
            </div>
          </Link>

          <Link to="/investors" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">View Registered Investors</div>
            </div>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Collaboration Opportunities</div>
            </div>
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="boxx card-info">
              <div className="h3">Mentorship Programs & Resources</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

/* <button className={styles["button"]}>Statups</button>
      <button>Research</button>
      <button>Intellectual Property Rights (IPR)</button>
      <button>View Startups</button>
      <button>View Investors</button> */
