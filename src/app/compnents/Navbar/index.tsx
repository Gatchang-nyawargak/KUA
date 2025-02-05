"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section: string) => {
    setActiveLink(section);
  };

  const handleScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="flex p-2 bg-white justify-between px-3 items-center w-full shadow-md sticky top-0 z-50" // <-- Added `sticky top-0 z-50` for sticky behavior
    >
      <Image
        src="/images/logo.png"
        width={80}
        height={60}
        alt="Logo"
        className="md:w-300 md:h-300"
      />
      {/* Hamburger Menu for Small Screens */}
      <button
        className="lg:hidden text-black text-3xl focus:outline-none pl-3"
        onClick={toggleMenu}
      >
        {isOpen ? "x" : "☰"}
      </button>
      {/* Full Menu (visible only on larger screens) */}
      <ul className="hidden lg:flex text-xl text-gray-700 cursor-pointer pl-3">
        <li className="mx-5 text-[24px]">
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
              handleLinkClick("/");
            }}
            className={`${
              activeLink === "/" ? "text-blue-600 font-bold" : "text-gray-700"
            } hover:text-blue-600`}
          >
            Home
          </Link>
        </li>
        <li className="mx-5 text-[24px]">
          <Link
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("about");
              handleLinkClick("#about");
            }}
            className={`${
              activeLink === "#about"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Values
          </Link>
        </li>
        <li className="mx-5 text-[24px]">
          <Link
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("services");
              handleLinkClick("#services");
            }}
            className={`${
              activeLink === "#Services"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Services
          </Link>
        </li>
        <li className="mx-5 text-[24px]">
          <Link
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("team");
              handleLinkClick("#team");
            }}
            className={`${
              activeLink === "#Team"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Team
          </Link>
        </li>
        
        <li className="mx-5 text-[24px]">
          <Link
            href="#contacts"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("contacts");
              handleLinkClick("#contacts");
            }}
            className={`${
              activeLink === "#contacts"
                ? "text-blue-600 font-bold"
                : "text-gray-700"
            } hover:text-blue-600`}
          >
            Contacts
          </Link>
        </li>
      </ul>
      {/* Mobile Menu (visible when hamburger is clicked) */}
      {isOpen && (
        <ul className="lg:hidden absolute top-16 left-0 right-0 bg-white flex flex-col text-gray-700 text-xl p-5 space-y-2">
          <li className="py-2 text-[24px]">
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
                handleLinkClick("/");
                toggleMenu();
              }}
              className={`${
                activeLink === "/" ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600`}
            >
              Home
            </Link>
          </li>
          <li className="py-2 text-[24px]">
            <Link
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
                handleLinkClick("#about");
                toggleMenu();
              }}
              className={`${
                activeLink === "#about"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:text-blue-600`}
            >
              About
            </Link>
          </li>
          <li className="py-2 text-[24px]">
            <Link
              href="#characters"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("characters");
                handleLinkClick("#characters");
                toggleMenu();
              }}
              className={`${
                activeLink === "#characters"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:text-blue-600`}
            >
              Characters
            </Link>
          </li>
          <li className="py-2 text-[24px]">
            <Link
              href="#features"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("features");
                handleLinkClick("#features");
                toggleMenu();
              }}
              className={`${
                activeLink === "#features"
                  ? "text-blue-600 font-bold"
                  : "text-gray-700"
              } hover:text-blue-600`}
            >
              Features
            </Link>
          </li>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
