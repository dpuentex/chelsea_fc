import "./App.css";
import { useEffect, useState } from "react";
function App() {
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
    <>
      <h1>hey</h1>
      {players.map((player) => (
        <div key={player.player_id}>
          <p>{player.player_name}</p>
        </div>
      ))}
    </>
  );
}

export default App;
