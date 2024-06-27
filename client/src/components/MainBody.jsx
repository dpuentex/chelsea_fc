import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayersPage from "./PlayersPage";
import PlayerPage from "./PlayerPage";
import SideNav from "./SideNav";
import Home from "./Home";
import Header from "./Header";
import Fixtures from "./Fixtures";
import FixturePage from "./FixturePage";
import Stadium from "./stadium";
import Shop from "./Shop";
import ProductPage from "./productPage";
import SupportPage from "./SupportPage";
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
                <Route path="/fixtures/:id" element={<FixturePage />} />
                <Route path="/bridge" element={<Stadium />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ProductPage />} />
                <Route path="/support" element={<SupportPage />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default MainBody;
