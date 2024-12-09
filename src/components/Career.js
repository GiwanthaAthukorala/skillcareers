import { useState, useEffect } from "react";
import Image from "next/image";
import { FeaturedJobs } from "./FeaturedJobs";
import {
  MagnifyingGlassCircleIcon,
  AcademicCapIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

const GIRL_IMAGE = "/img/Girl.png";
// const BOX = "/img/box.png";

export const Career = () => {
  const [value, setValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { label: "Sri Lanka", value: 1, flag: "https://flagcdn.com/w20/lk.png" },
    { label: "UK", value: 2, flag: "https://flagcdn.com/w20/gb.png" },
    { label: "Australia", value: 3, flag: "https://flagcdn.com/w20/au.png" },
    { label: "New Zealand", value: 4, flag: "https://flagcdn.com/w20/nz.png" },
    { label: "India", value: 5, flag: "https://flagcdn.com/w20/in.png" },
    { label: "Malaysia", value: 6, flag: "https://flagcdn.com/w20/my.png" },
    { label: "Dubai", value: 7, flag: "https://flagcdn.com/w20/ae.png" },
  ];

  const handleSelect = (option) => {
    setValue(option.label);
    setIsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto bg-white py-8 lg:py-24 px-4 sm:px-8 relative overflow-hidden">
        {/* Background Image */}
        <img
          src="/img/Group.png"
          alt="Background Pattern"
          className="absolute inset-0 bg-cover bg-center opacity-5"
        />

        <section>
          <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
            {/* Left Section */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-9xl lg:text-5xl font-bold text-[#8A93BE] mb-4 text-center lg:text-left">
                Your Future <span className="text-[#001571]">Starts Here!</span>
              </h1>
              <p className="text-[#001571] mb-12 text-lg text-center lg:text-left">
                Explore personalized job opportunities, expert tools, and
                connections with top companies to advance your career with Skill
                Careers.
              </p>

              {/* Dropdown for Country Selection */}
              <div className="relative mb-4 dropdown-container">
                <button
                  className="w-full lg:w-72 bg-gray-100 border border-gray-300 text-gray-700 py-3 px-4 rounded-md flex items-center justify-between focus:outline-none"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>{value || "Select the country"}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06-.02l4.24 4.243 4.243-4.243a.75.75 0 111.06 1.06l-4.243 4.243a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01-.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-10">
                    {options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSelect(option)}
                      >
                        <img
                          src={option.flag}
                          alt={`${option.label} flag`}
                          className="w-5 h-5 mr-2"
                        />
                        <span>{option.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row mb-24 ">
                <input
                  type="text"
                  placeholder="Search by job title, keywords, or company."
                  className="flex-1 bg-gray-100 border border-gray-300 text-[#5462A0] placeholder:text-[#5462A0] py-5 px-9 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-[#001571] flex items-center gap-2 text-white py-4 px-8 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-800 focus:outline-none">
                  <img
                    src="/social/Icon.png"
                    alt="Search Icon"
                    className="w-6 h-6"
                  />

                  <span className="text-lg font-semibold ">Search</span>
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start mt-10 mb-24 gap-4">
                <div className="flex -space-x-2 mb-4 sm:mb-0">
                  <img
                    src="/img/Ellipse 1.png"
                    alt="User 1"
                    className="w-15 h-15 rounded-full border-2 border-white "
                  />
                  <img
                    src="/img/Ellipse 2.png"
                    alt="User 2"
                    className="w-15 h-15 rounded-full border-2 border-white"
                  />
                  <img
                    src="/img/Ellipse 3.png"
                    alt="User 3"
                    className="w-15 h-15 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-[#001571] text-5xl  font-normal">|</p>
                <div className="ml-0 sm:ml-4 text-center sm:text-left">
                  <p className="text-[#001571] text-3xl font-bold">6K+</p>
                  <p className="text-[#001571] text-lg font-bold">
                    Active Daily Users
                  </p>
                </div>
              </div>

              <div className="flex justify-start space-x-10 py-8  cursor-pointer">
                <div className="flex flex-col items-center text-center cursor-pointer">
                  <MagnifyingGlassCircleIcon className="h-6 w-6 text-[#001571] cursor-pointer" />
                  <p className="mt-2 text-sm  font-semibold text-[#001571] cursor-pointer">
                    Advanced Job Search
                  </p>
                </div>

                <div className="flex flex-col items-center text-center cursor-pointer">
                  <AcademicCapIcon className="h-6 w-6 text-[#001571] cursor-pointer" />
                  <p className="mt-2 text-sm  font-semibold text-[#001571] cursor-pointer">
                    Career Growth Resources
                  </p>
                </div>

                <div className="flex flex-col items-center text-center cursor-pointer">
                  <LinkIcon className=" h-6 w-6 text-[#001571] cursor-pointer" />
                  <p className="mt-2 text-sm  font-semibold text-[#001571] cursor-pointer">
                    Recruiter Connections
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className=" gap-6 lg:gap-12 p-6 lg:p-12">
              <div className="flex -space-x-2 w-full lg:w-1/2">
                <Image
                  src={GIRL_IMAGE}
                  alt="Businesswoman illustration"
                  width={566}
                  height={920}
                  className=" max-w-screen-xl top-8 h-[700px] rounded-lg shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <FeaturedJobs />
      </div>
    </div>
  );
};
