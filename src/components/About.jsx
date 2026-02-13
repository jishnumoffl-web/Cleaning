"use client";

import { ShieldCheck, Clock, ThumbsUp, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="w-full bg-[#F8FAFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-center">
          <div className="absolute w-[280px] sm:w-[350px] md:w-[420px] h-[280px] sm:h-[350px] md:h-[420px] bg-blue-100 rounded-full blur-3xl opacity-40"></div>

          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px]">
            <img
              src="/images/about.webp" // replace with your image
              alt="About Bright World Cleaning Services"
              className="w-full h-auto object-contain rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">
          <span className="text-blue-600 font-semibold tracking-widest text-xs uppercase">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight">
            Making Spaces Shine with
            <span className="text-blue-600">
              {" "}
              Bright World Cleaning Services
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            At Bright World Cleaning Services, we are committed to delivering
            high-quality, reliable, and eco-friendly cleaning solutions. Our
            professional team ensures every corner is spotless, creating a
            healthy and refreshing environment for your home and workplace.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-4">
              <ShieldCheck className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-slate-800">
                  Trusted Professionals
                </h4>
                <p className="text-sm text-slate-600">
                  Skilled and verified cleaning experts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-slate-800">
                  On-Time Service
                </h4>
                <p className="text-sm text-slate-600">
                  We value your time and punctuality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <ThumbsUp className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-slate-800">
                  100% Satisfaction
                </h4>
                <p className="text-sm text-slate-600">
                  Customer happiness is our priority.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Users className="text-blue-600" />
              <div>
                <h4 className="font-semibold text-slate-800">
                  Experienced Team
                </h4>
                <p className="text-sm text-slate-600">
                  Years of expertise in cleaning services.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t mt-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-600">500+</h3>
              <p className="text-sm text-slate-600">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">5+</h3>
              <p className="text-sm text-slate-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-600">100%</h3>
              <p className="text-sm text-slate-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
