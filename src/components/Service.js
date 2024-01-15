import { useEffect, useState } from "react";
import {
  camera,
  cameraDark,
  msg,
  pen,
  penDark,
  user,
  userDark,
  web,
  webDark,
} from "../svgImage";
import ModalBox from "./ModalBox";

const Service = ({ dark }) => {
  const [modal, setModal] = useState(0);
  const hidden = (value) => (value === modal ? "" : "service_hidden_details");
  useEffect(() => {
    let VanillaTilt = require("vanilla-tilt");
    VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
      maxTilt: 6,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    });
  }, []);
  return (
    <div className="aali_tm_section" id="service">
      <div className="aali_tm_service">
        <div className="container">
          <div className="service_list">
            <ul>
              <li className="simple wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner">
                  <div
                    className="aali_tm_main_title"
                    data-text-align="left"
                    data-color="dark"
                  >
                    <span>What I Do</span>
                    <h3>My Services</h3>
                    <p>
                      We offer high quality products for competitive prices. Our
                      main goal is customer satisfaction, which we obtain
                      through market orientation of ongoing service and support.
                    </p>
                  </div>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img className="inta" src="img/thumbs/1.png" alt="" />
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Instagram Account Growth</h3>
                    <span className="price">
                      Starts from <span>$25</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Looking to take your Instagram game to the next level? Say
                      hello to exponential growth!
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/1.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(1)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url="https://res.cloudinary.com/db1i46uiv/image/upload/c_scale,w_697/v1693596844/Growth_Instagram_Post_20230901_215453_0000_pin92x.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Instagram Account Growth</h3>
                        <span className="price">
                          Starts from <span>$25</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          🚀 Skyrocket Your Instagram Influence with "Grow with
                          Sayed"! 📈
                        </p>
                        <p>
                          Looking to take your Instagram game to the next level?
                          Say goodbye to stagnant follower counts and say hello
                          to exponential growth! At "Grow with Sayed," we
                          specialize in turbocharging your Instagram account,
                          helping you attract a massive audience and unlock
                          unparalleled success in the digital world.
                        </p>
                        <p>
                          🎯 Targeted Growth: We understand that it's not just
                          about the numbers, but about attracting the right
                          followers who genuinely engage with your content. With
                          our cutting-edge strategies, we focus on connecting
                          you with your ideal audience, ensuring every new
                          follower is a potential customer, collaborator, or
                          fan.
                        </p>
                        <p>
                          💡 Innovative Techniques: Say goodbye to outdated and
                          ineffective methods. Our team of expert Instagram
                          marketers stays ahead of the curve, continuously
                          refining our strategies to harness the platform's
                          latest algorithms and features. From organic growth
                          tactics to clever engagement techniques, we've got the
                          winning formula to propel your account forward.
                        </p>
                        <p>
                          💥 Explosive Results, Affordable Prices: You don't
                          need a hefty budget to achieve remarkable results. At
                          "Grow with Sayed," we believe in making growth
                          accessible to all. Our Instagram account growth
                          service starts at an unbeatable price of just $20,
                          providing exceptional value for your investment.
                        </p>
                        <p>
                          🔒 Safe and Secure: Your account's safety is our
                          utmost priority. Rest assured that we follow the
                          industry's best practices, utilizing secure and
                          ethical methods to deliver outstanding results. You
                          can entrust us with your Instagram account, knowing
                          it's in capable hands.
                        </p>
                        <p>
                          📊 Data-Driven Strategies: We're not just about flashy
                          promises; we back them up with solid data and
                          analytics. Our team tracks key metrics and provides
                          comprehensive reports, allowing you to see the
                          tangible impact of our services. We believe in
                          transparency and accountability every step of the way.
                        </p>
                        <p>
                          🌟 Personalized Support: Your success is our success.
                          We take a personalized approach, tailoring our
                          strategies to your unique goals and brand identity.
                          Our dedicated team will work closely with you,
                          offering guidance, insights, and ongoing support to
                          ensure your Instagram account reaches new heights.
                        </p>
                        <p>
                          Ready to witness jaw-dropping growth on Instagram?
                          Join "Grow with Sayed" today and unlock the full
                          potential of your account. Don't miss out on this
                          opportunity to make a lasting impact in the digital
                          sphere. Get started now and watch your Instagram
                          presence soar to new heights!
                        </p>
                        <div className="order-btn">
                        <div className="aali_tm_button">
                          <a
                          target="_blank"
                           href="https://wa.me/8801639501551?text=i'd%20like%20to%20order%20your%20Instagram%20Account%20Growth%20package?">
                            <span>Order now</span>
                          </a>
                        </div>
                      </div>
                      </div>
                      
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? webDark : web}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Web Development</h3>
                    <span className="price">
                      Starts from <span>$100</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Are you ready to take your online presence to the next
                      level? Look no further than Grow with Sayed
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/3.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(2)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/3.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Web Development</h3>
                        <span className="price">
                          Starts from <span>$100</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Are you ready to take your online presence to the next
                          level? Look no further than Grow with Sayed, your
                          premier destination for exceptional web development
                          services. With our unbeatable offer starting at just
                          $100, we'll transform your ideas into captivating,
                          high-performing websites that leave a lasting
                          impression.
                        </p>
                        <p>
                          At Grow with Sayed, we understand that a well-designed
                          website is the cornerstone of your digital success.
                          That's why our team of expert web developers works
                          tirelessly to craft visually stunning and highly
                          functional websites tailored to your unique needs. We
                          blend cutting-edge technology, sleek design, and
                          intuitive user experience to create a seamless online
                          platform that captivates your audience from the moment
                          they land on your site.
                        </p>
                        <p>
                          Why choose Grow with Sayed for your web development
                          needs? Here's what sets us apart:
                        </p>
                        <p>
                          Affordable Excellence: We believe that exceptional web
                          development shouldn't break the bank. Our
                          budget-friendly starting price of $100 ensures that
                          businesses of all sizes can access professional web
                          development services without compromising on quality.
                        </p>
                        <p>
                          Customized Solutions: No two businesses are alike, and
                          neither should their websites be. We take the time to
                          understand your goals, brand identity, and target
                          audience to create a tailor-made website that reflects
                          your unique vision and values.
                        </p>
                        <p>
                          User-Focused Design: User experience is at the core of
                          everything we do. Our team meticulously designs
                          intuitive interfaces and smooth navigation, ensuring
                          that your visitors have an enjoyable and engaging
                          experience, ultimately boosting conversion rates.
                        </p>
                        <p>
                          Mobile Responsiveness: In today's mobile-driven world,
                          a responsive website is paramount. Rest assured, we'll
                          optimize your site for seamless performance across all
                          devices, ensuring your content looks stunning and
                          functions flawlessly on smartphones, tablets, and
                          desktops alike.
                        </p>
                        <p>
                          Fast Turnaround: We know time is of the essence. Our
                          efficient development process ensures swift project
                          completion without compromising on quality. You'll
                          have your new website up and running in no time.
                        </p>
                        <p>
                          Don't miss out on the opportunity to elevate your
                          online presence with our affordable web development
                          services. Get in touch with Grow with Sayed today, and
                          let's bring your vision to life on the digital stage.
                          Together, we'll create a website that makes a lasting
                          impression and drives your business growth forward.
                        </p>
                        <div className="order-btn">
                        <div className="aali_tm_button">
                          <a
                          target="_blank"
                           href="https://wa.me/8801639501551?text=i'd%20like%20to%20order%20your%20Web%20Development%20package?">
                            <span>Order now</span>
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    <img className="inta" src="img/thumbs/2.png" alt="" />
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Reels Editing</h3>
                    <span className="price">
                      Starts from <span>$20</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Introducing "Reels Revolution" by Grow with Sayed: Unleash
                      the Power of Storytelling!
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/2.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(3)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/2.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Reels Editing</h3>
                        <span className="price">
                          Starts from <span>$20</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Introducing "Reels Revolution" by Grow with Sayed:
                          Unleash the Power of Storytelling!
                        </p>
                        <p>
                          Are you ready to captivate your audience with
                          stunning, attention-grabbing Reels? Look no further!
                          At Grow with Sayed, we bring you a game-changing Reels
                          Editing service that will revolutionize your social
                          media presence.
                        </p>
                        <p></p>
                        <p>
                          With our expert team of Reels editors, we transform
                          your raw footage into visually striking masterpieces
                          that command attention, evoke emotions, and leave a
                          lasting impression. Whether you&apos;re an influencer,
                          entrepreneur, or business owner, our affordable
                          packages starting at just $20 are designed to give you
                          a competitive edge in the digital world.
                        </p>
                        <p></p>
                        <p>
                          What sets us apart? It&apos;s our commitment to
                          delivering a truly immersive storytelling experience.
                          We understand that every frame counts, every
                          transition matters, and every beat has the power to
                          engage your audience like never before. From seamless
                          video cuts to dynamic motion graphics, we leverage the
                          latest editing techniques and industry-best practices
                          to create Reels that stop thumbs from scrolling and
                          make your content go viral.
                        </p>
                        <p></p>
                        <p>
                          When you choose our Reels Revolution service, you can
                          expect:
                        </p>
                        <p></p>
                        <p>
                          🌟 Customized Editing: We tailor our editing style to
                          align with your brand identity and creative vision.
                          Your Reels will be uniquely yours, reflecting your
                          personality and values.
                        </p>
                        <p></p>
                        <p>
                          🌟 Trendy Visual Effects: Stay ahead of the curve with
                          eye-catching effects, filters, and overlays that make
                          your Reels visually stunning and on-trend.
                        </p>
                        <p></p>
                        <p>
                          🌟 Engaging Storylines: We understand the art of
                          storytelling. Our editors expertly craft narratives
                          that keep your viewers hooked from start to finish,
                          maximizing engagement and driving results.
                        </p>
                        <p></p>
                        <p>
                          🌟 Fast Turnaround: We value your time. Count on us to
                          deliver your edited Reels promptly, without
                          compromising on quality. Your success is our priority.
                        </p>
                        <p></p>
                        <p>
                          🌟 Affordable Pricing: Quality doesn&apos;t have to
                          break the bank. Our Reels Editing service starts at
                          just $20, making it accessible for influencers and
                          businesses of all sizes.
                        </p>
                        <p></p>
                        <p>
                          Take the leap and make a splash in the digital realm
                          with our Reels Revolution service. Unleash the
                          potential of your content and watch your followers
                          grow exponentially.
                        </p>
                        <p></p>
                        <p>
                          Ready to elevate your Reels game? Contact us today to
                          get started on your journey to reel domination.
                        </p>
                        <div className="order-btn">
                        <div className="aali_tm_button">
                          <a
                          target="_blank"
                           href="https://wa.me/8801639501551?text=i'd%20like%20to%20order%20your%20Reels%20Editing%20package?">
                            <span>Order now</span>
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li className="wow fadeInLeft" data-wow-duration="1s">
                <div className="list_inner tilt-effect">
                  <span className="icon">
                    {dark ? cameraDark : camera}
                    <img
                      className="back"
                      src={`img/svg/service${dark ? "-dark" : ""}.png`}
                      alt="service"
                    />
                  </span>
                  <div className="title">
                    <h3>Content Creation</h3>
                    <span className="price">
                      Starts from <span>$20</span>
                    </span>
                  </div>
                  <div className="text">
                    <p>
                      Introducing Grow with Sayed: Unleash Your Brand&apos;s
                      Potential with Captivating Content Creation for Only $20!
                    </p>
                  </div>
                  <a
                    className="aali_tm_full_link"
                    href="#"
                    onClick={() => setModal(4)}
                  />
                  <img
                    className="popup_service_image"
                    src="img/service/4.png"
                    alt="aali image"
                  />
                </div>
                <div className={hidden(4)}>
                  <ModalBox close={setModal}>
                    <div className="service_popup_informations">
                      <div className="image">
                        <img src="img/thumbs/4-2.jpg" alt="aali image" />
                        <div
                          className="main"
                          data-img-url="img/service/4.png"
                        />
                      </div>
                      <div className="main_title">
                        <h3>Content Creation</h3>
                        <span className="price">
                          Starts from <span>$20</span>
                        </span>
                      </div>
                      <div className="descriptions">
                        <p>
                          Introducing Grow with Sayed: Unleash Your Brand&apos;s
                          Potential with Captivating Content Creation for Only
                          $20!
                        </p>
                        <p> </p>
                        <p>
                          Are you ready to take your brand to new heights? Look
                          no further than Grow with Sayed, the ultimate
                          destination for top-notch content creation that
                          won&apos;t break the bank. We offer a range of premium
                          services designed to captivate your audience and drive
                          unprecedented growth for your business.
                        </p>
                        <p> </p>
                        <p>
                          With our unbeatable starting price of just $20, we
                          empower businesses of all sizes to harness the power
                          of compelling content without draining their budgets.
                          Our team of expert content creators is dedicated to
                          crafting unique and engaging content that leaves a
                          lasting impression on your target market.
                        </p>
                        <p> </p>
                        <p>
                          Whether you need captivating blog posts,
                          attention-grabbing social media content, or compelling
                          website copy, we have you covered. Our skilled
                          professionals possess an intricate understanding of
                          the art of storytelling, ensuring that every piece of
                          content we produce resonates deeply with your
                          audience.
                        </p>
                        <p> </p>
                        <p>
                          At Grow with Sayed, we prioritize the success of your
                          brand above all else. We take the time to understand
                          your unique goals, target market, and brand identity
                          to deliver tailor-made content that drives results.
                          Our collaborative approach guarantees that your voice
                          shines through in every piece, establishing a strong
                          brand presence and fostering meaningful connections
                          with your customers.
                        </p>
                        <p> </p>
                        <p>Why choose Grow with Sayed? We offer:</p>
                        <p> </p>
                        <p>
                          Creative Excellence: Our content creators are masters
                          of their craft, constantly pushing boundaries and
                          delivering content that stands out from the crowd.
                        </p>
                        <p> </p>
                        <p>
                          Affordability: Starting at just $20, our services are
                          accessible to businesses of all sizes, enabling you to
                          achieve big results without breaking the bank.
                        </p>
                        <p> </p>
                        <p>
                          Customization: We believe in the power of
                          personalization. Every piece of content we create is
                          meticulously tailored to suit your brand&apos;s unique
                          personality and objectives.
                        </p>
                        <p> </p>
                        <p>
                          Timely Delivery: We understand that time is of the
                          essence in the fast-paced digital world. Rest assured,
                          we always deliver high-quality content on time, every
                          time.
                        </p>
                        <p> </p>
                        <p>
                          Unlock your brand&apos;s potential and make a lasting
                          impact with Grow with Sayed. Get started today and
                          witness the transformational power of exceptional
                          content creation. Together, let&apos;s grow your brand
                          beyond imagination!
                        </p>
                        <div className="order-btn">
                        <div className="aali_tm_button">
                          <a
                          target="_blank"
                           href="https://wa.me/8801639501551?text=i'd%20like%20to%20order%20your%20Content%20Creation%20package?">
                            <span>Order now</span>
                          </a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </ModalBox>
                </div>
              </li>
              <li
                className="simple text wow fadeInRight"
                data-wow-duration="1s"
                data-wow-delay="0.2s"
              >
                <div className="list_inner">
                  <div className="wrapper">
                    <div className="inner_text">
                      <h3>Do You Want Something Different?</h3>
                    </div>
                    <div className="aali_tm_button border">
                      <a className="anchor" href="http://wa.me/8801639501551">
                        <span>Knock Me {msg}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <span
          className="square_left moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span
          className="square_right moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Service;
