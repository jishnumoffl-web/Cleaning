"use client";

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Cleaning",
      desc: "Professional home cleaning to keep your living space fresh and hygienic.",
      image:
        "https://i.pinimg.com/736x/20/8b/58/208b58ae6e8caa69b87555becf715536.jpg",
    },
    {
      title: "Deep Cleaning Services",
      desc: "Thorough cleaning for kitchens, bathrooms, and hard-to-reach areas.",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
    },
    {
      title: "Commercial Cleaning",
      desc: "Reliable cleaning solutions for offices and business environments.",
      image:
        "https://i.pinimg.com/1200x/11/fb/24/11fb24abda01d67e3c843945016f67da.jpg",
    },
    {
      title: "Move In / Move Out",
      desc: "Complete cleaning service for relocation and new beginnings.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
  ];

  return (
    <section className="w-full bg-[#F4F8FC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Premium Cleaning Solutions
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Large Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>

                <button className="relative inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition">
                  Learn More
                  <span className="ml-2 transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
