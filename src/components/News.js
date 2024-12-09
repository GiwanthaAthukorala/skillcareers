import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function News() {
  const newsArticles = [
    {
      title: "Tech Industry Jobs See 20% Growth in 2024",
      date: "01 Oct 2024",
      description:
        "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
      image: "/img/1.png",
    },
    {
      title: "Tech Industry Jobs See 20% Growth in 2024",
      date: "01 Oct 2024",
      description:
        "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
      image: "/img/2.png",
    },
    {
      title: "Tech Industry Jobs See 20% Growth in 2024",
      date: "01 Oct 2024",
      description:
        "The tech industry continues to boom in 2024, with a 20% increase in job openings across software development, cybersecurity, and AI-related fields. Learn more about the skills in demand and the companies leading the way in this exciting sector.",
      image: "/img/3.png",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-6 lg:py-8 bg-gray-50">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-800">
            Latest News
          </h2>
          <a
            href="#"
            className="text-blue-800 text-sm md:text-base font-semibold hover:underline"
          >
            View All
          </a>
        </div>

        {/* Articles */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured Article */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={newsArticles[0].image}
              alt={newsArticles[0].title}
              width={900}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-black mb-2">
                {newsArticles[0].title}
              </h3>
              <p className="text-sm md:text-base text-black mb-4">
                {newsArticles[0].description}
              </p>
              <button className="bg-[#001571] text-white px-4 py-2 rounded-lg font-semibold">
                <a
                  href="#"
                  className="inline-flex items-center text-white font-semibold"
                >
                  Read Now
                  <BsArrowRight className="ml-2 bg-white text-[#001571] rounded-sm" />
                </a>
              </button>
              <p className="text-sm font-bold text-black mt-4">
                {newsArticles[0].date}
              </p>
            </div>
          </div>

          {/* Smaller Articles */}
          <div className="flex flex-col gap-6">
            {newsArticles.slice(1).map((article, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  width={400}
                  height={200}
                  className="w-full h-40 md:h-auto object-cover"
                />
                <div className="p-4">
                  <h3 className="text-md md:text-lg font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-black mb-3">
                    {article.description}
                  </p>
                  <button className="bg-[#001571] text-white px-3 py-2 rounded-lg font-semibold">
                    <a
                      href="#"
                      className="inline-flex items-center text-white font-semibold"
                    >
                      Read Now
                      <BsArrowRight className="ml-2 bg-white text-[#001571] rounded-sm" />
                    </a>
                  </button>
                  <p className="text-sm font-bold text-black mt-4">
                    {article.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
