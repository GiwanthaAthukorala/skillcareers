import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import { jobData } from "@/lib/jobsSwiper";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Footer from "@/context/Footer";

export default function JobDetails() {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  return (
    <>
      <title>Job Details</title>
      <div className="min-h-screen bg-[#F5F5F5]">
        <div>
          <HomeHeadr />
        </div>

        <main className="container max-w-7xl mx-auto p-4 md:p-8">
          {/* Job Details Section */}

          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <div>
                <img
                  src="/img/AerFin1.png"
                  alt="Company Logo"
                  className="w-24 md:w-32 mb-4 md:mb-6 "
                />
                <h2 className="text-2xl md:text-3xl font-bold text-[#001571] mb-3">
                  Senior UX/UI Designer
                </h2>
                <p className="text-black font-bold text-sm mt-2">
                  InnovateTech Solutions | Colombo, Sri Lanka
                </p>
                <div className="flex items-center space-x-2 mt-4 mb-3">
                  <span className="bg-[#001571] text-white px-3 py-1 rounded-sm text-xs font-semibold cursor-pointer ">
                    Full Time
                  </span>
                  <span className="bg-[#00B6B4] text-white px-3 py-1 rounded-sm text-xs font-semibold cursor-pointer">
                    Onsite
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
                <button
                  className="px-4 py-2 border-4 border-[#001571] bg-white text-[#001571] rounded-md font-bold"
                  onClick={() => (window.location.href = "/")}
                >
                  View Company Profile
                </button>
                <button
                  className="px-4 py-2 bg-[#001571] text-white rounded-md font-bold"
                  onClick={() =>
                    (window.location.href = "/ApplyTech/ApplyTech")
                  }
                >
                  Apply Now
                </button>
              </div>
            </div>

            <hr className="w-full border-t border-[#B0B6D3] my-4" />

            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">Job Description</h3>
              <p className="text-[#000000]">
                As a Senior UX/UI Designer at InnovateTech Solutions, you will
                work with a talented team of designers and developers to create
                intuitive, user-centered designs for our cutting-edge digital
                products. We are looking for a creative thinker who has a
                passion for modern design and enjoys collaborating in a
                fast-paced environment. You’ll be responsible for translating
                user needs into interactive, high-performing web and mobile
                applications.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">Key Responsibilities</h3>
              <ul className="list-disc list-inside text-[#000000]">
                <li>
                  Design engaging and user-friendly interfaces for web and
                  mobile applications.
                </li>
                <li>
                  Conduct user research, wireframing, prototyping, and usability
                  testing to improve designs.
                </li>
                <li>
                  Collaborate with cross-functional teams including developers,
                  product managers, and marketers.
                </li>
                <li>
                  Maintain and evolve design systems to ensure consistency
                  across all platforms.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">
                Required Qualifications
              </h3>
              <ul className="list-disc list-inside text-[#000000]">
                <li>5+ years of experience in UX/UI design.</li>
                <li>
                  Proficiency in tools like Figma, Sketch, and Adobe Creative
                  Suite.
                </li>
                <li>
                  Experience with HTML/CSS and front-end frameworks is a plus.
                </li>
                <li>
                  Excellent communication skills and ability to work in a team
                  environment.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-xl mb-2">Perks & Benefits</h3>
              <ul className="list-disc list-inside text-[#000000]">
                <li>Remote work flexibility.</li>
                <li>Health, dental, and vision insurance.</li>
                <li>401(k) plan with company match.</li>
                <li>Professional development opportunities.</li>
              </ul>
            </div>
          </div>

          {/* Featured Jobs Section */}
          <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg md:text-xl font-bold text-[#001571]">
                Featured Jobs
              </h2>
              <a
                href="#"
                className="text-[#001571] hover:underline text-lg font-bold"
              >
                View All
              </a>
            </div>

            <div className="relative flex items-center">
              {/* Previous Button */}
              <button
                ref={prevButtonRef}
                className="absolute left-0 p-2 text-[#000000] bg-white rounded-full shadow-md hover:bg-gray-100 z-10 swiper-button-prev-custom"
              >
                <FaChevronLeft size={20} />
              </button>

              {/* Swiper */}
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
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
                {jobData.map((jobItem) => (
                  <SwiperSlide key={jobItem.id} className="mb-5">
                    <div className="bg-white hover:bg-[#CAD1F1] p-4 rounded-lg shadow-lg">
                      <div className="flex justify-between items-center">
                        <p className="text-right text-gray-600 text-sm font-bold">
                          {jobItem.date}
                        </p>
                      </div>

                      <img
                        src={jobItem.image}
                        alt="Company Logo"
                        className="h-12 w-auto mb-4"
                      />

                      <h2 className="text-lg md:text-xl font-bold text-[#001571] mb-2">
                        {jobItem.title}
                      </h2>

                      <div className="flex items-center gap-2 mb-16">
                        <span className="bg-[#001571] text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Full Time
                        </span>
                        <span className="bg-[#00B6B4] text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Onsite
                        </span>
                      </div>

                      <p className="text-[#000000] text-sm">
                        {jobItem.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <button
                          className="bg-[#001571] text-white px-3 py-1 rounded-md font-semibold"
                          onClick={() =>
                            (window.location.href = "/ApplyTech/ApplyTech")
                          }
                        >
                          Apply Now
                        </button>
                        <button
                          className="border-2 border-[#001571] text-[#001571] px-3 py-1 rounded-md font-semibold"
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
                className="absolute right-0 p-2 text-gray-600 bg-white rounded-full shadow-md hover:bg-gray-100 z-10 swiper-button-next-custom"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
