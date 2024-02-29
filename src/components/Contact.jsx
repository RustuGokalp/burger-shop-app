import "../styles/Contact.css";
import ZulaInside from "../assets/zula-inside.webp";
const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ZulaInside})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label> Name Surname</label>
          <input type="text" name="name" />
          <label> Email</label>
          <input type="text" name="email" />
          <label> Your Message</label>
          <textarea name="message" rows="6"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
