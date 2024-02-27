import { Link } from "react-router-dom";
import BannerImage from "../assets/burger-background.jpeg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>ORDER</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
