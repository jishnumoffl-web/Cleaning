"use client";

import React from "react";
import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <span className="inline-block text-blue-600 mt-5 font-semibold tracking-widest text-xs uppercase">
            Bright World Cleaning Services
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight">
            Transforming Spaces
            <br />
            <span className="text-blue-600">One Clean</span> at a Time
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
            We use eco-friendly and non-toxic cleaning products to ensure the
            safety of your family and pets.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="bg-[#0066FF] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg">
              Describe More →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* Background Circle */}
          <div className="absolute w-[250px] sm:w-[320px] md:w-[380px] lg:w-[450px] h-[250px] sm:h-[320px] md:h-[380px] lg:h-[450px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          {/* Image */}
          <div className="relative z-10 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] lg:max-w-[480px]">
            <img
              src="/images/hero.webp"
              alt="Cleaning Professional"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
