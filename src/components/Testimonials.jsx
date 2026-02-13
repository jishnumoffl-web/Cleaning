"use client";

import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Menon",
      role: "Home Owner",
      review:
        "Bright World Cleaning Services exceeded my expectations. My home has never looked this spotless. Highly professional team!",
    },
    {
      name: "Anjali Nair",
      role: "Office Manager",
      review:
        "Their commercial cleaning service is outstanding. Punctual, detailed, and extremely reliable.",
    },
    {
      name: "Faisal Khan",
      role: "Apartment Resident",
      review:
        "The deep cleaning service completely transformed my space. Worth every rupee!",
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">
            Client Reviews
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Customers{" "}
            <span className="text-blue-600">Say About Us</span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg">
            We take pride in delivering exceptional cleaning services that leave
            a lasting impression.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-relaxed mb-6">
                “{item.review}”
              </p>

              {/* Client */}
              <div>
                <h4 className="font-semibold text-slate-900">{item.name}</h4>
                <span className="text-sm text-slate-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
