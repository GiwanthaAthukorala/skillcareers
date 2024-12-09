import React, { useState } from "react";
import { useRouter } from "next/router";
import { BiSolidUserPin } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";

const Register = () => {
  const router = useRouter();
  const [userType, setUserType] = useState("jobSeeker");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`User type: ${userType}`);
  };

  return (
    <>
      <title>Register</title>
      <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-gray-100">
        <div className="flex flex-col md:flex-row max-w-5xl w-full h-auto mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Left Section */}
          <div
            className="hidden md:flex md:w-1/2 bg-cover bg-center p-8"
            style={{
              backgroundImage: 'url("/img/login.png")',
            }}
          >
            <div className="flex flex-col items-start justify-end p-10 text-white h-full w-full">
              <h1 className="text-3xl font-bold mb-2">Register</h1>
              <h2 className="text-3xl font-bold">SKILLS CAREERS</h2>
              <p className="text-md leading-relaxed mb-10">
                Welcome to Skill Careers, where finding your dream job or the
                right talent is just a click away.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-6 md:p-10 bg-blue-50">
            <h2 className="text-center text-2xl font-semibold mb-4">
              Join Skill Careers and Unlock New Opportunities!
            </h2>

            {/* User Type Toggle */}
            <div className="flex justify-center mb-6">
              <button
                className={`flex items-center justify-center w-1/2 font-semibold py-2 border border-r-0 rounded-l ${
                  userType === "jobSeeker"
                    ? "bg-[#001571] text-white"
                    : "bg-white text-[#001571]"
                }`}
                onClick={() => setUserType("jobSeeker")}
              >
                <BiSolidUserPin size={20} className="mr-2" />
                As a Job Seeker
              </button>
              <button
                className={`flex items-center justify-center w-1/2 font-semibold py-2 border rounded-r ${
                  userType === "recruiter"
                    ? "bg-[#001571] text-white"
                    : "bg-white text-[#001571]"
                }`}
                onClick={() => setUserType("recruiter")}
              >
                <FaBuilding size={20} className="mr-2" />
                As a Recruiter
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border text-[#001571] border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#001571] text-white rounded-lg hover:bg-[#003099] transition duration-300"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
