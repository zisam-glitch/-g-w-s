import emailjs from "emailjs-com";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_7j2q9u5", // service id
          "template_f9nsg2i", // template id
          mailData,
          "czNWW2UlwlqT2eYs-" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <div className="aali_tm_section" id="contact">
      <div className="aali_tm_contact">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="dark"
          >
            <span className="bigspan">You've got questions?</span>
            <h3>We've got answers!</h3>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div className="text">
                <p>
                  Please fill out the form on this section to contact with me.
                  Or call me 24/7.
                </p>
              </div>
              <ul>
                <li>
                  <div className="list_inner">
                    {call}
                    <span>Call me</span>
                    <a href="tel:+8801639501551">
                    <h3>+880 16395 01551</h3>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="list_inner">
                    {emailIcon}
                    <span>Email</span>
                    <h3>
                      <a className="line_anim" href="mailto:sayedshohagrahman@gmail.com">
                        Sayedshohagrahman@gmail.com
                      </a>
                    </h3>
                  </div>
                </li>
              </ul>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="fields">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                  onSubmit={(e) => onSubmit(e)}
                >
                  <div
                    className={error ? "empty_notice" : "returnmessage"}
                    style={{ display: error == null ? "none" : "block" }}
                  >
                    <span>
                      {error
                        ? "Please Fill Required Fields"
                        : "Your message has been received, We will contact you soon."}
                    </span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          onChange={(e) => onChange(e)}
                          value={name}
                          placeholder="Your Name"
                        />
                      </li>
                      <li>
                        <input
                          id="email"
                          type="text"
                          placeholder="Your Email"
                          name="email"
                          onChange={(e) => onChange(e)}
                          value={email}
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="message_area">
                    <textarea
                      id="message"
                      placeholder="Message"
                      name="message"
                      onChange={(e) => onChange(e)}
                      value={message}
                    />
                  </div>
                  <div className="aali_tm_button">
                    <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
                      <span>Submit Message {msgSent}</span>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Contact;
