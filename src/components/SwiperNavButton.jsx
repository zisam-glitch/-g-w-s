import React from "react";
import { useSwiper } from 'swiper/react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <div className="swp-button">
        <button
          className="button-class"
          onClick={() => swiper.slidePrev()}
        >
          <div>
            <FaArrowLeftLong />
          </div>
        </button>
        <button
          className="button-class "
          onClick={() => swiper.slideNext()}
        >
          <div>
            <FaArrowRightLong />
          </div>
        </button>
      </div>
    </div>
  );
}
