"use client";

import { motion } from "framer-motion";
import { Users, PiggyBank, LineChart, FileText, TrendingUp, ShieldCheck } from "lucide-react";

const reasons = [
  {
    title: "Experienced CA Professionals",
    description: "Expertise of qualified CA professionals with years of industry experience.",
    icon: Users,
  },
  {
    title: "Cost-Effective Solutions",
    description: "High-quality CFO services at a fraction of the cost of in-house CFO.",
    icon: PiggyBank,
  },
  {
    title: "Real-Time Financial Insights",
    description: "Timely and accurate reports to help you make better business decisions.",
    icon: LineChart,
  },
  {
    title: "Monthly Business Reports",
    description: "Detailed monthly MIS reports to track business performance.",
    icon: FileText,
  },
  {
    title: "Growth-Focused Approach",
    description: "We don't just report numbers, we help you grow your business.",
    icon: TrendingUp,
  },
  {
    title: "Confidential & Reliable",
    description: "Your data is 100% safe and handled with the highest confidentiality.",
    icon: ShieldCheck,
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0056b3] font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Why Choose Us
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0f2e60] mb-4"
          >
            Your Growth is Our Priority
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 hover:bg-slate-50 rounded-xl transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 text-[#0056b3] flex items-center justify-center">
                <reason.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0f2e60] mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
