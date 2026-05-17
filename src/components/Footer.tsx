"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="pt-20 pb-8 px-6 bg-[#0f2e60] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div className="lg:col-span-2 space-y-6">
          <div className="text-2xl font-black tracking-tight text-white uppercase">
            JPPA <span className="font-bold text-blue-400">Consultants LLP</span>
          </div>
          <p className="text-blue-100 leading-relaxed text-sm max-w-sm">
            Helping businesses with strategic financial management, accurate reporting and growth focused solutions.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-bold">
              In
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-bold">
              Fb
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-bold">
              Ig
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-blue-100 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Our Services</h4>
          <ul className="space-y-3 text-blue-100 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Virtual CFO Services</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accounting Outsourcing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">MIS Reporting</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cash Flow Management</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Compliance Support</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Financial Analysis</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <div className="space-y-4 text-blue-100 text-sm">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-400 shrink-0" />
              <span>172 A, NAZARETH NAGAR, Angamally, Ernakulam- 683572. Kerala, India.</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-blue-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span>+91 98473 13695</span>
                <span>+91 98957 71106</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-400 shrink-0" />
              <span>jppaconsultants@gmail.com</span>
            </div>
            <div className="pt-2">
              <p className="flex items-center gap-2"><span className="text-blue-400">🕒</span> Mon - Sat : 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center">
        <p className="text-blue-200 text-sm">
          © 2026 JPPA Consultants LLP. All Rights Reserved.
        </p>
      </div>
    </footer >
  );
}
