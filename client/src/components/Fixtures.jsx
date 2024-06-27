import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fixtures() {
  const [fixtures, setFixtures] = useState([]);

  useEffect(() => {
    // Fetch all fixtures data from your backend API
    fetch("/api/fixtures")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFixtures(data);
      })
      .catch((error) => {
        console.error("Error fetching fixtures data:", error);
      });
  }, []);
  return (
    <div className="fixturesPage">
      {fixtures.map((fixture) => (
        <Link to={`/fixtures/${fixture.fixture_id}`} key={fixture.fixture_id}>
          <div className="fixtureContainer">
            <p>{fixture.homeTeam}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Fixtures;
