export default function WhyChooseUs() {
  const features = [
    {
      title: "Comprehensive Job Portal",
      description:
        "Access thousands of opportunities across multiple industries",
      image: "/img/162.png",
    },
    {
      title: "Support at Every Stage",
      description:
        "Whether you're searching for a job or hiring top talent, we're here to guide and support you.",
      image: "/img/tt.png",
    },
    {
      title: "Personalized Recommendations",
      description:
        "Get job matches tailored to your skills, experience, and preferences.",
      image: "/img/ww.png",
    },
    {
      title: "Trusted by Top Employers",
      description:
        "Join a platform where top organizations seek out the best candidates.",
      image: "/img/re.png",
    },
    {
      title: "Fast & Easy Application Process",
      description:
        "Our user-friendly platform makes applying to jobs quick and simple.",
      image: "/img/rte.png",
    },
    {
      title: "Expert Career Resources",
      description:
        "We offer career advice, resume-building tools, and skill assessments to help you stand out.",
      image: "/img/vffg.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mr-auto flex justify-start text-[#001571] mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-0 text-center cursor-pointer"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-40 object-cover rounded-sm mb-4"
              />
              <h3 className="text-xl font-bold text-[#001571] mb-2">
                {feature.title}
              </h3>
              <p className="text-[#000000] font-semibold ">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
