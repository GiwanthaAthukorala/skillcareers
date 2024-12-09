import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { jobData } from "@/lib/jobsSwiper";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const FeaturedJobs = () => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const job = jobData;

  return (
    <div>
      <div className="container mx-auto px-3 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-4 p-4">
          <h2 className="font-bold sm:text-xl md:text-sm text-[#33448D] lg:text-xl">
            Featured Jobs
          </h2>
          <a
            href="/JobDetails/JobDetails"
            className="text-[#001571] hover:underline text-xl font-bold"
          >
            View All
          </a>
        </div>

        <div className="relative flex items-center p-4 lg:p-24">
          <button
            ref={prevButtonRef}
            className="absolute left-2 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 swiper-button-prev-custom"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Swiper */}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            navigation={{
              nextEl: nextButtonRef.current,
              prevEl: prevButtonRef.current,
            }}
            pagination={{ clickable: true }}
            loop={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevButtonRef.current;
              swiper.params.navigation.nextEl = nextButtonRef.current;
            }}
            modules={[Pagination, Navigation]}
            className="w-full"
          >
            {job.map((jobItem) => (
              <SwiperSlide key={jobItem.id} className="mb-5">
                <div className="bg-white hover:bg-[#CAD1F1] p-6 lg:p-8 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-right font-bold text-[#000000]">
                      {jobItem.date}
                    </p>
                  </div>

                  <img
                    src={jobItem.image}
                    alt="Company Logo"
                    className="h-10 w-auto mb-6"
                  />

                  <h2 className="text-lg sm:text-xl font-bold text-[#001571] mb-1">
                    {jobItem.title}
                  </h2>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#001571] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Full Time
                    </span>
                    <span className="bg-[#00B6B4] text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Onsite
                    </span>
                  </div>

                  <p className="text-base font-bold text-[#000000] mb-1">
                    {jobItem.name}
                  </p>
                  <p className="text-base font-bold text-[#000000] mb-4">
                    {jobItem.city}
                  </p>
                  <p className="text-sm text-[#000000] mb-4">
                    {jobItem.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button
                      className="bg-[#001571] text-white px-3 py-2 rounded-lg font-semibold"
                      onClick={() =>
                        (window.location.href = "/ApplyTech/ApplyTech")
                      }
                    >
                      Apply Now
                    </button>
                    <button
                      className="border-2 border-[#001571] text-[#001571] px-3 py-2 rounded-lg font-bold hover:bg-blue-800 hover:text-white transition"
                      onClick={() =>
                        (window.location.href = "/JobDetails/JobDetails")
                      }
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next Button */}
          <button
            ref={nextButtonRef}
            className="absolute right-2 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 swiper-button-next-custom"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
