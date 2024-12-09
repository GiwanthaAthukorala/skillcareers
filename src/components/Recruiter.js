import { useState } from "react";

const Recruiterslide = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const plans = [
    {
      id: 1,
      title: "Basic Recruiter Package",
      price: "29.99",
      features: [
        "5 job postings per month",
        "Access to basic candidate profiles",
        "Payment gateway integration",
        "Limited use of assessment templates",
      ],
    },
    {
      id: 2,
      title: "Professional Recruiter Package",
      price: "49.99",
      features: [
        "20 job postings per month",
        "Access to basic candidate profiles",
        "Payment gateway integration",
        "Limited use of assessment templates",
      ],
      highlighted: true,
    },
    {
      id: 3,
      title: "Enterprise Recruiter Package",
      price: "99.99",
      features: [
        "30 job postings per month",
        "Access to basic candidate profiles",
        "Payment gateway integration",
        "Limited use of assessment templates",
      ],
    },
  ];

  const handlePackageSelection = (id) => {
    setSelectedPackage(id);
  };

  return (
    <section className="py-12 bg-gray-50 p-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#001571]">
          Recruiter Packages
        </h2>
        <p className="text-center mt-4 text-base sm:text-lg font-semibold text-[#001571]">
          Empower your hiring and assessment process with comprehensive tools
          designed to meet your goals.
        </p>

        <div className="mt-4 flex flex-col md:flex-row w-full h-[600px] justify-center gap-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`flex-1 p-6 rounded-lg border ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#0C002E] to-[#001C99] text-white shadow-lg"
                  : "bg-gradient-to-b from-[#EDF0FF] to-[#CAD1F1]"
              }`}
            >
              <h3
                className={`text-4xl sm:text-xl font-bold font-[Montserrat] text-center mb-6 text-[#001571] ${
                  plan.highlighted ? "text-white mb-6" : ""
                }`}
              >
                {plan.title}
              </h3>
              <p
                className={`mt-4 text-5xl sm:text-7xl font-bold text-center mb-10 text-[#001571] ${
                  plan.highlighted ? "text-white" : ""
                }`}
              >
                {plan.price}$
              </p>

              <ul className="mt-3 space-y-6 text-center ">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`text-center w-full border-t border-gray-300 mt-6 ${
                      plan.highlighted ? "text-white" : "text-[#001571]"
                    }`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePackageSelection(plan.id)}
                className={`mt-24 w-full py-3 rounded-md  ${
                  selectedPackage === plan.id
                    ? "bg-green-500 text-white"
                    : plan.highlighted
                    ? "bg-white text-[#001571] font-bold"
                    : "bg-[#001571] text-white font-bold"
                }`}
              >
                {selectedPackage === plan.id
                  ? "Selected"
                  : "Choose This Package"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recruiterslide;
