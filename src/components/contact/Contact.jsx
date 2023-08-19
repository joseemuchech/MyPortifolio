import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [isloading, setIsLoading] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = (e) => {
    e.preventDefault();
        setIsLoading(true);
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
          setTimeout(()=>{
            setIsLoading(false);
          });
          alert("Thank For Contacting Josee");
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
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleClick} >
            <input style={{backgroundColor: darkMode && "whitesmoke"}} type="text" placeholder="Name" required name="user_name" />
            <input style={{backgroundColor: darkMode && "whitesmoke"}} type="text" placeholder="Subject" required name="user_subject" />
            <input style={{backgroundColor: darkMode && "whitesmoke"}} type="email" placeholder="Email" required name="user_email" />
            <textarea style={{backgroundColor: darkMode && "whitesmoke"}} rows="5" placeholder="Message" required name="message" />
            {isloading ? <button >Sending...</button> : (<button>Send</button>)}
            
          </form>
        </div>
      </div>
      <div className="footer">Jm Portifolio - All rights Reserved</div>
    </div>
  );
};

export default Contact;
