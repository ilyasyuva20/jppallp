"use client";

import { motion } from "framer-motion";
import { 
  Store, 
  UtensilsCrossed, 
  ShoppingCart, 
  Factory, 
  Building2, 
  Rocket, 
  Briefcase, 
  MoreHorizontal
} from "lucide-react";

const industries = [
  { name: "Retail & Wholesale", icon: Store },
  { name: "Trading Businesses", icon: Building2 },
  { name: "Restaurants & Hotels", icon: UtensilsCrossed },
  { name: "Startups", icon: Rocket },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Service Businesses", icon: Briefcase },
  { name: "Manufacturing", icon: Factory },
  { name: "And Many More", icon: MoreHorizontal }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 px-6 bg-white border-r border-slate-100 flex items-center">
      <div className="max-w-xl ml-auto w-full">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#0056b3] font-semibold tracking-wide uppercase text-sm mb-3"
        >
          Industries We Serve
        </motion.h3>
        
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 mt-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 text-[#0f2e60] font-semibold"
            >
              <industry.icon size={20} className="text-[#2563eb]" />
              <span className="text-sm">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
