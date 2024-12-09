import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import Footer from "@/context/Footer";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <title>Contact Us</title>
      <div className="min-h-screen bg-[#F5F5F5]">
        <div>
          <HomeHeadr />
        </div>
        <div className="bg-[#001571]">
          <div
            className="relative h-[300px] flex items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 21, 113, 0.6), rgba(0, 21, 113, 0.6)), url('/img/ContctUs.png')",
            }}
          >
            <div className="text-white mr-96 max-w-7xl ">
              <h1 className="text-6xl font-bold mb-2">Get In Touch With Us.</h1>
              <p className="text-sm text-left">
                We'd love to hear from you! Whether you have a question,
                feedback, or just want to say hello, feel free to reach out to
                us. Our
                <br />
                team is here to help you with anything you need.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#021D79] text-white py-4">
          <div className="max-w-7xl  container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 px-4">
            <div className="flex items-center space-x-4 p-4">
              <FaEnvelope className="text-2xl" />
              <div>
                <p className="text-sm font-semibold">Email</p>
                <p>info@skillscareer.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-2xl" />
              <div>
                <p className="text-sm font-semibold">Phone</p>
                <p>0112 - 234 - 763</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl" />
              <div>
                <p className="text-sm font-semibold">Location</p>
                <p>Union Place, Colombo 07</p>
              </div>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white flex  flex-col md:flex-row  sm:flex-row  items-start justify-center  py-10 px-6">
          {/* Form */}
          <div className="bg-white w-full  mx-auto gap-4 md:w-1/2 lg:w-2/4 shadow-sm rounded-lg">
            <h2 className="text-2xl font-bold mb-6  text-[#001571] text-[Montserrat]  ">
              Still You Are In Trouble? Let's Reach Us.
            </h2>
            <form>
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-4 p-3 border rounded-md placeholder:text-[#001571]"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border rounded-md placeholder:text-[#001571]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="w-full mb-4 p-3 border rounded-md placeholder:text-[#001571]"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full mb-4 p-3 border rounded-md placeholder:text-[#001571]"
              />

              <textarea
                placeholder="Message"
                className="w-full h-auto py-32 mb-4 p-3 border rounded-md placeholder:text-[#001571] "
              ></textarea>
              <button
                type="submit"
                className="w-auto bg-[#001571] text-white py-2 px-16 rounded-sm hover:bg-blue-700 flex justify-start items-center"
              >
                Submit
              </button>
            </form>
          </div>

          <div className=" max-w-7xl mx-auto hidden md:flex  md:w-1/2 lg:w-2/4 w-2/4 h-fit gap-2  justify-center items-center">
            <div className="grid grid-cols-4 gap-1 max-w-screen-2xl">
              <img
                src="/img/Doc.png"
                alt="Doctor"
                className="rounded-lg object-cover"
              />
              <img
                src="/img/Engi.png"
                alt="Engineer"
                className="rounded-lg object-cover"
              />
              <img
                src="/img/Loyar.png"
                alt="Business"
                className="rounded-lg object-cover"
              />
              <img
                src="/img/Teac.png"
                alt="Business"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
