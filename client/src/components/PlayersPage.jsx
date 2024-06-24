import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/PlayersPage.css";

function PlayersPage() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Fetch all             players data from your backend API
    fetch("/api/players")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlayers(data);
      })
      .catch((error) => {
        console.error("Error fetching players data:", error);
      });
  }, []);
  return (
    <div className="playersPageDiv">
      {players.map((player) => (
        <Link to={`/player/${player.player_id}`} key={player.player_id}>
          <div className="playerCardHolder">
            <div className="playerInfo">
              <p>{player.player_name}</p>
              <p>{player.player_number}</p>
            </div>
            <img
              className="profilePic"
              src={player.profile_pic}
              alt={`${player.player_name}'s profile`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PlayersPage;
