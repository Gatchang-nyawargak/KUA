"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landingpage = () => {
  // Array of image paths (ensure these match actual filenames in /public/images/)
  const images = [
    "/images/ICT.jpeg",
    "/images/Girl in Tech.jpeg",
    "/images/GBV Activity.jpeg",
    "/images/ICT.jpeg",
  ];

  // Fallback image in case an image is missing
  const fallbackImage = "/images/placeholder.jpg";

  // State for current image index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Background slideshow effect
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background image slideshow */}
      <div className="absolute inset-0">
        <Image 
          src={images[currentIndex]} 
          alt="KUA Landing Image" 
          fill
          style={{ objectFit: "cover" }} 
          className="transition-opacity duration-1000 ease-in-out"
          onError={(e) => (e.currentTarget.src = fallbackImage)}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* KUA Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 text-[#FFB000]">
          Empowering Communities for a Brighter Future
        </h1>
        <p className="text-lg md:text-xl max-w-2xl leading-relaxed font-light text-gray-300">
          KUA is dedicated to transforming lives through sustainable initiatives and impactful programs. 
          Join us in making a difference!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link href="#services">
            <button className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
              Explore Our Work
            </button>
          </Link>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('openDonation'))}
            className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            💝 Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
