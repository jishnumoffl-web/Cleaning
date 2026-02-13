"use client";

import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <span className="text-blue-600 text-sm uppercase tracking-widest font-semibold">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Get a Free <span className="text-blue-600">Cleaning Quote</span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-lg">
            Ready to transform your space? Contact Bright World Cleaning
            Services today. Our team will respond quickly with a customized
            cleaning solution.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-slate-600 text-sm">+91 7907617404</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-slate-600 text-sm">
                  info@brightworldcleaning.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Location</h4>
                <p className="text-slate-600 text-sm">
                  Kayamkulam,Kerala, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Service Type
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition">
                <option>Residential Cleaning</option>
                <option>Commercial Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Move In / Move Out</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Tell us about your cleaning needs..."
                className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-blue-500/30"
            >
              Request Free Quote
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
