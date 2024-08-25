import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid text-warning logo ">
        <a className="navbar-brand  text-success logo" href="#">
          InnoHub Gujarat
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse nav-container"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
            <List />
          </ul>
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Login As
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <button className="dropdown-item" type="button" onClick={() => window.location.href = 'http://localhost:8080/startupLogin'}>
                Startup
              </button>

              <button className="dropdown-item" type="button" onClick={() => window.location.href = 'http://localhost:8080/investorLogin'}>
                Investor
              </button>

              <button className="dropdown-item" type="button">
                Researcher
              </button>
            </div>
          </div>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-warning  " type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

function List() {
  return (
    <>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-warning"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Startups
        </a>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item text-warning" href="#">
              Startup Registration
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Mentorship Programs
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Startup Funding
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Collaboration Opportunities
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Success Stories
            </a>
          </li>
        </ul>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-warning"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Research
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item text-warning" href="#">
              Ongoing Projects
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Research Funding
            </a>
          </li>

          <li>
            <a className="dropdown-item text-warning" href="#">
              Collaboration Opportunities
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-warning"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          IPR
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item text-warning" href="#">
              Patent Filing
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Trademark Registration
            </a>
          </li>

          <li>
            <a className="dropdown-item text-warning" href="#">
              Copyright Services
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Legal Consultation
            </a>
          </li>
        </ul>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle text-warning"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Investment
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item text-warning" href="#">
              Start Investing
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Browse Investors
            </a>
          </li>
          <li>
            <a className="dropdown-item text-warning" href="#">
              Register as Invester
            </a>
          </li>
        </ul>
      </li>
    </>
  );
}

export default NavBar;