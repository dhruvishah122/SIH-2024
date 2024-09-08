import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "../logo.jpg";

function NavBar() {
  const navColor = {
    color: "white",
  };

  const buttonStyles = {
    color: "white",
    border: "2px solid white",
    fontWeight: "500",
  };
  const buttonStyless = {
    color: "black",
    border: "2px solid white",
    fontWeight: "500",
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-2">
      <div className="container-fluid text-warning logo ">
        <Link to="/" className="navbar-brand  text-warning">
          <img
            src={logo}
            alt="InnoHub Logo"
            style={{ height: "60px", marginLeft: "30px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ backgroundColor: "white" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-container"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <List navColor={navColor} />
          </ul>
          <div className="dropdown">
            <button
              className="btn dropdown-toggle button"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ ...navColor, ...buttonStyles, width: "6rem" }}
            >
              Login As
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                style={{ color: "#d2631f" }}
                className="dropdown-item"
                type="button"
                onClick={() =>
                  (window.location.href = "http://localhost:8080/startupLogin")
                }
              >
                Startup
              </button>

              <button
                style={{ color: "#d2631f" }}
                className="dropdown-item"
                type="button"
                onClick={() =>
                  (window.location.href = "http://localhost:8080/investorLogin")
                }
              >
                Investor
              </button>

              <button
                className="dropdown-item"
                type="button"
                style={{ color: "#d2631f" }}
              >
                Researcher
              </button>
              <button
                className="dropdown-item"
                type="button"
                style={{ color: "#d2631f" }}
                onClick={() =>
                  (window.location.href = "http://localhost:3000/startupStatus")}
              >
                Government authority
              </button>
            </div>
          </div>

          <form className="d-flex gap-2" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={buttonStyless}
            />
            <button className="btn button" type="submit" style={buttonStyles}>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function List({ navColor }) {
  return (
    <>
      <li className="dropdown">
        <a
          className="navItem nav-link dropdown-toggle "
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={navColor}
        >
          Startups
        </a>

        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item "
              href="http://localhost:8080/startupRegister"
              style={{ color: "#d2631f" }}
            >
              Startup Registration
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Mentorship Programs
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://localhost:3000/investors"
              style={{ color: "#d2631f" }}
            >
              Startup Funding
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://localhost:3000/startups"
              style={{ color: "#d2631f" }}
            >
              Collaboration Opportunities
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Success Stories
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="navItem nav-link dropdown-toggle"
          style={navColor}
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Research
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Ongoing Projects
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Research Funding
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Collaboration Opportunities
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="navItem nav-link dropdown-toggle"
          style={navColor}
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          IPR
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Patent Filing
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Copyright Services
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#d2631f" }}>
              Legal Consultation
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="navItem nav-link dropdown-toggle"
          style={navColor}
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Investment
        </a>
        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="http://localhost:3000/startups"
              style={{ color: "#d2631f" }}
            >
              Start Investing
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://localhost:3000/investors"
              style={{ color: "#d2631f" }}
            >
              Browse Investors
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              href="http://localhost:8080/investorRegister"
              style={{ color: "#d2631f" }}
            >
              Register as Invester
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}

export default NavBar;
