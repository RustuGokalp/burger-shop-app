import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
      </div>
      <p>Tüm hakları saklıdır. | Zula Burger© 2024</p>
    </div>
  );
};

export default Footer;
