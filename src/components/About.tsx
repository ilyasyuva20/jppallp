"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Strategic roadmaps for expansion",
  "Real-time financial visibility",
  "Executive-level decision support",
  "Process automation and time savings",
  "Compliance and internal controls",
  "Investor-ready documentation"
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-navy-deep/30 relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 space-y-8"
        >
          <div className="inline-block px-4 py-1 rounded-full glass text-sm font-semibold text-blue-400">
            About JPPA Consultants LLP
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Driving <span className="text-blue-500">Profitability</span> & Sustainable Growth.
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We are dedicated to empowering businesses by providing the high-level financial leadership and operational insights usually reserved for large corporations. Our Virtual CFO services bridge the gap between vision and execution.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div 
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 text-white/80"
              >
                <CheckCircle2 size={20} className="text-blue-500 shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 relative"
        >
          <div className="relative glass p-4 rounded-[2rem] overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000" 
              alt="Team Meeting" 
              className="w-full h-[400px] object-cover rounded-[1.5rem]"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-10 left-10 right-10 glass p-6 rounded-2xl flex justify-around">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Experience</div>
              </div>
              <div className="text-center border-x border-white/10 px-6">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-white/50 uppercase tracking-widest">Support</div>
              </div>
            </div>
          </div>
          
          {/* Decorative shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-30" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
