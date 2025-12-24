import React from "react";
import {
  FaBath,
  FaCar,
  FaCocktail,
  FaConciergeBell,
  FaShuttleVan,
  FaSwimmingPool,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShuttleVan size={32} />,
    title: "Free Shuttle",
    desc: "Complimentary shuttle service to and from the airport and key local attractions.",
  },
  {
    icon: <FaCar size={32} />,
    title: "Secure Parking",
    desc: "Safe and spacious parking facilities for all our guests with 24-hour surveillance.",
  },
  {
    icon: <FaCocktail size={32} />,
    title: "Welcome Drinks",
    desc: "Enjoy a refreshing signature cocktail or mocktail upon your arrival at our hotel.",
  },
  {
    icon: <FaBath size={32} />,
    title: "Luxury Spa",
    desc: "Relax and rejuvenate with our premium spa treatments and hydrotherapy baths.",
  },
  {
    icon: <FaConciergeBell size={32} />,
    title: "24/7 Concierge",
    desc: "Our professional concierge team is always available to assist with your every need.",
  },
  {
    icon: <FaSwimmingPool size={32} />,
    title: "Infinity Pool",
    desc: "Take a dip in our temperature-controlled infinity pool with breathtaking views.",
  },
];

const Facility = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Our Services & Facilities
          </h2>
          <div className="w-20 h-1 bg-lime-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Experience world-class hospitality with our wide range of amenities
            designed for your ultimate comfort and relaxation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col items-center text-center group"
            >
              <div className="mb-6 text-lime-600 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
