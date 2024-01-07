import "../Styles/Contact.css";

import instagram from "../Images/instagram.png";
import linkedIn from "../Images/linkedin.png";
import email from "../Images/mail.png";

const Contacts = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-icons-container">
        <a href="https://www.instagram.com/?hl=en" target="_blank">
          <img src={instagram} className="contact-icons" />
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img src={linkedIn} className="contact-icons" />
        </a>
        <a href="https://mail.google.com/" target="_blank">
          <img src={email} className="contact-icons special-icons" />
        </a>
      </div>
      <p className="copy-right-text">Copyright © 2024. All rights reserved</p>
    </div>
  );
};

export default Contacts;
