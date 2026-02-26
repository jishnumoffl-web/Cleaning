"use client";

import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Gokul vijayan",
      role: "Home Owner",
      review:
        "I am extremely happy with the service provided by Bright World Cleaning Services. They did a fantastic job cleaning my house — every corner was spotless and well-organized. The team was professional, punctual, and paid great attention to detail. I’m very satisfied with the results and would highly recommend them to anyone looking for reliable and high-quality cleaning services.",
    },
    {
      name: "Anish Raj",
      role: "Office Manager",
      review:
        "I recently engaged Bright World Cleaning Services for a complete house and tile cleaning, and I am thoroughly impressed with their work. The team was punctual, professional, and extremely detail-oriented. Every corner of the house was cleaned to perfection, and the tiles now look spotless and shining like new.They worked efficiently without compromising on thoroughness, and their courteous approach made the entire experience pleasant.I would highly recommend Bright World Cleaning Services to anyone looking for reliable, top-notch cleaning. Their dedication and results truly exceeded my expectations",
    },
    {
      name: "Anjali Prathap",
      role: "Apartment Resident",
      review:
        "Bright World team was very professional and supportive. They visited the site as scheduled, worked from 09.00am till night to complete all tasks without compromising quality, and delivered exactly what they promised. Highly recommended.",
    },
    {
      name: "Sreeja Krishna",
      role: "Apartment Resident",
      review:
        "After the tile work of the house, there was a lot of dust. When I was thinking about what to do without changing anything, I thought that deep cleaning would be good. So when I contacted them, I didn't have high hopes. But I have to say. I can't believe their service. How long did it take to clean each part of the house. I didn't think it would be so clean here. They did their job with great sincerity. I am very happy",
    },
    {
      name: "Deepa Shiju",
      role: "Apartment Resident",
      review:
        "We recently got our entire home deep cleaned @ Mannar and I can’t express how satisfied we are with the results! Every single corner — from the living room to the kitchen, bedrooms, and bathrooms — looks clean and perfect",
    },
    {
      name: "Sreeja Janardhanan",
      role: "Apartment Resident",
      review:
        "Very good service..Staffs were very cooperative. They removed dust from every corner and cleaned all the shades, kept all things were it was...it was a mess free cleaning. Thankyou so much...",
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
