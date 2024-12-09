// import { jobData } from "@/lib/jobsSwiper";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSquareArrowDown } from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import { FaMedal } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import Footer from "@/context/Footer";

export default function CandidateProfile() {
  //const jobData = jobData;

  return (
    <>
      <title>Candidate Profile</title>
      <HomeHeadr />
      <div className="bg-[#e6e8f1] p-10">
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg pb-1">
          <div className="h-56 relative">
            <Image
              src="/img/cover1.png"
              alt="cover"
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-start space-y-4 pl-10">
            <div className="absolute transform -mt-16 rounded-full border-4 border-[#001571] overflow-hidden w-[180px] h-[180px] flex items-center justify-center">
              <Image
                src="/img/Ellipse47.png"
                alt="Candidate Logo"
                width={180}
                height={180}
                className="rounded-full"
              />
            </div>
            <div className="flex space-x-4 pr-20 mt-12 md:mt-0 ml-auto items-end">
              <img
                src="/social/Linkind.png"
                alt="linkedin"
                className="w-auto"
              />
              <img src="/social/XXXX.png" alt="xapp" className="w-auto" />
              <img
                src="/social/Instrgram.png"
                alt="instagram"
                className="w-auto"
              />
              <img
                src="/social/facebook.png"
                alt="facebook"
                className="w-auto"
              />
              <img src="/social/gitHub.png" alt="facebook" className="w-auto" />
              <img
                src="/social/Bascutball.png"
                alt="facebook"
                className="w-auto"
              />
            </div>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-10 pt-24 rounded-md bg-white">
            <div className="w-2/3">
              <h2 className="text-2xl font-bold">Alan Fernando</h2>
              <p className="text-black font-semibold">
                Senior UI/UX Engineer | AI/ML Enthusiast
              </p>
            </div>
            <div className="flex gap-1 mt-6 ml-auto pr-16 justify-end">
              <button className="flex items-center justify-center bg-[#001571] text-white font-medium space-x-16 px-4 py-2 rounded-md shadow-md hover:bg-blue-800 transition w-full">
                Download CV
                <span className="ml-2 bg-white text-[#001571] p-1 rounded-full">
                  <FaDownload />
                </span>
              </button>

              {/* Send Email Button */}
              <button className="flex items-center justify-center bg-[#001571] text-white font-medium   px-12 py-2 rounded-md shadow-md hover:bg-blue-800 transition w-full  ">
                Send an Email
                <span className="ml-2 bg-white text-[#001571] p-1 rounded-full">
                  <MdEmail />
                </span>
              </button>
            </div>
          </div>
          <div className="text-left space-y-4 pl-10 mt-6 mb-6">
            <p className="text-xl font-bold text-[#001571] ">
              Personal Profile
            </p>
            <p className="pl-2 pr-2">
              I am a dedicated and results-driven Senior UX/UI Designer with
              over 5 years of experience in creating user-friendly and
              aesthetically pleasing digital products. My expertise lies in
              designing intuitive interfaces for web and mobile applications,
              conducting user research, and collaborating with cross-functional
              teams to deliver seamless user experiences. I have a passion for
              combining creativity with data-driven insights to solve complex
              design challenges.
            </p>
          </div>
        </div>

        <div className="max-w-7xl p-6 mt-5 mx-auto bg-white shadow-lg rounded-lg pb-4">
          <h1 className="text-xl font-bold text-[#001571] mb-6">Bio Data</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-800">
            <div>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Birthday -</span> 20 Aug 2000
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Nationality -</span> Sri Lankan
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Languages -</span> Sinhala, English,
                Tamil
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Address -</span> Mawathagama,
                Kurunegala
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Age -</span> 26 Years
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Marital Status -</span> Unmarried
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold">Religion -</span> Christianity
              </p>
              <p className="mb-2 text-lg text-black">
                <span className="font-bold ">Ethnicity -</span> South Asian
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mt-6 mx-auto bg-white shadow-lg rounded-lg pb-5">
          <div className="text-left pl-8 ">
            <p className="text-xl font-bold text-[#001571] pt-5">Experience</p>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-6 pt-10 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                Senior UX/UI Designer – InnovateTech Solutions
              </p>
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2023 - Jan 2024</p>
            </div>
          </div>
          <div className=" w-3/4 text-left space-y-4 pl-8 mb-5">
            <p>
              Led the design of multiple high-profile web and mobile
              applications, focusing on enhancing user experience and product
              usability. Collaborated with cross-functional teams, including
              developers and product managers, to deliver seamless solutions.
              Conducted user research, created wireframes, and built interactive
              prototypes.
            </p>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-6 pt-5 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                Senior UX/UI Designer – InnovateTech Solutions
              </p>
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2023 - Jan 2024</p>
            </div>
          </div>
          <div className=" w-3/4 text-left space-y-4 pl-8 mb-5">
            <p>
              Led the design of multiple high-profile web and mobile
              applications, focusing on enhancing user experience and product
              usability. Collaborated with cross-functional teams, including
              developers and product managers, to deliver seamless solutions.
              Conducted user research, created wireframes, and built interactive
              prototypes.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mt-6 mx-auto bg-white shadow-lg rounded-lg pb-6">
          <div className="text-left pl-8 ">
            <p className="text-xl font-bold text-[#001571] pt-5">Education</p>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-6 pt-10 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                MSc in Human Computer Interaction
              </p>
              <p>University of Colombo, Sri Lanka</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2019 - Jan 2021</p>
            </div>
          </div>

          <div className="flex flex-col-2 items-start gap-4 p-6 pt-5 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                Bachelor of Science in Graphic Design
              </p>
              <p>University of Colombo, Sri Lanka</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2014 - Jan 2019</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mt-6 mx-auto bg-white shadow-lg rounded-lg pb-6">
          <div className="text-left pl-8 ">
            <p className="text-xl font-bold text-[#001571] pt-5">
              Licenses & Certifications
            </p>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-6 pt-10 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                Google UX Design Professional Certificate
              </p>
              <p>Google</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2022</p>
            </div>
          </div>
          <div className="flex flex-col-2 items-start gap-4 p-6 pt-5 rounded-md bg-white">
            <div className="w-2/3">
              <p className="text-base font-bold">
                Certified User Experience Professional (CUXP)
              </p>
              <p>CUXP</p>
            </div>
            <div className="flex gap-3 ml-auto justify-end ">
              <p className="text-base font-bold">Jan 2021</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mt-5 mx-auto bg-white shadow-lg rounded-lg pb-4">
          <div className="text-left pl-8 ">
            <p className="text-xl font-bold text-[#001571] pt-5">Soft Skills</p>
          </div>
          <div className="flex flex-wrap gap-4 m-4">
            {[
              "UX Design",
              "UI Design",
              "Wireframing",
              "Prototyping",
              "User Research",
              "Visual Design",
              "Front-end Development",
            ].map((skill) => (
              <div
                key={skill}
                className="text-blue-900 bg-[#E6E8F1] font-bold rounded-lg px-4 py-2 flex items-center"
              >
                <FaMedal size={18} className="mr-2" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mt-5 mx-auto bg-white shadow-lg rounded-lg pb-4">
          <div className="text-left pl-8 ">
            <p className="text-xl font-bold text-[#001571] pt-5">
              Professional Expertise
            </p>
          </div>
          <div className="flex flex-wrap gap-4 m-4">
            {[
              "Figma",
              "Adobe XD",
              "Adobe Illustrator",
              "Adobe Photoshop",
              "Miro",
              "Invision",
              "Zaplin",
              "Azure",
              "Jira",
              "Trello",
              "VS Code",
            ].map((skill) => (
              <div
                key={skill}
                className="text-blue-900 bg-[#E6E8F1] font-bold rounded-lg px-4 py-2 flex items-center"
              >
                <FaMedal size={18} className="mr-2" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
