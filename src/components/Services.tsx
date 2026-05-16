"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calculator,
  LayoutDashboard,
  Coins,
  LineChart,
  ClipboardCheck,
  PieChart,
  Target
} from "lucide-react";

const services = [
  {
    title: "Virtual CFO Services",
    description: "Get expert financial guidance without hiring a full-time CFO.",
    icon: Briefcase,
  },
  {
    title: "Accounting Outsourcing",
    description: "We handle your books with care, accuracy and speed.",
    icon: Calculator,
  },
  {
    title: "MIS Reporting & Dashboards",
    description: "Clean reports that help you make better business choices.",
    icon: LayoutDashboard,
  },
  {
    title: "Cash Flow Management",
    description: "Keep your cash flow steady and your business ready to grow.",
    icon: Coins,
  },
  {
    title: "Budgeting & Forecasting",
    description: "Plan ahead with simple budgets and clear future estimates.",
    icon: LineChart,
  },
  {
    title: "GST & Compliance Support",
    description: "Stay on top of tax rules and filing deadlines.",
    icon: ClipboardCheck,
  },
  {
    title: "Financial Analysis",
    description: "Understand your numbers and find ways to improve.",
    icon: PieChart,
  },
  {
    title: "Business Registrations",
    description: "Assistance with company registrations, licenses, and business setup services.",
    icon: Target,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#0056b3] font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Our Services
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2e60] mb-4"
          >
            Comprehensive Financial Solutions
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm hover:shadow-md transition-all group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 text-[#0056b3] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0056b3] group-hover:text-white transition-all duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-[#0f2e60] mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
