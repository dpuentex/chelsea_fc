import { useState } from "react";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

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
    <div>
      {fixture && (
        <div className="teamLogos">
          <img src={fixture.homeTeam_logo} />
          <img src={fixture.awayTeam_logo} />
        </div>
      )}
    </div>
  );
}

export default FixturePage;
