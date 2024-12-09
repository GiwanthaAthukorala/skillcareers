import React from "react";

const categories = [
  { name: "Technology & Development", image: "/Categorie/1.png" },
  { name: "Operations & Logistics", image: "/Categorie/2.png" },
  { name: "Finance & Accounting", image: "/Categorie/3.png" },
  { name: "Education & Training", image: "/Categorie/4.png" },
  { name: "Human Resources", image: "/Categorie/5.png" },
  { name: "Marketing & Sales", image: "/Categorie/6.png" },
  { name: "Health & Wellness", image: "/Categorie/7.png" },
  { name: "Education & Training", image: "/Categorie/8.png" },
  { name: "Operations & Logistics", image: "/Categorie/9.png" },
];

const CategoriesSection = () => {
  return (
    <section className="bg-white p-6 sm:p-10 md:p-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-lg md:text-xl font-bold text-[#001571]">
            Categories
          </h2>
          <a
            href="/CategoriesPage/CategoriesPage"
            className="text-[#001571] font-bold  hover:underline flex items-center text-xl sm:text-base"
          >
            View All <span className="ml-1">➔</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-10 h-10 sm:w-10 sm:h-10 md:w-10 md:h-10 object-cover rounded-full"
              />

              <span className="text-[#001571] text-sm sm:text-base md:text-lg font-medium">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
