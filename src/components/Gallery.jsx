"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const GallerySection = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const galleryItems = [
    { type: "image", src: "/images/1.webp" },
    { type: "image", src: "/images/2.webp" },
    { type: "image", src: "/images/3.webp" },
    { type: "image", src: "/images/4.webp" },
    { type: "image", src: "/images/5.webp" },
    { type: "image", src: "/images/6.webp" },
    { type: "image", src: "/images/7.webp" },
    { type: "image", src: "/images/8.webp" },
    { type: "image", src: "/images/9.webp" },
    { type: "image", src: "/images/10.webp" },
    { type: "image", src: "/images/11.webp" },
    { type: "image", src: "/images/12.webp" },
    { type: "image", src: "/images/13.webp" },
    { type: "image", src: "/images/14.webp" },
  ];

  const firstSix = galleryItems.slice(0, 6);

  // 🔒 Lock background scroll
  useEffect(() => {
    if (showModal || activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal, activeItem]);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-black">
          Our Work Gallery
        </h2>

        {/* First 6 Items */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {firstSix.map((item, index) => (
            <div
              key={index}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer overflow-hidden rounded-xl group"
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-56 md:h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            View Full Gallery
          </button>
        </div>
      </div>

      {/* FULL GALLERY MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col h-screen">
          {/* Sticky Header */}
          <div className="flex justify-between items-center px-6 py-5 border-b bg-white sticky top-0 z-10">
            <h3 className="text-2xl font-semibold text-black">Full Gallery</h3>
            <button onClick={() => setShowModal(false)}>
              <X size={28} />
            </button>
          </div>

          {/* Scrollable Gallery */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveItem(item)}
                  className="cursor-pointer overflow-hidden rounded-xl group"
                >
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX */}
      {activeItem && (
        <div className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-6">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={32} />
          </button>

          <img
            src={activeItem.src}
            alt=""
            className="max-h-[90vh] max-w-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
