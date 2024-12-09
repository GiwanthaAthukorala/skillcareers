import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-blue-950">
      <footer className="bg-[#00092F] container mx-auto py-10 px-4 sm:px-6 lg:px-16">
        <div className="mx-auto max-w-screen-xl space-y-5 px-2 sm:px-6 lg:space-y-8 lg:px-8">
          {/* Header Section */}
          <div className="m-2 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/img/SkillsCareers.png"
                alt="Skills Careers"
                width={150}
                height={160}
                className=""
              />
            </div>
            <p className=" ml-auto flex justify-end  text-white  font-semibold text-end sm:text-right sm:ml-auto sm:w-2/3 md:w-1/2 lg:w-3/5 leading-relaxed m-2">
              Skill Careers connects job seekers, recruiters, and assessors
              through
              <br />
              innovative digital solutions, offering a streamlined platform for
              career
              <br />
              growth and talent acquisition.
            </p>
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 border-t border-white pt-5 lg:pt-8">
            {/* Main Menu */}
            <div>
              <p className="font-bold text-white">Main Menu</p>
              <ul
                className="mt-6 space-y-4 text-sm text-white font-medium m-1
              "
              >
                <li>
                  <a
                    href="#"
                    className="transition duration-300 transform hover:-translate-y-1 hover:border-b-2 border-blue-800"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Explore Recruiters
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75 m-1">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <p className="font-bold text-white">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm text-white font-medium">
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Sustainability Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-bold text-white">Join Our Newsletter</p>
              <p className=" font-medium text-white mt-2">
                Subscribe now for the latest updates on exclusive offers, new
                packages, and bulks!
              </p>
              <div className=" px-6 py-3 mt-2 flex  flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-[#001571] text-white placeholder-white px-4 py-3 mt-2 focus:outline-none w-full sm:w-auto sm:flex-1"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-800 font-semibold px-6 py-3 mt-2 sm:mt-0 sm:ml-2 hover:bg-blue-100 transition duration-400"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>

          <hr className="m-4 w-full border-t border-gray-300 mt-6  " />

          {/* Footer Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4  md:space-y-0 ">
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <FaLinkedin
                size={24}
                className="text-white hover:text-blue-700 cursor-pointer transition duration-300"
              />
              <FaFacebook
                size={24}
                className="text-white hover:text-blue-700 cursor-pointer transition duration-300"
              />
              <FaTwitter
                size={24}
                className="text-white hover:text-blue-700 cursor-pointer transition duration-300"
              />
              <FaInstagram
                size={24}
                className="text-white hover:text-blue-700 cursor-pointer transition duration-300"
              />
            </div>

            {/* Copyright Text */}
            <p className="text-md text-white font-semibold text-center">
              © 2024 Skill Careers. All rights reserved.
            </p>

            {/* Payment Icons */}
            <div className="flex justify-center space-x-4">
              <Image
                src="/img/Visa.jpg"
                alt="Visa"
                width={40}
                height={24}
                className="h-6 cursor-pointer"
              />
              <Image
                src="/img/DinersClub.png"
                alt="Diners Club"
                width={40}
                height={24}
                className="h-6 cursor-pointer"
              />
              <Image
                src="/img/Amex.png"
                alt="Amex"
                width={40}
                height={24}
                className="h-6 cursor-pointer"
              />
              <Image
                src="/img/Discover.png"
                alt="Discover"
                width={40}
                height={24}
                className="h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
