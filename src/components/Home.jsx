import { useEffect, useState } from "react";
import { fb, insta, msg, twitter } from "../svgImage";
import { parallax } from "../utilits";
import Booking from "./booking";

const Home = () => {
  const [text, setText] = useState(1);
  useEffect(() => {
    parallax();
    const interval = setInterval(() => {
      setText(text < 2 ? text + 1 : 1);
    }, 2000);
    return () => clearInterval(interval);
  });
  return (
    <div className="aali_tm_section " id="home">
      <div className="aali_tm_hero">
        <div className="container">
          <div className="hero_inner">
            <div className="content">
              <span className="hello">Hello, {`I'm`}</span>
              <h3 className="name">Sayed</h3>
              <div className="job">
                <span className="cd-headline rotate-1">
                  {" "}
                  {/* ANIMATE TEXT VALUES: zoom, rotate-1, letters type, letters rotate-2, loading-bar, slide, clip, letters rotate-3, letters scale, push,  */}
                  <span className="blc"></span>
                  <span className="cd-words-wrapper">
                    <b className={text === 1 ? "is-visible" : "is-hidden"}>
                      Web Developer
                    </b>
                    <b className={text === 2 ? "is-visible" : "is-hidden"}>
                      Instagram Marketer
                    </b>
                  </span>
                </span>
              </div>
              <div className="hero_buttons">
                <div className="aali_tm_button">
                  <a
                    className="anchor"
                    href="mailto:sayedshohagrahman@gmail.com"
                  >
                    <span>Say Hello {msg}</span>
                  </a>
                </div>
                <div className="simple_button">
                  <a className="anchor" href="#about">
                    About Me
                  </a>
                </div>
              </div>

              <div className="aali_tm_down">
                <div className="down-icon white top_120">
                  <a className="anchor" href="#about">
                    <svg
                      width="26px"
                      height="100%"
                      viewBox="0 0 247 390"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      style={{
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: "1.5",
                      }}
                    >
                      <path
                        id="wheel"
                        d="M123.359,79.775l0,72.843"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: 20,
                        }}
                      />
                      <path
                        id="mouse"
                        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                        style={{
                          fill: "none",
                          stroke: "#fff",
                          strokeWidth: 20,
                        }}
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="blxxss">
                <div className="bookingz">
                  <div className="hero">
                    <div className="ttlls">
                      <h5>
                        Get <span>Free</span> 30 Min Consultation
                      </h5>
                    </div>
                  </div>
                  <Booking />
                </div>
              </div>
            </div>
            <div className="avatar parallax ">
              <div className="main"></div>

              <span className="one">
                <span className="in layer" data-depth="0.14" />
              </span>
              <span className="two">
                <span className="in layer" data-depth="0.18" />
              </span>
              <span className="three">
                <span className="in layer" data-depth="0.22" />
              </span>

              <span className="five">
                <span className="in layer" data-depth="0.3" />
              </span>
            </div>
            <div className="avatar ">
              <div className="iphone">
                <div className="bookingz">
                  <div className="hero">
                    <div className="logos">
                      <img
                        src="https://res.cloudinary.com/db1i46uiv/image/upload/v1693167592/kwoti43brdc_tvolfl.jpg"
                        alt=""
                      />
                      <h4>Meet Sayed</h4>
                    </div>
                    <div className="ttlls">
                      <h5>
                        Get <span>Free</span> 30 Min Consultation
                      </h5>
                    </div>
                  </div>
                  <Booking />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
       target="_blank"
       href="http://wa.me/8801639501551">
        <div className="btn-whatsapp-pulse">
          <img
            src="https://res.cloudinary.com/db1i46uiv/image/upload/v1693336311/4017334_circle_logo_media_network_social_icon_xyuhkc.png"
            alt=""
          />
        </div>
      </a>
    </div>
  );
};

export default Home;
