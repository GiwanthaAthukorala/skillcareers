import React, { useState } from "react";
import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import { FiUpload } from "react-icons/fi";

const ApplicationForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
  };

  return (
    <>
      <title>Apply Form</title>

      <div className="min-h-screen bg-[#F5F5F5]">
        <div>
          <HomeHeadr />
        </div>

        <div className="relative">
          <img
            src="/img/webApply.png"
            alt="Cover"
            className="max-w-full  mx-auto w-full h-auto"
          />
        </div>

        <div className=" relative -mt-64 md:-mt-56 px-4 md:px-8">
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#001571]">
              Apply for Aerfin Technologies
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Job Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Select Job
                </label>
                <select
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Select job from the listing
                  </option>
                  <option value="job1">Job 1</option>
                  <option value="job2">Job 2</option>
                  <option value="job3">Job 3</option>
                </select>
              </div>

              <div className=" border-dashed border-2 border-gray-300 rounded-md p-4 text-center cursor-pointer">
                <label htmlFor="resume" className="cursor-pointer">
                  <input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <div className="flex flex-col items-center justify-center">
                    <FiUpload className="w-10 h-10 text-[#001571]" />
                    <p className="text-sm text-[#001571]">
                      {file
                        ? file.name
                        : "Click or drag file to this area to upload"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Please make sure to upload a PDF
                    </p>
                  </div>
                </label>
              </div>

              {/* Input Fields */}
              <div>
                <label className="block text-sm font-medium text-[#001571]">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#001571]">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#001571]">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#001571]">
                  Contact Number
                </label>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  required
                  className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-[#001571] focus:border-blue-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-start space-y-4 md:space-y-0">
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#001571] text-white font-bold rounded-md hover:bg-[#001571] w-full md:w-auto"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-white text-[#001571]  rounded-md font-bold hover:bg-gray-400 w-full md:w-auto border-4 border-[#001571]"
                  onClick={() => window.history.back()}
                >
                  Back to Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationForm;
