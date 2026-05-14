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
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.2] max-w-2xl md:max-w-3xl"
          > Your Trusted Financial Partner for <span className="text-blue-400">Business Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-slate-200 mb-10 max-w-lg md:max-w-2xl leading-relaxed"
          >
            We help businesses with Virtual CFO support, accounting, MIS reports, GST compliance, and financial management. Our services help you improve profits, control cash flow, and make better money decisions.
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

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-20 lg:absolute lg:bottom-0 lg:left-0 lg:right-0 border-t border-white/10 bg-[#0f2e60]/95 backdrop-blur-2xl z-20"
      >
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Experienced CA Team",
              "Clear Financial Reports",
              "Private & Professional Service"
            ].map((feature, i) => (
              <div key={i} className="flex items-center justify-center text-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="text-lg md:text-xl font-bold text-white tracking-tight group-hover:scale-105 transition-transform">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
