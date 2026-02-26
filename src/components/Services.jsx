"use client";

import { useState } from "react";

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const whatsappNumber = "917907617404"; // change this

  const services = [
    {
      title: "Residential Cleaning",
      image:
        "https://i.pinimg.com/736x/20/8b/58/208b58ae6e8caa69b87555becf715536.jpg",
      categories: [
        {
          name: "Kitchen Cleaning",
          image:
            "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200",
          desc: "Complete kitchen degreasing, cabinet cleaning, and appliance sanitization.",
        },
        {
          name: "Bathroom Cleaning",
          image:
            "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?q=80&w=1200",
          desc: "Full bathroom sanitization including tiles, toilet, sink, and mirrors.",
        },
        {
          name: "Bedroom Cleaning",
          image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200",
          desc: "Dust removal, vacuuming, bed sanitization and freshening service.",
        },
        {
          name: "Professional Water Tank Cleaning & Disinfection",
          image:
            "https://i.pinimg.com/736x/8d/27/4f/8d274f9570aacfe8c28c366be9df8876.jpg",
          desc: "Complete removal of sludge, dirt, and bacterial buildup from overhead and underground water tanks. Our process includes high-pressure cleaning and certified disinfection to ensure safe, hygienic, and odor-free water storage for residential and commercial properties.",
        },
        {
          name: "Well Cleaning & Water Source Restoration",
          image:
            "https://i.pinimg.com/736x/22/68/d1/2268d15487afabff0fc4dbe2a6b19266.jpg",
          desc: "Thorough cleaning and restoration of open and bore wells by removing sediments, debris, and harmful contaminants. Our service improves water clarity, enhances quality, and ensures a safe and reliable water source for long-term use.",
        },
      ],
    },
    {
      title: "Commercial Cleaning",
      image:
        "https://i.pinimg.com/1200x/11/fb/24/11fb24abda01d67e3c843945016f67da.jpg",
      categories: [
        {
          name: "Office Cleaning",
          image:
            "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
          desc: "Professional cleaning for offices and corporate environments.",
        },
        {
          name: "Retail Shop Cleaning",
          image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
          desc: "Complete cleaning solutions for showrooms and retail stores.",
        },
      ],
    },
    {
      title: "Deep Cleaning Services",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
      categories: [
        {
          name: "Full Home Deep Cleaning",
          image:
            "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200",
          desc: "Intensive deep cleaning for entire property with detailed sanitation.",
        },
        {
          name: "Post Renovation Cleaning",
          image:
            "https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=1200",
          desc: "Dust and debris removal after construction or renovation work.",
        },
      ],
    },
  ];

  const handleBooking = (service, category) => {
    const message = `Hello, I would like to book ${category} under ${service}.`;
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <section className="relative w-full bg-white py-20">
      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
          activeService ? "blur-md pointer-events-none select-none" : ""
        }`}
      >
        <h2 className="text-4xl font-bold text-black text-center mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  {service.title}
                </h3>

                <button
                  onClick={() => setActiveService(service)}
                  className="text-blue-600 font-semibold"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY OVERLAY */}
      {activeService && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full h-full md:h-auto md:max-w-5xl md:rounded-3xl rounded-none shadow-2xl flex flex-col overflow-hidden">
            {/* Top Header */}
            <div className="flex items-center justify-between p-5 border-b">
              <h3 className="text-lg md:text-2xl font-bold text-black">
                {!activeCategory
                  ? `${activeService.title} Categories`
                  : activeCategory.name}
              </h3>

              <button
                onClick={() => {
                  if (activeCategory) {
                    setActiveCategory(null);
                  } else {
                    setActiveService(null);
                  }
                }}
                className="text-black text-lg font-medium"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 md:p-10">
              {/* CATEGORY GRID */}
              {!activeCategory && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {activeService.categories.map((cat, index) => (
                    <div
                      key={index}
                      onClick={() => setActiveCategory(cat)}
                      className="cursor-pointer rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
                    >
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="h-40 w-full object-cover"
                      />
                      <div className="p-4">
                        <h4 className="text-base md:text-lg font-semibold text-black">
                          {cat.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* CATEGORY DETAIL */}
              {activeCategory && (
                <div>
                  <img
                    src={activeCategory.image}
                    alt={activeCategory.name}
                    className="w-full h-56 md:h-80 object-cover rounded-xl mb-6"
                  />

                  <p className="text-black leading-relaxed mb-8">
                    {activeCategory.desc}
                  </p>

                  <button
                    onClick={() =>
                      handleBooking(activeService.title, activeCategory.name)
                    }
                    className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition"
                  >
                    Book This Service on WhatsApp
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
