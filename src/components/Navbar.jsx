"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-slate-900">
          <div>
            <img src="/images/logo.webp" alt="" className="h-12" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-700">
          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">
            Reviews
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-blue-500/40"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-slate-900">
          <Menu size={26} />
        </button>
      </div>
    </header>
  );
};

export default Header;
