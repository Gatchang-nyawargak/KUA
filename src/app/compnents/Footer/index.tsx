"use client";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaPhoneAlt as Phone, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail as Mail } from "react-icons/hi";
import { MdLocationOn as MapPin } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-blue-500 text-white py-10 px-5 font-sans">
      <div id="contacts" className="flex flex-wrap justify-between items-start mb-10">
        {/* Contact Section */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <div className="">
            <h3 className="mb-4 text-lg font-bold text-[26px]">Contact Us</h3>
            <div className="flex flex-col items-start space-y-4">
              {/* Phone Numbers */}
              <div className="flex flex-col space-y-2">
                <a
                  href="tel:+211910538552"
                  className="flex items-center space-x-2 text-white hover:text-gray-400"
                >
                  <Phone size={20} />
                  <span>+211 910538552</span>
                </a>
                <a
                  href="https://wa.me/211928043025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white hover:text-gray-400"
                >
                  <FaWhatsapp size={20} />
                  <span>+211 928 043 025</span>
                </a>
              </div>
              {/* Email */}
              <a
                href="mailto:Desouthcoltd@gmail.com"
                className="flex items-center space-x-2 text-white hover:text-gray-400"
              >
                <Mail size={20} />
                <span>Desouthcoltd@gmail.com</span>
              </a>
              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Juba,%20CES,%20South%20Sudan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-gray-400"
              >
                <MapPin size={20} />
                <span>Juba, CES, South Sudan</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Sections */}
        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Services</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="#services"
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Procurements
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Logistics
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Rental solutions
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Company</h3>
          <ul className="space-y-1">
            <li>
              <Link
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("home");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("about");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("services");
                }}
                className="text-white hover:text-gray-400 text-[20px]"
              >
                Services
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start mb-6 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <h3 className="mb-4 text-lg font-bold text-[26px]">Legal</h3>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="text-white hover:text-gray-400 text-[20px]">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-white hover:text-gray-400 text-[20px]">
                Terms of Use
              </Link>
            </li>
          </ul>
          <div className="flex justify-center gap-3 mt-2">
            <Link href="https://www.facebook.com" aria-label="Facebook" passHref>
              <MdFacebook className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" passHref>
              <BsTwitter className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" passHref>
              <AiFillInstagram className="text-xl sm:text-2xl text-white hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#FFB000] pt-2 mb-2 text-center relative">
        <p className="text-sm text-[#FFB000] absolute left-1/2 transform -translate-x-1/2 w-full">
          &copy; 2025 by DE SOUTH CO. LTD. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
