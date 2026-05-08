"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const FloatingShape = ({ className, delay = 0, duration = 6 }: { className: string, delay?: number, duration?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [-20, 20, -20],
      rotate: [0, 10, -10, 0],
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      ease: "easeInOut",
      delay 
    }}
    className={`absolute rounded-3xl blur-3xl opacity-20 ${className}`}
  />
);

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden px-6">
      {/* 3D Floating Background Elements */}
      <div className="absolute inset-0 z-0">
        <FloatingShape className="w-64 h-64 bg-blue-600 top-1/4 -left-32" delay={0} />
        <FloatingShape className="w-96 h-96 bg-purple-600 bottom-1/4 -right-48" delay={1} duration={8} />
        <FloatingShape className="w-48 h-48 bg-cyan-400 top-2/3 left-1/4" delay={2} duration={7} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-blue-400"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Next-Gen Financial Consulting
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Strategic Financial Leadership for <span className="text-blue-500">Sustainable Growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto"
        >
          Empowering businesses through comprehensive financial and operational excellence. 
          Your strategic virtual CFO and business consulting partner.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 group"
          >
            Book Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto glass px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
            View Sample Dashboard
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
