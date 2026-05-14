"use client";

import { motion } from "framer-motion";
import { Search, LineChart, LayoutDashboard, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Understand Your Business",
    description: "We learn about your business, your market, and your past finances. This helps us understand what you need.",
    icon: Search,
  },
  {
    number: "2",
    title: "Review Financial Performance",
    description: "We check your financial data to find trends, strengths, weak points, and areas that need attention.",
    icon: LineChart,
  },
  {
    number: "3",
    title: "Set Up Reporting Systems",
    description: "We create simple and reliable MIS and accounting systems so your reports are accurate and on time.",
    icon: LayoutDashboard,
  },
  {
    number: "4",
    title: "Support Business Growth",
    description: "Using the results, we share clear advice to improve profits and help your business grow steadily.",
    icon: Rocket,
  },
];

export default function HowWeWork() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-[#0f2e60] mb-4 uppercase tracking-tight"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            Our simple process for better financial results
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Chevron Background */}
              <div className="absolute -left-4 -top-4 w-full h-16 bg-[#0f2e60]/5 rounded-r-full -z-10 group-hover:bg-[#0f2e60]/10 transition-colors" 
                   style={{ clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)" }} 
              />
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white shadow-lg border border-slate-100 rounded-xl flex items-center justify-center shrink-0 group-hover:border-blue-400/50 transition-colors">
                  <step.icon size={28} className="text-[#0f2e60]" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#0f2e60] mb-3 flex items-center gap-2">
                    <span className="text-blue-500 font-black">{step.number}.</span> {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-sm text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
