import "./NavBar.css";

function NavBar() {
  const navColor = {
    color: "white",
  };

  const buttonStyles = {
    color: "white",
    border: "2px solid white",
    fontWeight: "500",
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top p-2">
      <div className="container-fluid text-warning logo ">
        <a className="navbar-brand  text-success " href="#">
          <img
            src="logo.jpg"
            alt="InnoHub Logo"
            style={{ height: "60px", marginLeft: "30px" }}
          />
        </a>
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
              style={{ ...navColor, ...buttonStyles }}
            >
              Login As
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button
                style={{ color: "#008080" }}
                className="dropdown-item"
                type="button"
                onClick={() =>
                  (window.location.href = "http://localhost:8080/startupLogin")
                }
              >
                Startup
              </button>

              <button
                style={{ color: "#008080" }}
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
                style={{ color: "#008080" }}
              >
                Researcher
              </button>
            </div>
          </div>

          <form className="d-flex gap-2" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={buttonStyles}
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
            <a className="dropdown-item " href="#" style={{ color: "#008080" }}>
              Startup Registration
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Mentorship Programs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Startup Funding
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Collaboration Opportunities
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
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
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Ongoing Projects
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Research Funding
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
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
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Patent Filing
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Copyright Services
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
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
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Start Investing
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Browse Investors
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#" style={{ color: "#008080" }}>
              Register as Invester
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}

export default NavBar;
