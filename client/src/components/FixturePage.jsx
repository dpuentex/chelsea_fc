import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/FixturePage.css";

function FixturePage() {
  const { id } = useParams();
  const [fixture, setFixture] = useState(null);

  useEffect(() => {
    fetch(`/api/fixtures/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFixture(data);
      })
      .catch((error) => {
        console.error("Error fetching individual fixture data:", error);
      });
  }, [id]);
  return (
    <div className="uniqueFixtureDetailPage">
      {fixture && (
        <div className="uniqueFixtureDetailContainer">
          <p className="uniqueFixtureLocation">{fixture.location}</p>
          <div className="uniqueTeamDiv">
            <p className="uniqueTeamName">{fixture.homeTeam}</p>
            <span className="uniqueVs">VS</span>
            <p className="uniqueTeamName">{fixture.awayTeam}</p>
          </div>
          <div className="uniqueTeamLogos">
            <img
              className="uniqueHomeTeamLogo"
              src={fixture.homeTeam_logo}
              alt={`${fixture.homeTeam} logo`}
            />
            <img
              className="uniqueAwayTeamLogo"
              src={fixture.awayTeam_logo}
              alt={`${fixture.awayTeam} logo`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default FixturePage;
