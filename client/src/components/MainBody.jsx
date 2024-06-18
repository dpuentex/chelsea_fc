import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersPage from "./PlayersPage";
import PlayerPage from "./PlayerPage";
import SideNav from "./SideNav";
import Home from "./Home";
import Header from "./Header";
import Fixtures from "./Fixtures";
import Shop from "./Shop";
import "../assets/css/MainBody.css";

function MainBody() {
  return (
    <>
      <div className="MainBodyDiv">
        <Header />
        <BrowserRouter>
          <div className="navSplit">
            <SideNav />
            <div className="pagesDiv">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/player/:id" element={<PlayerPage />} />
                <Route path="/fixtures" element={<Fixtures />} />
                <Route path="/shop" element={<Shop />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;
