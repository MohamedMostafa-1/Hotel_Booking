"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from 'react-icons/hi'

export default function Navbar() {
  const pathname = usePathname(); // الصفحة الحالية
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsScrolled(true); // أي صفحة غير الهوم → Navbar بلون ثابت
    }
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#8B5E3C] shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> 
        {/* Logo */}
        <h1 className="text-2xl font-bold text-[#FFF5E6]">
          Oasis<span className="text-[#E67E22]">View</span>
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-[#FFF5E6] font-medium">
          <li>
            <Link href="/" className="hover:text-[#E67E22]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/rooms" className="hover:text-[#E67E22]">
              Rooms
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-[#E67E22]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#E67E22]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Book Button */}
        <Link href='/rooms'>
          <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-[#FFF5E6] px-5 py-2 rounded-md transition cursor-pointer">
            Book Now
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#FFF5E6]"
        >
          {isOpen ? <X size={28} /> : <HiMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#8B5E3C] text-[#FFF5E6] px-6 py-4 space-y-4">
          <Link href="/home" onClick={() => setIsOpen(false)} className="block hover:text-[#E67E22]">
            Home
          </Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)} className="block hover:text-[#E67E22]">
            Rooms
          </Link>
          <a href="#services" onClick={() => setIsOpen(false)} className="block hover:text-[#E67E22]">
            Services
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block hover:text-[#E67E22]">
            Contact
          </a>
          <Link href='/rooms'>
            <button className="w-full bg-[#E67E22] hover:bg-[#D35400] text-[#FFF5E6] px-5 py-2 rounded-md transition cursor-pointer">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
