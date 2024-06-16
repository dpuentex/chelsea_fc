import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlayerPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    fetch(`/api/players/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlayer(data);
      })
      .catch((error) => {
        console.error("Error fetching individual player data:", error);
      });
  }, [id]);
  return (
    <div className="playerPageBody">
      {player && (
        <div className="playerProfile">
          <div className="playerInfo">
            <p>{player.player_name}</p>
            <p>{player.player_number}</p>
            <p>{player.dob}</p>
            <p>{player.country}</p>
            <img
              src={player.profile_pic}
              alt={`${player.player_name}'s profile`}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerPage;
