"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-40 pb-20 lg:pt-32 lg:pb-48 overflow-hidden px-6 bg-[#0f2e60] min-h-[90vh] md:min-h-screen flex flex-col justify-center">
      {/* High-Quality Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/hero-banner.png')" }}
      />
      
      {/* Professional Overlays for Legibility */}
      <div className="absolute inset-0 bg-[#0f2e60]/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f2e60] via-[#0f2e60]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-300 font-semibold mb-6 tracking-wide text-[10px] md:text-sm uppercase backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Professional Virtual CFO Services
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2] max-w-2xl md:max-w-3xl"
          >
            Strategic Financial Partner for Your <span className="text-blue-400">Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-slate-200 mb-10 max-w-lg md:max-w-2xl leading-relaxed"
          >
            We provide end-to-end Virtual CFO, Accounting, MIS, and Compliance solutions to help you improve profitability, manage cash flow and make smarter financial decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <button 
              onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
              className="w-full sm:w-auto bg-[#2563eb] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group shadow-xl hover:shadow-blue-500/30"
            >
              Book Free Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-slate-400/40 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white transition-all flex items-center justify-center gap-2 group backdrop-blur-sm">
              Explore Services
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats Banner at the bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 border-t border-white/10 bg-[#0f2e60]/90 backdrop-blur-xl z-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-[10px] md:text-xs font-semibold text-blue-200/70 uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">200+</div>
              <div className="text-[10px] md:text-xs font-semibold text-blue-200/70 uppercase tracking-widest">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-[10px] md:text-xs font-semibold text-blue-200/70 uppercase tracking-widest">Projects Done</div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-[10px] md:text-xs font-semibold text-blue-200/70 uppercase tracking-widest">Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
