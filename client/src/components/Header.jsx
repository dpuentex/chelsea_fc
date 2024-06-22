import "../assets/css/Header.css";

function Header() {
  return (
    <div className="headerDiv">
      <div className="overlay"></div>
      <h1>THE PRIDE OF LONDON</h1>

      <div className="trophiesDiv">
        <div className="thropyDiv">
          <h1>6x</h1>
          <img src="/imgs/prem_trophy.png" className="trophy" alt="prem" />
        </div>
        <div className="thropyDiv">
          <h1>4x</h1>
          <img
            src="https://cdn.freebiesupply.com/logos/large/2x/champions-league-logo-black-and-white.png"
            className="trophy"
            alt=""
          />
        </div>
        <div className="thropyDiv">
          <h1>8x</h1>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/The_Football_Association_Cup_trophy.svg/585px-The_Football_Association_Cup_trophy.svg.png"
            className="trophy"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
