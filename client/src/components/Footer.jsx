import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import "../assets/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img
        className="footer-logo"
        src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Chelsea_FC.svg/640px-Chelsea_FC.svg.png"
        alt=""
      />
      <nav className="footer-nav">
        <ul className="footer-nav-list">
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              <button className="footer-btn footer-btn-border-underline">
                Careers
              </button>
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              <button className="footer-btn footer-btn-border-underline">
                Contact Us
              </button>
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              <button className="footer-btn footer-btn-border-underline">
                Social Media
              </button>
            </a>
          </li>
          <li className="footer-nav-item">
            <a href="#" className="footer-nav-link">
              <button className="footer-btn footer-btn-border-underline">
                Privacy Policy
              </button>
            </a>
          </li>
        </ul>
        <div className="footer-divider"></div>
        <div className="footer-icons">
          <a href="#" className="footer-icon-link">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="footer-icon-link">
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="footer-icon-link">
            <AiOutlineYoutube size={24} />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
