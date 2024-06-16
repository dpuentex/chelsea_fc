import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersPage from "./PlayersPage";
import PlayerPage from "./PlayerPage";
function MainBody() {
  return (
    <>
      <div className="MainBodyDiv">
        <BrowserRouter>
          <Routes>
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;
