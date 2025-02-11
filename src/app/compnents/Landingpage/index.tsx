"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landingpage = () => {
  // Array of image paths
  const images = [
    "/images/1.jpg",
    "/images/5.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Change the background image every 3 seconds
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
          alt="Landing Image" 
          fill
          style={{ objectFit: "cover" }} 
          className="transition-opacity duration-1000 ease-in-out"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide mb-6 animate__animated animate__fadeInUp text-[#FFB000]">
          Empowering Futures, Enriching Lives
        </h1>
        <p className="text-lg md:text-xl max-w-2xl animate__animated animate__fadeInUp animate__delay-1s leading-relaxed font-light text-gray-300">
          De South Ltd provides premium procurement, logistics, and rental solutions. 
          Specializing in emergency and humanitarian needs, we are committed to delivering 
          excellence, integrity, and innovation in every service.
        </p>
        <Link href="#services">
          <button className="px-8 py-3 mt-8 text-lg font-semibold bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] rounded-full shadow-md hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp animate__delay-2s">
            Explore Our Services
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;
