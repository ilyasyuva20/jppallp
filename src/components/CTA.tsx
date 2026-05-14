"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 px-6 bg-[#0f2e60]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 text-white"
        >
          <div className="w-16 h-16 rounded-xl border-2 border-white/20 flex items-center justify-center shrink-0">
            <Calendar size={32} className="text-white opacity-80" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-blue-200">Book your free consultation today and let&apos;s discuss how we can help you grow.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={() => window.dispatchEvent(new Event("open-booking-modal"))}
            className="bg-white text-[#0f2e60] px-8 py-4 rounded-md font-bold text-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Book Free Consultation
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
