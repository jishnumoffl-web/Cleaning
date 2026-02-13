"use client";

import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Bright World
              <span className="text-blue-500"> Cleaning</span>
            </h3>

            <p className="text-sm leading-relaxed text-slate-400">
              Professional and eco-friendly cleaning services for homes and
              businesses. Delivering spotless results with reliability and care.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-600 transition">
                <Facebook size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-600 transition">
                <Instagram size={18} />
              </a>
              <a className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-600 transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 transition cursor-pointer">
                Residential Cleaning
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Commercial Cleaning
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Deep Cleaning
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Move In / Move Out
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-blue-500 transition cursor-pointer">
                About Us
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Services
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Testimonials
              </li>
              <li className="hover:text-blue-500 transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="mt-1 text-blue-500" />
                <span>+91 7907617404</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="mt-1 text-blue-500" />
                <span>info@brightworldcleaning.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-blue-500" />
                <span>Kayamkulam,Kerala, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bright World Cleaning Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
