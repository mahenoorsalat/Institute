import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle"; // Import Swiper styles

function CustomSwiper() {
  return (
    <>
      <div className="swiper-container mt-16">
        <Swiper
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Keep autoplay running even after interaction
          }}
          spaceBetween={0} // No space between slides
          slidesPerView={1} // Only 1 slide visible at a time
          loop={true} // Make the swiper loop
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <img
                src="https://via.placeholder.com/1920x1080/0000FF/808080?text=Banner+1" // Placeholder image
                alt="Placeholder"
                className="w-full h-40 " // Ensure the image takes full width
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img
                src="https://via.placeholder.com/1920x1080/FF0000/FFFFFF?text=Banner+2" // Placeholder image
                alt="Placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img
                src="https://via.placeholder.com/1920x1080/008000/FFFFFF?text=Banner+3" // Placeholder image
                alt="Placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide">
              <img
                src="https://via.placeholder.com/1920x1080/FFFF00/000000?text=Banner+4" // Placeholder image
                alt="Placeholder"
                className="w-full h-auto object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default CustomSwiper;
