"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter text-white">
            JPPP <span className="text-blue-500">Consultants</span>
          </div>
          <p className="text-white/40 leading-relaxed">
            Leading business consulting firm specializing in Virtual CFO services, financial modeling, and operational excellence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-white/40">
            <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-white/40">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Virtual CFO</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">ERP Consulting</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Financial Modeling</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Let&apos;s Connect</h4>
          <div className="space-y-4 text-white/40">
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>info@jpppconsultants.com</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>+91 91XXXXXXXXXX</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-500 mt-1 shrink-0" />
              <span>Vaduthala, Kerala, India</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/20 text-sm italic">
          © 2026 JPPP Consultants LLP. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-white/20">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </footer>
  );
}
