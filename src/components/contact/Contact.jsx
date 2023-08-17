import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;



  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_56wfuqo",
        "template_hn9ozv6",
        formRef.current,
        "OivurzWWTb_PPWWy4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          alert("Thank For Contacting me")
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +254 707 420 432
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              joseemuchech@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              245 Gakere Road, Nyeri
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your project?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "rgba(170, 163, 163, 0.692)"}} type="text" placeholder="Name" required name="user_name" />
            <input style={{backgroundColor: darkMode && "rgba(170, 163, 163, 0.692)"}} type="text" placeholder="Subject" required name="user_subject" />
            <input style={{backgroundColor: darkMode && "rgba(170, 163, 163, 0.692)"}} type="text" placeholder="Email" required name="user_email" />
            <textarea style={{backgroundColor: darkMode && "rgba(170, 163, 163, 0.692)"}} rows="5" placeholder="Message" required name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
      <div className="footer">Jm Portifolio - All rights Reserved</div>
    </div>
  );
};

export default Contact;
