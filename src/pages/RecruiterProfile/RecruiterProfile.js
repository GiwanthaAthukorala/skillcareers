// pages/recruiter-profile.js
import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import Footer from "@/context/Footer";
import { jobData } from "@/lib/jobsSwiper";
import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function RecruiterProfile() {
  const jobs = jobData;
  return (
    <div className="bg-[#F5F5F5]">
      <title>Recruiter Profile</title>
      <header className="bg-white shadow-lg">
        <HomeHeadr />
      </header>

      <div className="max-w-7xl mx-auto mt-4  px-4 sm:px-6">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6">
          <Image
            src="/img/Rectangle 160.png"
            alt="SKILLS CAREERS"
            width={500}
            height={500}
            className="h-40 sm:h-full w-full"
          />
          <div className="flex flex-wrap justify-center sm:justify-end px-4 sm:px-20 py-2 sm:m-10 space-x-4 items-center cursor-pointer">
            {/* Social Icons */}
            {[
              "Linkind.png",
              "XXXX.png",
              "Instrgram.png",
              "facebook.png",
              "gitHub.png",
              "Bascutball.png",
            ].map((icon, index) => (
              <Image
                key={index}
                src={`/social/${icon}`}
                alt={icon.split(".")[0]}
                width={30}
                height={30}
                className="h-8 w-8 cursor-pointer"
              />
            ))}
          </div>

          <div className="relative flex ml-16 -mt-16 sm:-mt-48">
            <div className="border-4 border-[#001571] p-1 bg-white rounded-full overflow-hidden w-[100px] h-[100px] sm:w-[180px] sm:h-[180px]">
              <img
                src="/img/AerFin1.png"
                alt="Company Logo"
                className="w-full  h-full  object-contain"
              />
            </div>
          </div>

          <div className=" mt-4 ml-8 text-center sm:text-left">
            <h2 className="text-xl sm:text-3xl font-bold text-[#000000] ">
              Aerfin Technologies
            </h2>
            <div className="flex justify-center sm:justify-end ">
              <button
                className="px-8 sm:px-20 py-2 bg-[#001571]  text-white rounded-md"
                onClick={() => (window.location.href = "/ApplyTech/ApplyTech")}
              >
                <a
                  href="#"
                  className="inline-flex items-center text-white font-semibold"
                >
                  Apply Now
                  <BsArrowRight className="ml-2 bg-white text-[#001571] rounded-sm" />
                </a>
              </button>
            </div>
            {/* Company Info */}
            <p className="text-[#000000] flex flex-col sm:flex-row gap-4 items-center font-medium text-center sm:text-left px-4 sm:p">
              <span className="flex items-center">
                <img
                  src="/social/global-search.png"
                  alt="Website"
                  className="h-6 cursor-pointer"
                />
                <a
                  href="https://www.aerfintechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline ml-2"
                >
                  www.aerfintechnologies.com
                </a>
              </span>
              <span className="flex items-center">
                <img
                  src="/social/category.png"
                  alt="Category"
                  className="h-6 cursor-pointer"
                />
                <span className="ml-2">Technology & Development</span>
              </span>
              <span className="flex items-center">
                <img
                  src="/social/user-octagon.png"
                  alt="Employees"
                  className="h-6 cursor-pointer"
                />
                <span className="ml-2">11 - 50 Employees</span>
              </span>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="font-semibold text-lg text-[#001571] px-4 ">
              Company Description
            </h3>
            <p className="text-[#000000] p-2 text-sm mb-2 mt-4 sm:text-base px-4 ">
              I am a dedicated and results-driven Senior UX/UI Designer with
              over 5 years of experience in creating user-friendly and
              aesthetically pleasing digital products. My expertise lies in
              designing intuitive interfaces for web and mobile applications,
              conducting user research, and collaborating with cross-functional
              teams to deliver seamless user experiences. I have a passion for
              combining creativity with data-driven insights to solve complex
              design challenges.
              <br />
              Throughout my career, I have worked with innovative companies like
              InnovateTech Solutions and BrightPath Marketing, leading design
              projects that significantly improved user engagement and product
              usability. I am always eager to learn new trends in design and
              technology, and I strive to create designs that not only meet
              business goals but also delight users. In my free time, I enjoy
              mentoring junior designers, contributing to open-source projects,
              and exploring the latest developments in UX design.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4 items-center m-6 sm:m-10">
            <div className="flex items-center space-x-2 bg-[#001571] text-white px-4 py-2 rounded-md">
              <FaPhoneAlt className="w-4 h-4" />
              <span className="text-sm font-bold">011-2335-9876</span>
            </div>
            <div className="flex items-center space-x-2 bg-[#001571] text-white px-4 py-2 rounded-md">
              <HiOutlineMail className="w-5 h-5" />
              <span className="text-sm font-semibold">
                info@aerfintechnologies.com
              </span>
            </div>
          </div>
        </div>

        {/* Open Jobs */}
        <div className="container mx-auto">
          <h3 className="text-lg sm:text-xl font-bold m-4 sm:m-10 text-[#33448D] text-center sm:text-left">
            Open Jobs
          </h3>
        </div>
        <section className="container mx-auto px-4 sm:px-24 py-2">
          {/* Job Filters */}
          <div className="text-center mb-6 flex justify-center sm:justify-end space-x-2">
            {["Onsite", "Hybrid", "Remote"].map((type) => (
              <button
                key={type}
                className="text-[#001571] px-4 py-2 bg-[#E6E8F1] rounded font-bold"
              >
                {type}
              </button>
            ))}
          </div>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <div key={job.id} className="mb-5">
                <div className="bg-white hover:bg-[#CAD1F1] p-2 rounded-lg shadow-lg">
                  <div className="flex justify-between items-center">
                    <p className="w-full text-right text-[#000000] text-xs sm:text-sm font-bold">
                      {job.date}
                    </p>
                  </div>
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-8 sm:h-10 w-auto mb-4"
                  />
                  <h2 className="text-lg sm:text-xl font-bold text-[#001571] mb-1">
                    {job.title}
                  </h2>
                  <p className="text-sm sm:text-base font-bold text-[#000000]">
                    {job.name}
                  </p>
                  <p className="text-sm sm:text-base font-bold text-[#000000] mb-4">
                    {job.city}
                  </p>
                  <p className="text-xs sm:text-sm text-[#000000] mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <button className="bg-[#001571] text-white px-3 py-2 rounded-lg font-semibold">
                      Apply Now
                    </button>
                    <button className="border-2 border-[#001571] text-[#001571] px-3 py-2 rounded-lg font-bold hover:bg-blue-800 hover:text-white transition">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
