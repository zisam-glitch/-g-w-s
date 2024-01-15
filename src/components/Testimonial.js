import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Pagination, Navigation]);
const Testimonial = () => {
  const props = {
    slidesPerView: 1,
    loop: true,
    pagination: false,
    navigation: {
      prevEl: ".prev_button",
      nextEl: ".next_button",
    },
  };
  return (
    <div className="aali_tm_section" id="testimonial">
      <div className="aali_tm_testimonials">
        <div className="left">
          <div className="image">
            <img src="img/hero/2.png" alt="aali image" />
          </div>
        </div>
        <div className="right">
          <div className="right_in">
            <div
              className="aali_tm_main_title"
              data-text-align="left"
              data-color="light"
            >
              <span>Testimonial</span>
              <h3>What People Say</h3>
            </div>
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    "Amazing, super quick work! - Very prompt responses and
                    great customer service. Sayed understood exactly what I was
                    looking for and was able to deliver great quality work with
                    fast delivery. I plan on continue working with Sayed as He
                    have been great to work with."
                  </p>
                </div>
                <div className="name">
                  <h3>
                  Angl, <span>Creative</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    "Sayed did a great job, he communicates on time. We are
                    happy with the results. Will work with Sayed again!"
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Rom Aron, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    "Sayed grew my client's accounts consistently. Thank you for
                    your hard work!"
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Erson Hers, <span>Customer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    Good overall template. I am getting back into coding and had
                    a simple question for the author. They responded within 5
                    minutes and answered my question. Highly recommend!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    Jessica Parker, <span>App Developer</span>
                  </h3>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="text">
                  <p>
                    I {`can't`} believe I got support and my problem resolved in
                    just minutes from posting my question. Simply amazing team
                    and amazing theme! Thank you for all!
                  </p>
                </div>
                <div className="name">
                  <h3>
                    MacLaren, <span>Freelancer</span>
                  </h3>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="direct">
              <a className="prev_button">
                <i className="icon-left" />
              </a>
              <a className="next_button">
                <i className="icon-right" />
              </a>
            </div>
          </div>
        </div>
        {/* <span className="border">
          <span
            className="in moving_effect"
            data-direction="x"
            data-reverse="yes"
          />
        </span> */}
        <span
          className="square moving_effect"
          data-direction="y"
          data-reverse="yes"
        />
        <span className="quote moving_effect" data-direction="x">
          <i className="icon-quote-left" />
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
