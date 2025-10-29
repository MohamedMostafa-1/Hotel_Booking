"use client";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3E2F27] text-[#FFF5E6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Desert<span className="text-[#E67E22]">Stay</span>
          </h2>
          <p className="text-sm text-[#F4C27F] leading-relaxed">
            Experience the beauty of the desert with comfort and luxury.  
            Book your stay and enjoy unforgettable sunsets and warm hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-[#F4C27F] transition">Home</a></li>
            <li><a href="#rooms" className="hover:text-[#F4C27F] transition">Rooms</a></li>
            <li><a href="#services" className="hover:text-[#F4C27F] transition">Services</a></li>
            <li><a href="#contact" className="hover:text-[#F4C27F] transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-[#F4C27F]" /> 
              <span>Siwa Oasis, Egypt</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-[#F4C27F]" /> 
              <span>+20 123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-[#F4C27F]" /> 
              <span>info@desertstay.com</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#E67E22]">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-[#8B5E3C] hover:bg-[#E67E22] transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#8B5E3C] hover:bg-[#E67E22] transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-full bg-[#8B5E3C] hover:bg-[#E67E22] transition">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#8B5E3C] mt-10 pt-6 text-center text-sm text-[#F4C27F]">
        © {new Date().getFullYear()} DesertStay. All rights reserved.
      </div>
    </footer>
  );
}
