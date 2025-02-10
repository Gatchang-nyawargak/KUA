"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landingpage = () => {
  // Array of image paths – add as many images as you like
  const images = [
    "/images/1.jpg",
    "/images/5.jpg",
    "/images/3.jpg",
    "/images/4.jpg"
  ];

  // State to track the current image index
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Change the background image every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background image slideshow */}
      <div className="absolute inset-0">
        <Image 
          src={images[currentIndex]} 
          alt="Landing Image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4 animate__animated animate__fadeInUp text-[#FFB000]">
          Empowering Futures, Enriching Lives
        </h1>
        <p className="text-xl animate__animated animate__fadeInUp animate__delay-1s">
          At De South Ltd is a network of women with a goal to provide top-notch products and exceptional customer service.<br />
          We take pride in delivering customized high-quality products at the right size and prize
        </p>
        <Link href="#products" passHref>
          <button className="px-6 py-3 mt-8 md:mt-10 text-base md:text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 font-nunito">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Landingpage;

