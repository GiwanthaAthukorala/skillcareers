import { BsArrowRight } from "react-icons/bs";

export default function SustainabilitySection() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start bg-white p-8 md:p-16">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold text-[#001571] mb-4">
          Commitment to a Sustainable Future
        </h2>
        <p className="text-[#001571] leading-relaxed mb-6">
          At Skill Careers, we are committed to integrating sustainability into
          every aspect of our operations. We believe that creating a positive
          impact on the environment and society is key to our long-term success
          and the well-being of future generations. Our sustainability
          initiatives focus on reducing our environmental footprint, promoting
          ethical business practices, and supporting community development.
        </p>
        <button className="bg-[#001571] m-4 mb-4 text-white px-20 py-2 rounded-sm font-semibold">
          <a
            href="#"
            className="inline-flex items-center text-white font-semibold"
          >
            Read Now
            <BsArrowRight className="ml-2 bg-white text-[#001571] rounded-sm" />
          </a>
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/img/aigenerated.png"
          alt="Sustainability Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
