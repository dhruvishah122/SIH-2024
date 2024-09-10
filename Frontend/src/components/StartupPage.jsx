import { useEffect, useState } from "react";
import Startups from "./Startups";
import NavBar from "./NavBar";
import StartupNavbar from "../NavBars/StartupNavbar";

const Base_URL = "/data.json"; // Change the base URL to the local JSON file path

function StartupPage() {
  const [startups, setStartups] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredStartups, setFilteredStartups] = useState([]);

  function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length === 0) {
      setFilteredStartups([]); // Reset filtered startups when the query is empty
    } else {
      const filteredData = startups.filter((startup) =>
        `${startup.name} ${startup.technology} ${startup.Industry_Focus}`
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      setFilteredStartups(filteredData);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(() => {
    async function fetchStartups() {
      try {
        const res = await fetch(Base_URL);
        const data = await res.json();
        setStartups(data.items); // Assuming your JSON structure has a `posts` array
      } catch (err) {
        alert("There was an error loading data: " + err);
      }
    }
    fetchStartups();
  }, []);

  return (
    <div>
      <StartupNavbar />
      <SearchBox
        query={query}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        num={filteredStartups.length}
        total={startups.length}
      />
      {startups.length !== 0 && (
        <Startups startups={query.length ? filteredStartups : startups} />
      )}
    </div>
  );
}

function SearchBox({ query, handleSearch, handleSubmit, num, total }) {
  const buttonStyles = {
    color: "black",
    border: "2px solid #112A46",
    fontWeight: "500",
  };

  return (
    <form
      className="d-flex gap-4"
      style={{ margin: "6rem 5rem 0 5rem" }}
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Search"
        aria-label="Search"
        style={buttonStyles}
        value={query}
        onChange={handleSearch}
      />
      <button className="btn button" style={buttonStyles}>
        Search
      </button>
      <div
        style={{
          width: "7rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "1rem",
          color: "black",
          fontWeight: "500",
        }}
      >
        {query.length !== 0 ? `${num} Results` : `${total} startups`}
      </div>
    </form>
  );
}

export default StartupPage;
