import React from "react";
import { TbWorldSearch } from "react-icons/tb"; // Importing the TbWorldSearch icon
import { RiBuilding4Fill } from "react-icons/ri"; // Importing the RiBuilding4Fill icon

export default function HomeAbout() {
  return (
    <>
      <div className="bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <div className="relative bg-[#000c3e] z-4">
          <div
            className="bg-[#000c3e] bg-opacity-60 bg-cover bg-center h-[60vh] flex items-center justify-center"
            style={{
              backgroundImage: "url('/img/abv.png')",
              backgroundBlendMode: "overlay ",
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mr-auto p-2 text-start text-white font-[Montserrat] flex justify-start">
              Empowering Careers, <br />
              Connecting Talent with Opportunity.
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#000C3E] p-8">
        <div className=" max-w-7xl ontainer mx-auto px-16 py-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
            <div className="col-span-2 w-full text-left pr-2 text-white">
              <h1 className="text-2xl font-bold mb-4 lg:text-left md:text-left sm:text-center">
                Who We Are
              </h1>
              <p className="text-lg mb-8 leading-loose text-justify">
                At Skill Careers, we believe that finding the right job or the
                right talent should be seamless and efficient. Founded with the
                mission to bridge the gap between job seekers and recruiters, we
                are committed to offering a platform that is both easy to use
                and highly effective. Whether you're a job seeker looking to
                advance your career or a recruiter seeking top talent, Skill
                Careers is here to support you every step of the way.
              </p>
            </div>
            <div className="flex justify-between mb-5 pr-5">
              <img
                src="/img/Doca.png"
                alt="Image 1"
                className=" w-1/2 lg:w-1/3 md:w-1/3 sm:w-1/2 m-2 lg:m-5 md:m-5 sm:m-5"
              />
              <img
                src="/img/curli.png"
                alt="Image 2"
                className="w-1/2 lg:w-1/3 md:w-1/3 sm:w-1/2 m-2 lg:m-5 md:m-5 sm:m-5"
              />
              <img
                src="/img/rob.png"
                alt="Image 3"
                className="w-1/2 lg:w-1/3 md:w-1/3 sm:w-1/2 m-2 lg:m-5 md:m-5 sm:m-5"
              />
            </div>
          </div>
          <div className="col-span-2 w-full text-left pr-2 text-white">
            <h1 className="text-2xl font-bold mb-4 lg:text-left md:text-left sm:text-center">
              What We Offer
            </h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 p-8">
            <div className="bg-white p-8 rounded shadow">
              <TbWorldSearch size={30} color="#001571" />
              <h2 className="text-2xl mt-2 font-bold mb-4 text-[#001571]">
                For Job Seekers
              </h2>
              <p className="font-bold text-lg">
                Skill Careers provides access to thousands of job opportunities
                across various industries. Our personalized job recommendations,
                career development resources, and advanced search tools help you
                find the perfect role that matches your skills and goals.
              </p>
            </div>

            <div className="bg-white p-8 rounded shadow">
              <RiBuilding4Fill size={30} color="#001571" />
              <h2 className="text-2xl mt-2 font-bold mb-4 text-[#001571]">
                For Recruiters
              </h2>
              <p className="font-bold text-lg">
                Our platform offers tailored recruitment packages, allowing
                companies to post jobs, access candidate databases, and utilize
                assessment tools for efficient hiring. From small businesses to
                large enterprises, Skill Careers helps you find and connect with
                top talent quickly and effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
