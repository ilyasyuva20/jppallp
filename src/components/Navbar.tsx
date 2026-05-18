"use client";

import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-[#0f2e60] text-white/90 text-xs py-2 px-4 xl:px-6 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4 xl:gap-6 min-w-0">
            <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <Phone size={14} className="shrink-0" />
              <span>+91 90374 70396, +91 98957 71106</span>
            </div>
            <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <Mail size={14} className="shrink-0" />
              <span>jppaconsultants@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5 min-w-0">
              <MapPin size={14} className="shrink-0" />
              <span className="truncate" title="172 A, NAZARETH NAGAR, Angamally, Ernakulam- 683572. Kerala, India.">
                172 A, Nazarath Nagar, Angamally, Ernakulam- 683572. Kerala, India.
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 ml-4">
            <span className="text-white/70 whitespace-nowrap">Follow Us:</span>
            <a href="#" className="hover:text-white transition-colors text-xs font-bold shrink-0">In</a>
            <a href="#" className="hover:text-white transition-colors text-xs font-bold shrink-0">Fb</a>
            <a href="#" className="hover:text-white transition-colors text-xs font-bold shrink-0">Ig</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="text-2xl font-black tracking-tight text-[#0f2e60] uppercase">
            JPPA <span className="font-bold">Consultants LLP</span>
          </div>
          <div className="text-[10px] font-semibold text-gray-500 tracking-widest uppercase mt-0.5">
            Strategic Financial Leadership
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-semibold text-slate-700 hover:text-[#0056b3] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0056b3] transition-all group-hover:w-full"></span>
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="bg-[#0f2e60] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#0f2e60]/90 transition-colors shadow-md"
          >
            Book Free Consultation
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#0f2e60]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white border-t border-gray-100 p-6 flex flex-col gap-4 absolute w-full shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-[#0f2e60] border-b border-gray-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="bg-[#0f2e60] text-white px-5 py-3 rounded-md text-center font-semibold mt-2"
          >
            Book Free Consultation
          </button>
        </motion.div>
      )}
    </nav>
  );
}
