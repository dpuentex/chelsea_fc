import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/PlayerPage.css";

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
          <img
            src={player.profile_pic}
            alt={`${player.player_name}'s profile`}
            className="profilePic"
          />
        </div>
      )}

      {player && (
        <div className="playerInf">
          <p>Name: {player.player_name}</p>
          <p>Player Number: {player.player_number}</p>
          <p>Date of Birth: {player.dob}</p>
          <p>Country: {player.country}</p>
        </div>
      )}
      {player && (
        <div className="playerStats">
          <h3>STATS</h3>
          <p>G/P :{player.games_played}</p>
          <p>⚽️ :{player.goals}</p>
          <p>🫱🏼‍🫲🏾 :{player.asists}</p>
          <p>
            <img src="../public/imgs/yellow-card.png" className="card" />:
            {player.yellow_cards}
          </p>
          <p>
            <img src="../public/imgs/red.png" className="card" />:
            {player.red_cards}
          </p>
        </div>
      )}
    </div>
  );
}

export default PlayerPage;
