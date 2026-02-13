"use client";

import { ShieldCheck, Sparkles, Clock, BadgeCheck } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <ShieldCheck size={26} />,
      title: "Verified Professionals",
      desc: "Trained and background-checked experts ensuring safety and reliability.",
    },
    {
      icon: <Sparkles size={26} />,
      title: "Advanced Equipment",
      desc: "We use industry-grade machines and eco-friendly cleaning solutions.",
    },
    {
      icon: <Clock size={26} />,
      title: "On-Time Guarantee",
      desc: "Punctual service delivery with structured workflow systems.",
    },
    {
      icon: <BadgeCheck size={26} />,
      title: "Quality Assurance",
      desc: "Final inspection checklist to guarantee spotless results.",
    },
  ];

  return (
    <section className="relative w-full bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-blue-600 opacity-20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-blue-400 text-sm uppercase tracking-widest font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Cleaning Excellence <br />
              <span className="text-blue-500">Redefined for Modern Spaces</span>
            </h2>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed">
            Bright World Cleaning Services combines professionalism, technology,
            and eco-conscious practices to deliver exceptional cleaning
            experiences tailored for homes and businesses.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/60 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-600 text-white mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
