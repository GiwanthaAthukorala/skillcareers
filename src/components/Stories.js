import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Testimonials from "../lib/Testimonials"; // Import your testimonials data
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Stories = () => {
  const testimonials = Testimonials; // Array of testimonial objects
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <div className="max-w-7xl mx-auto py-8 bg-gray-50 p-6 sm:p-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-center sm:text-left">
          <h2 className="text-lg sm:text-2xl font-bold text-[#001571] mb-4 sm:mb-0">
            Success Stories from Our Community
          </h2>
          <a
            href="#"
            className="text-[#001571] hover:underline text-lg font-bold sm:text-lg"
          >
            View All
          </a>
        </div>

        {/* Swiper Section */}
        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            ref={prevButtonRef}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 sm:left-4"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Swiper Component */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevButtonRef.current,
              nextEl: nextButtonRef.current,
            }}
            onSwiper={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            modules={[Pagination, Navigation]}
            className="w-full"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="mb-4">
                <div className="bg-white hover:bg-[#CAD1F1] p-6 rounded-lg shadow-lg">
                  <div className="">
                    <h1 className="text-9xl text-[#001571] font-extrabold">
                      "
                    </h1>
                  </div>
                  <p className="text-[#000000] text-sm sm:text-base font-medium mb-4">
                    {testimonial.text}
                  </p>
                  <hr className="w-full border-t font-bold border-[#001571] mt-4" />
                  <img
                    src={testimonial.image}
                    alt="Profile"
                    className="h-16 w-auto mt-4 mb-2 mx-auto sm:mx-0"
                  />
                  <h2 className="text-lg sm:text-xl font-bold text-[#001571] mb-1">
                    {testimonial.name}
                  </h2>
                  <div className="text-[#000000] text-xs sm:text-sm font-semibold">
                    {testimonial.company}
                  </div>
                  <div className="text-left text-[#000000] text-xs sm:text-sm font-bold">
                    {testimonial.title}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button
            ref={nextButtonRef}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 sm:right-4"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stories;
