import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersPage from "./PlayersPage";
import PlayerPage from "./PlayerPage";
import SideNav from "./SideNav";
import Home from "./Home";
import "../assets/css/MainBody.css";
function MainBody() {
  return (
    <>
      <div className="MainBodyDiv">
        <BrowserRouter>
          <SideNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/player/:id" element={<PlayerPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;
