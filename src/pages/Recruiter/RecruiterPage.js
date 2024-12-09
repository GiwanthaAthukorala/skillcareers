"use client";
import { useState } from "react";
import Image from "next/image";
import { recruiters } from "@/lib/recruiters";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { TbUserHexagon } from "react-icons/tb";
import { PiSealCheckFill } from "react-icons/pi";
import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Footer from "@/context/Footer";

export default function RecruiterListComponent() {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(recruiters.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentRecruiters = recruiters.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <title>Recruiter List </title>
      <div>
        <div>
          <HomeHeadr />
        </div>
        <h2 className=" max-w-7xl mx-auto text-2xl md:text-4xl font-bold text-[#8A93BE] m-12 mb-4">
          Find Your <span className="text-[#001571] font-bold">Perfect </span>
          Recruiter
        </h2>

        <section className="bg-[#E6E8F1] py-2 px-4 sm:px-4 max-w-7xl mx-auto my-6 rounded-md">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Easily find the recruiter you’re looking for..."
              className="flex-1 px-4 py-2 rounded-md border text-[#5462A0] bg-[#E6E8F1] border-[#E6E8F1] focus:outline-none focus:ring focus:ring-[#001571]"
            />
            <button className="flex items-center gap-2 px-6 py-3 bg-[#001571] text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
              <img
                src="/social/Icon.png"
                alt="Search Icon"
                className="w-6 h-6"
              />

              <span className="text-lg font-semibold bg-[#001571]">Search</span>
            </button>
          </div>
        </section>

        {/* Filters */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6">
          <select className="px-4 py-2 rounded-md border text-[#FFFFFF] bg-[#001571] font-bold border-gray-300">
            <option>Industry Specialization</option>
          </select>
          <select className="px-4 py-2 rounded-md border bg-[#001571] text-[#FFFFFF] font-bold border-gray-300">
            <option>Employee Range</option>
          </select>
          <select className="px-4 py-2 rounded-md border bg-[#001571] text-[#FFFFFF] font-bold border-gray-300">
            <option>Job Types</option>
          </select>
        </div>

        <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
          <div className="flex flex-col md:flex-row mb-6 justify-between">
            <h2 className="text-xl font-bold text-[#001571]">Search Results</h2>
            <p className="text-[#001571] text-lg font-semibold mt-2 md:mt-0">
              145 Results
            </p>
          </div>

          <div className="space-y-6">
            {currentRecruiters.map((recruiter) => (
              <div
                key={recruiter.id}
                className="border rounded-lg bg-white hover:bg-[#EDF0FF] p-6 shadow-md"
              >
                <p className="text-black font-semibold text-right">
                  Member Since {recruiter.memberSince}
                </p>
                <div className="flex gap-4 mt-4 justify-end ">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-[#001571] hover:text-blue-300" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter className="text-2xl hover:text-blue-300 text-[#001571] " />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-2xl hover:text-blue-300 text-[#001571]" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="text-2xl hover:text-blue-300 text-[#001571]" />
                  </a>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="flex-shrink-0 mt-5 lg:mt-0 md:pt-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-center mx-auto">
                    <Image
                      src={recruiter.image}
                      alt={`${recruiter.name} logo`}
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row md:flex-row justify-between items-end lg:items-center md:items-center">
                      <h3 className="flex text-xl text-center font-bold text-[#001571]">
                        {recruiter.name}
                        <span className="ml-2 mt-1">
                          <PiSealCheckFill size={20} />
                        </span>
                      </h3>
                      <div className="flex gap-4 mt-4 justify-end">
                        {recruiter.socialLinks?.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className="text-gray-500 hover:text-blue-900"
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-2">
                      <div className="flex items-center gap-2">
                        <FaLocationDot size={20} className="text-[#001571]" />
                        <p className="text-black font-semibold">
                          {recruiter.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <BiSolidCategory size={20} className="text-[#001571]" />
                        <p className="text-black font-semibold">
                          {recruiter.industry}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <TbUserHexagon size={20} className="text-[#001571]" />
                        <p className="text-black font-semibold">
                          {recruiter.employees}
                        </p>
                      </div>
                    </div>

                    <p className="text-black mt-8 mb-6 text-justify">
                      {recruiter.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <button className="flex items-center bg-[#001571] text-white px-4 py-2 rounded-md">
                        <FaPhoneAlt className="mr-2" />
                        {recruiter.phone}
                      </button>
                      <button className="flex items-center bg-[#001571] text-white px-4 py-2 rounded-md">
                        <FaEnvelope className="mr-2" />
                        {recruiter.email}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-4 justify-end">
                  <Link href="" passHref>
                    <button
                      className="text-[#001571] border-[#001571] border-2 px-4 py-2 rounded-md"
                      onClick={() =>
                        (window.location.href =
                          "/RecruiterProfile/RecruiterProfile")
                      }
                    >
                      <p className="flex text-lg font-bold">
                        View Profile
                        <span className="ml-3 mt-1 font-bold text-lg">
                          <BsArrowUpRightCircleFill />
                        </span>
                      </p>
                    </button>
                  </Link>
                  <button
                    className="bg-[#001571] font-semibold text-lg text-white px-6 py-2 rounded-md"
                    onClick={() =>
                      (window.location.href = "/JobDetails/JobDetails")
                    }
                  >
                    Open Jobs
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <ul className="flex flex-wrap space-x-2">
              {[...Array(totalPages).keys()].map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`cursor-pointer ${
                    currentPage === pageNumber + 1
                      ? "text-[#001571] font-semibold"
                      : "text-gray-600"
                  }`}
                  onClick={() => handlePageChange(pageNumber + 1)}
                >
                  {pageNumber + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
