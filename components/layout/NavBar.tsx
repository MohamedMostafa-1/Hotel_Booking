"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // أيقونات المنيو

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#8B5E3C] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#FFF5E6]">
          Desert<span className="text-[#E67E22]">Stay</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[#FFF5E6] font-medium">
          <li>
            <a href="#home" className="hover:text-[#E67E22]">
              Home
            </a>
          </li>
          <li>
            <a href="#rooms" className="hover:text-[#E67E22]">
              Rooms
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#E67E22]">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#E67E22]">
              Contact
            </a>
          </li>
        </ul>

        {/* Book Button (Desktop) */}
        <button className="hidden md:block bg-[#E67E22] hover:bg-[#D35400] text-[#FFF5E6] px-5 py-2 rounded-md transition">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#FFF5E6]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#8B5E3C] text-[#FFF5E6] px-6 py-4 space-y-4">
          <a
            href="#home"
            className="block hover:text-[#E67E22]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#rooms"
            className="block hover:text-[#E67E22]"
            onClick={() => setIsOpen(false)}
          >
            Rooms
          </a>
          <a
            href="#services"
            className="block hover:text-[#E67E22]"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#contact"
            className="block hover:text-[#E67E22]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>

          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-[#FFF5E6] px-5 py-2 rounded-md transition">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
