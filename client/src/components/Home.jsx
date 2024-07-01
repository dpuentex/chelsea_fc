import "../assets/css/Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homoHomeContainer">
      <Link to={"/players"}>
        <div className="teamHomeContainer">
          <span>Team</span>
        </div>
      </Link>
      <Link to={"/fixtures"}>
        <div className="fixtureHomeContainer">
          <span>Fixtures</span>
        </div>
      </Link>
      <Link to={"/bridge"}>
        <div className="stadiumHomeContainer">
          <span>Stadium</span>
        </div>
      </Link>
      <Link to={"/shop"}>
        <div className="shopHomeContainer">
          <span>Shop</span>
        </div>
      </Link>
    </div>
  );
}

export default Home;
