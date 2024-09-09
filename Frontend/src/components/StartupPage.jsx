import { useEffect, useState } from "react";
import Startups from "./Startups";
import NavBar from "./NavBar";
// import { useStartups } from "../../hooks/useStartups";

const Base_URL = "http://localhost:600/";
function StartupPage() {
  const [startups, setStartups] = useState([]);

  // const { startups } = useStartups();
  // console.log(startups);

  const [query, setQuery] = useState("");
  const [filteredStartups, setFilteredStartups] = useState([]);

  function handleSearch(e) {
    setQuery(() => e.target.value);
    if (query.length === 0) setFilteredStartups(() => []);
    const filteredData = startups.filter((startup) =>
      `${startup.name} ${startup.technology} ${startup.Industry_Focus}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    console.log(filteredData);
    setFilteredStartups(() => filteredData);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  useEffect(function () {
    async function FetchStartups() {
      try {
        const res = await fetch(`${Base_URL}items`);
        const data = await res.json();
        console.log(data);
        setStartups(data);
      } catch {
        alert("There was an error loading data");
      }
    }
    FetchStartups();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBox
        query={query}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
        num={filteredStartups.length}
        total={startups.length}
      />
      {startups.length != 0 && (
        <Startups startups={query.length ? filteredStartups : startups} />
      )}
    </div>
  );
}

function SearchBox({ query, handleSearch, handleSubmit, num, total }) {
  const buttonStyles = {
    color: "black",
    border: "2px solid #d2631f",
    fontWeight: "500",
  };

  const buttonStyless = {
    color: "black",
    border: "2px solid #d2631f",
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
        style={buttonStyless}
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
