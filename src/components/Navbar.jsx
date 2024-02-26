import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={Logo} alt="Zula Logo" />
        <div className="mainLink">
          <Link to="/">Homepage</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
