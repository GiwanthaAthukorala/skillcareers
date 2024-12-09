import { HomeHeadr } from "@/components/NavBar/HomeHeadr";
import Footer from "@/context/Footer";
import { useState } from "react";

const categories = [
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  {
    name: "Technology & Development",
    icon: "/icons/Technology & Development.svg",
  },
  { name: "Operations & Logistics", icon: "/icons/Operations & Logistics.svg" },
  { name: "Marketing & Sales", icon: "/icons/Marketing & Sales.svg" },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
  {
    name: "Technology & Development",
    icon: "/icons/Technology & Development.svg",
  },
  { name: "Marketing & Sales", icon: "/icons/Marketing & Sales.svg" },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  {
    name: "Technology & Development",
    icon: "/icons/Technology & Development.svg",
  },
  { name: "Marketing & Sales", icon: "/icons/Marketing & Sales.svg" },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  {
    name: "Technology & Development",
    icon: "/icons/Technology & Development.svg",
  },
  { name: "Education & Training", icon: "/icons/Education & Training.svg" },
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
  {
    name: "Technology & Development",
    icon: "/icons/Technology & Development.svg",
  },
  { name: "Creative & Design", icon: "/icons/Creative & Design.svg" },
];

export default function CategoriesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <title>Categories</title>
      <div className="min-h-screen bg-[#F5F5F5] ">
        <header className="bg-white shadow-md">
          <HomeHeadr />
        </header>

        <section className="max-w-7xl container mx-auto px-4 md:px-8 py-24">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold text-[#8A93BE] m-12 mb-4">
              Search for Job{" "}
              <span className="text-[#001571] font-bold">Categories</span>
            </h2>
            <p className="text-[#8A93BE] mb-8">
              Explore the diverse range of job categories to find the perfect
              fit for your skills and interests.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center bg-[#E6E8F1] rounded-lg overflow-hidden shadow-md">
              <input
                type="text"
                placeholder="Easily find the category you're looking for..."
                className="w-full p-4 text-[#5462A0] placeholder:text-[#5462A0] bg-[#E6E8F1] focus:outline-none focus:ring focus:ring-blue-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-[#001571] text-white flex items-center gap-2 px-8 py-4 rounded-sm">
                <img
                  src="/social/Icon.png"
                  alt="Search Icon"
                  className="w-6 h-6"
                />
                Search
              </button>
            </div>
          </div>
        </section>

        <section className="max-w-7xl container p-2 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-25 md:px-6 pb-6">
          {categories
            .filter((category) =>
              category.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((category, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:shadow-lg transition duration-150"
              >
                <img
                  src={category.icon}
                  alt={category.name}
                  className="w-12 h-12 mb-2 cursor-pointer"
                />
                <h3 className="text-base md:text-lg font-medium text-[#001571] text-center">
                  {category.name}
                </h3>
              </div>
            ))}
        </section>

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-2 px-4 md:px-8 pb-12">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            1
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            2
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            3
          </button>
          <span className="px-4 py-2">...</span>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            15
          </button>
        </div>

        {/* Footer */}
        {/* Uncomment if needed */}
        {/* <footer className="bg-blue-800 text-white">
        <div className="container mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Skills Careers</h3>
            <p>
              Skill Careers connects job seekers, recruiters, and assessors
              through innovative digital solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sustainability Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded-l-lg"
              />
              <button className="bg-white text-blue-800 px-4 py-2 rounded-r-lg">
                Submit Now
              </button>
            </form>
          </div>
        </div>
        <div className="text-center py-4 bg-blue-900">
          &copy; 2024 Skills Careers. All rights reserved.
        </div>
      </footer> */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
