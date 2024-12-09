import Head from "next/head";
import { HomeHeadr } from "../../components/NavBar/HomeHeadr";
import { useState } from "react";
import { jobData } from "@/lib/jobsSwiper";
import Footer from "@/context/Footer";

const JobSearch = () => {
  const [value, setValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const jobs = jobData;

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

  return (
    <>
      <Head>
        <title>Job Search</title>
      </Head>
      <div>
        <div>
          <HomeHeadr />
        </div>
        <section className="bg-white py-4 px-6 max-w-7xl mx-auto">
          <div className="container mx-auto text-center">
            <div className="flex flex-col items-start justify-start py-4 space-y-2 mb-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#8A93BE]">
                Find Your <span className="text-[#001571]">Perfect</span> Job.
              </h2>
            </div>
            <div className="bg-[#E6E8F1] px-6 py-1 rounded-md mb-2">
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input
                  type="text"
                  placeholder="Easily find the job you're looking for..."
                  className="placeholder:text-[#5462A0] border px-40 p-0 w-full sm:w-1/2 rounded bg-[#E6E8F1]"
                />

                <div className="relative w-full sm:w-auto">
                  <button
                    className="w-full bg-gray-100 border border-gray-300 text-gray-700 py-3 px-8 rounded-md flex items-center justify-between focus:outline-none"
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
                <button className="bg-[#001571] text-white gap-2 px-8 py-2 rounded w-full sm:w-auto flex justify-end left-24">
                  <img
                    src="/social/Icon.png"
                    alt="Search Icon"
                    className="w-6 h-6 "
                  />
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center  gap-2 mt-4 p-4 ml-auto left-auto ">
          <select className="bg-[#001571] text-white border p-2 rounded w-full sm:w-auto px-24 ">
            <option>Industry</option>
          </select>
          <select className="bg-[#001571] text-white border p-2 rounded w-full sm:w-auto px-24">
            <option>Experience Level</option>
          </select>
          <select className="bg-[#001571] text-white border p-2 rounded w-full sm:w-auto px-24">
            <option>Salary Range</option>
          </select>
          <select className="bg-[#001571] text-white border p-2 rounded w-full sm:w-auto px-24">
            <option>Job Type</option>
          </select>
        </div>

        <section className="max-w-7xl  container mx-auto px-4 py-10">
          <div>
            <div className="flex justify-end">
              <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                <button className="px-4 py-2 bg-gray-200 text-[#001571] font-bold rounded">
                  Onsite
                </button>
                <button className="px-4 py-2 bg-gray-200 text-[#001571] font-bold rounded">
                  Hybrid
                </button>
                <button className="px-4 py-2 bg-gray-200 text-[#001571] font-bold rounded">
                  Remote
                </button>
              </div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
              {jobs.map((job) => (
                <div key={job.id} className="mb-5">
                  <div className="bg-white hover:bg-[#CAD1F1] p-4 rounded-lg shadow-lg">
                    <div className="flex justify-between items-center">
                      <p className="w-full text-right text-[#000000] text-sm font-bold">
                        {job.date}
                      </p>
                    </div>
                    <img
                      src={job.image}
                      alt="Company Logo"
                      className="h-10 w-auto mb-6"
                    />
                    <h2 className="text-xl font-bold text-[#001571] mb-1">
                      {job.title}
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-[#001571] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Full Time
                      </span>
                      <span className="bg-[#00B6B4] text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Onsite
                      </span>
                    </div>
                    <p className="text-xl font-bold text-[#000000]">
                      {job.name}
                    </p>
                    <p className="text-xl font-bold text-[#000000] mb-4">
                      {job.city}
                    </p>
                    <p className="text-[#000000] text-sm mb-4">
                      {job.description}
                    </p>
                    <div className="flex gap-4">
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
            <div className="mt-10 flex justify-center space-x-2">
              <button className="px-3 py-1 bg-gray-300 rounded">1</button>
              <button className="px-3 py-1 bg-gray-300 rounded">2</button>
              <button className="px-3 py-1 bg-gray-300 rounded">3</button>
              <button className="px-3 py-1 bg-gray-300 rounded">...</button>
              <button className="px-3 py-1 bg-gray-300 rounded">15</button>
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
