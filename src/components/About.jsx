import BurgerBackground from "../assets/burger-background.jpeg";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BurgerBackground})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, soluta
          eius rerum consequuntur blanditiis facilis officiis dicta tempore iste
          ad! Quaerat doloribus expedita, sit nisi saepe corrupti autem delectus
          quia eum rerum? Aliquam, voluptates reiciendis! Perferendis distinctio
          debitis ea. Temporibus facere animi quas itaque, consequatur sapiente
          molestias voluptatibus obcaecati repudiandae.
        </p>
      </div>
    </div>
  );
};

export default About;
