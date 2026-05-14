"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const bulletPoints = [
  "Experienced CA team",
  "Custom financial support",
  "Clear MIS and financial reports",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with Realistic Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/about_conference_room.png"
              alt="About JPPA Consultants"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2e60]/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                ABOUT US
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-[#0f2e60] leading-tight mb-6">
                About JPPA Consultants LLP
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <p>
                JPPA Consultants LLP is a Virtual CFO and accounting firm. We help businesses manage money better, keep records clear, and plan for growth.
              </p>
              <p>
                Our experienced CA team gives practical support for accounting, MIS reports, GST filing, budgeting, and cash flow management.
              </p>
              <p>
                We share clear financial insights that help business owners make smart decisions, improve profits, and build steady growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 pt-4"
            >
              {bulletPoints.map((point, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-[#0f2e60] font-bold text-lg">{point}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
