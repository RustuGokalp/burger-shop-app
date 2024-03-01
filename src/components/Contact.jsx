import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import "../styles/Contact.css";
import ZulaInside from "../assets/zula-inside.webp";

const onSubmit = async (values, actions) => {
  console.log("values", values);
  console.log("actions", actions);
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const Contact = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ZulaInside})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <label> Name Surname</label>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="Ad Soyadınızı Giriniz"
            className={errors.name ? "input-error" : ""}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <label> Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            placeholder="Mail adresinizi giriniz"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label> Your Message</label>
          <textarea
            value={values.message}
            onChange={handleChange}
            id="message"
            placeholder="Mesajınızı giriniz"
            className={errors.message ? "input-error" : ""}
            rows="6"
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
          <button type="submit">Send</button>
          {isSubmitting ? <h1>Loading...</h1> : ""}
        </form>
      </div>
    </div>
  );
};

export default Contact;
