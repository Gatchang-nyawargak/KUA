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

  // Array of navigation items
  const navItems = [
    { label: "Home", href: "/", scrollTarget: "home" },
    { label: "About", href: "#about", scrollTarget: "about" },
    { label: "Services", href: "#services", scrollTarget: "services" },
    { label: "Team", href: "#team", scrollTarget: "team" },
    { label: "Contacts", href: "#contacts", scrollTarget: "contacts" },
  ];

  return (
    <nav className="flex p-2 bg-white justify-between px-3 items-center w-full shadow-md sticky top-0 z-50">
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
      {/* Desktop Menu */}
      <ul className="hidden lg:flex text-xl text-gray-700 cursor-pointer pl-3">
        {navItems.map((item, index) => (
          <li key={index} className="mx-5 text-[24px]">
            <Link
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleScroll(item.scrollTarget);
                handleLinkClick(item.href);
              }}
              className={`${
                activeLink === item.href ? "text-blue-600 font-bold" : "text-gray-700"
              } hover:text-blue-600`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden absolute top-16 left-0 right-0 bg-white flex flex-col text-gray-700 text-xl p-5 space-y-2">
          {navItems.map((item, index) => (
            <li key={index} className="py-2 text-[24px]">
              <Link
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll(item.scrollTarget);
                  handleLinkClick(item.href);
                  toggleMenu();
                }}
                className={`${
                  activeLink === item.href ? "text-blue-600 font-bold" : "text-gray-700"
                } hover:text-blue-600`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

