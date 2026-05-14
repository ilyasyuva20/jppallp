"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const bulletPoints = [
  "Founded by experienced CA professionals",
  "10+ years of experience in finance & accounting",
  "200+ satisfied clients across various industries",
  "Our mission is to empower businesses with financial clarity and strategic guidance."
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white flex items-center">
      <div className="max-w-xl mr-auto w-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#0056b3] font-semibold tracking-wide uppercase text-sm mb-3"
        >
          About Us
        </motion.h3>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-[#0f2e60] mb-4 leading-snug"
        >
          JP P & Associates LLP is a leading Virtual CFO & Accounting firm helping businesses with expert financial management and growth strategies.
        </motion.h2>

        <div className="space-y-3 mt-6">
          {bulletPoints.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-3 text-slate-700"
            >
              <div className="w-5 h-5 rounded-full bg-blue-100 text-[#0056b3] flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} strokeWidth={3} />
              </div>
              <span className="text-sm font-medium">{point}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 rounded-xl overflow-hidden shadow-md border border-slate-200"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
            alt="Laptop showing financial dashboard" 
            className="w-full h-48 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
