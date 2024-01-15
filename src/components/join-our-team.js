import emailjs from "emailjs-com";
import { useState } from "react";
import { call, emailIcon, msgSent } from "../svgImage";

const Contact = () => {
  const [mailData, setMailData] = useState({
    firstname: "",
    lasttname: "",
    email: "",
    phone: "",
    message: "",
    cv: "",
  });
  const { firstname, lasttname, email, phone, message, cv } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstname.length === 2 ||
      email.length === 6 ||
      lasttname.length === 2 ||
      phone.length === 9 ||
      message.length === 100
    ) {
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
            setMailData({
              firstname: "",
              lasttname: "",
              email: "",
              phone: "",
              message: "",
              cv: "",
            });
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
    <div className="fromm whiters">
      <div className="textw-te">
        {" "}
        <p>
          Send us your CV. Our personnel requirements are constantly changing
          and our next project might be perfect for you!
        </p>
      </div>
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
                id="firstname"
                type="text"
                name="firstname"
                onChange={(e) => onChange(e)}
                value={firstname}
                placeholder="First Name"
              />
            </li>
            <li>
              <input
                id="lasttname"
                type="text"
                name="lasttname"
                onChange={(e) => onChange(e)}
                value={lasttname}
                placeholder="Last Name"
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
                id="phone"
                type="number"
                placeholder="Phone Number"
                name="phone"
                onChange={(e) => onChange(e)}
                value={phone}
              />
            </li>
          </ul>
        </div>
        {/* <div className="message_area">
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            onChange={(e) => onChange(e)}
            value={message}
          />
        </div> */}
        <div className="cv">
        {/* <label for="myfile">Select your cv : </label> */}
          <input
            id="cv"
            type="file"
            accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            placeholder="cv"
            name="cv"
            onChange={(e) => onChange(e)}
            value={cv}
          />
        </div>
        <div className="aali_tm_button">
          <a id="send_message" href="#" onClick={(e) => onSubmit(e)}>
            <span>Upload {msgSent}</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
