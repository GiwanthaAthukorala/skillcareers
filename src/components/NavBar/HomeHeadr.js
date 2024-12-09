import Image from "next/image";
import Skills from "../../../public/img/skill.jpg";
import { useState } from "react";

export const HomeHeadr = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center ml-28">
          <Image
            src={Skills}
            alt="SKILLS CAREERS"
            width={160}
            height={120}
            className="rounded-full"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-[#001571] font-semibold">
          <a
            href="http://localhost:3000/"
            className="hover:text-blue-600 text-xl"
          >
            Home
          </a>
          <a
            href="Recruiter/RecruiterPage"
            className="hover:text-blue-600 text-xl"
          >
            Explore Recruiters
          </a>
          <a href="/AboutUs/Index" className="hover:text-blue-600 text-xl">
            About Us
          </a>
          <a
            href="/ContactUs/ContactUs"
            className="hover:text-blue-600 text-xl"
          >
            Contact Us
          </a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block ">
          <button className="bg-[#001571] px-6 py-2 text-white font-bold rounded-md mr-44  hover:bg-blue-800 transition">
            JOIN AS RECRUITER
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-blue-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col items-center bg-white shadow-md z-10 text-sm text-[#001571] md:hidden`}
      >
        <a href="#" className="hover:text-blue-600 font-bold mt-2">
          Home
        </a>
        <a href="#" className="hover:text-blue-600 font-bold mt-2">
          Explore Recruiters
        </a>
        <a href="#" className="hover:text-blue-600 font-bold mt-2">
          About Us
        </a>
        <a href="#" className="hover:text-blue-600 font-bold mt-2">
          Contact Us
        </a>

        {/* Mobile Join Button */}
        <div className="flex justify-center mt-4">
          <button className="bg-[#001571] px-10 py-2 text-white font-bold rounded-md hover:bg-blue-800 transition">
            JOIN AS RECRUITER
          </button>
        </div>
      </nav>
      <hr className="w-full border-t   border-[#001571]  mt-4" />
    </header>
  );
};
