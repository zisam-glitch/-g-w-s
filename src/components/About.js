import { download } from "../svgImage";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="https://res.cloudinary.com/db1i46uiv/image/upload/v1698654584/image_123650291_1_ohc21u.jpg" alt="aali image" />
              <div className="main" data-img-url="https://res.cloudinary.com/db1i46uiv/image/upload/v1698654584/image_123650291_1_ohc21u.jpg" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
              
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Sayed</span>
              </h3>
              <h3>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: ["Instagram Marketer", "Web Developer"],
                }}
              /></h3>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                As an experienced web developer and Instagram marketer, I bring
                a wealth of expertise to help businesses thrive in the digital
                landscape. With years of hands-on experience, I specialize in
                creating visually stunning websites that seamlessly integrate
                with effective marketing strategies. By leveraging my skills in
                web development and Instagram marketing, I help clients
                establish a strong online presence and achieve their business
                goals. Trust me to deliver top-notch solutions that drive
                traffic, engagement, and conversions. Let's collaborate and take
                your online presence to new heights!
              </p>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/2.jpg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
