import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import Phone from "../img/phone.png";
import Email from "../img/email.png";
import Address from "../img/address.png";
import emailjs from "emailjs-com";
import { ThemeContext } from "../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const hanldeSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x2qejf7",
        "template_lt564jp",
        formRef.current,
        "I3scUAc5J9Zcbr3Vo"
      )
      .then((result) => console.log(result.text));
    setDone(true).then((error) => console.log(error));
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's Discuss your project </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8870467987
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              maheshraja0502@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              75, SatheyColony, vadavalli, Coimbatore-41
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-disc">
            <b>What's your story</b> Get in touch. Always freelancing if the
            right project come along me
          </p>
          <form ref={formRef} onSubmit={hanldeSubmit}>
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
