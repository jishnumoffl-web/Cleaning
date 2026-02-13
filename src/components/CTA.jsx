"use client";

import { Phone, CalendarCheck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative w-full py-20 lg:py-28 bg-slate-900 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-blue-600 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-24 -right-24 w-[350px] h-[350px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 text-center text-white">
        <span className="text-blue-400 text-sm uppercase tracking-widest font-semibold">
          Get Started Today
        </span>

        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
          Ready for a Spotless Space?
        </h2>

        <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
          Experience premium cleaning services with Bright World Cleaning
          Services. Book your appointment today and let our professionals handle
          the rest.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
          <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-blue-500/40">
            <CalendarCheck size={20} />
            Book Now
          </button>

          <button className="flex items-center justify-center gap-3 border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-full font-semibold transition-all">
            <Phone size={20} />
            Call Us Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
