import emailjs from "emailjs-com";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    topic: "",
  });
  const { name, email, topic } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || topic.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_7j2q9u5", // service id
          "template_v07oovg", // template id
          mailData,
          "czNWW2UlwlqT2eYs-" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", topic: "" });
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
    <>
      
      <div className="frommzz ">
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
                : "We will contact you soon."}
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
              <li>
                <input
                  id="topic"
                  type="text"
                  placeholder="What Are You Looking For"
                  name="topic"
                  onChange={(e) => onChange(e)}
                  value={topic}
                />
              </li>
            </ul>
          </div>
          <div className="aali_tm_buttonzzz">
            <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
              <span>Book now {msgSent}</span>
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
