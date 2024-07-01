import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Fixtures.css";

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
        <Link
          to={`/fixtures/${fixture.fixture_id}`}
          key={fixture.fixture_id}
          className="fixtureLink"
        >
          <div className="fixtureContainer ticketCard">
            <p className="fixtureLocation">{fixture.location}</p>
            <div className="teamDiv">
              <p>{fixture.homeTeam}</p>
              <span className="vs">VS</span>
              <p>{fixture.awayTeam}</p>
            </div>
            <div className="teamLogos">
              <img
                src={fixture.homeTeam_logo}
                alt={`${fixture.homeTeam} logo`}
                className="homeTeamLogo"
              />
              <img
                src={fixture.awayTeam_logo}
                alt={`${fixture.awayTeam} logo`}
                className="awayTeamLogo"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Fixtures;
