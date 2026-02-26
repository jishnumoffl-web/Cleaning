import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import CTASection from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Header from "@/components/Navbar";
import ServicesSection from "@/components/Services";
import TestimonialsSection from "@/components/Testimonials";
import WhyChooseSection from "@/components/Whychoose";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>

      <div id="service">
        <ServicesSection />
      </div>

      <div id="whychooseus">
        <WhyChooseSection />
      </div>

      <div id="testimonial">
        <TestimonialsSection />
      </div>

      <CTASection />

      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
