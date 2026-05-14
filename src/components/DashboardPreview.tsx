"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="py-20 px-6 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0f2e60] mb-4"
          >
            Dashboard & Reports Preview
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {/* Mockup 1: Sales Trend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="h-32 bg-slate-50 rounded mb-4 flex items-end justify-between p-2">
              <div className="w-2 bg-blue-200 rounded-t h-[40%]"></div>
              <div className="w-2 bg-blue-300 rounded-t h-[60%]"></div>
              <div className="w-2 bg-blue-400 rounded-t h-[30%]"></div>
              <div className="w-2 bg-blue-500 rounded-t h-[80%]"></div>
              <div className="w-2 bg-blue-600 rounded-t h-[50%]"></div>
              <div className="w-2 bg-blue-700 rounded-t h-[90%]"></div>
            </div>
            <h4 className="text-center font-bold text-[#0f2e60] text-sm">Sales Trend Analysis</h4>
          </motion.div>

          {/* Mockup 2: Expense Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="h-32 bg-slate-50 rounded mb-4 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-8 border-blue-500 border-r-green-400 border-b-yellow-400 border-l-purple-400"></div>
            </div>
            <h4 className="text-center font-bold text-[#0f2e60] text-sm">Expense Analysis</h4>
          </motion.div>

          {/* Mockup 3: Profit & Loss */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="h-32 bg-slate-50 rounded mb-4 flex items-end justify-around p-2 gap-1">
              <div className="w-4 bg-green-500 rounded-t h-[80%]"></div>
              <div className="w-4 bg-red-400 rounded-t h-[40%]"></div>
              <div className="w-4 bg-green-500 rounded-t h-[60%]"></div>
              <div className="w-4 bg-red-400 rounded-t h-[30%]"></div>
              <div className="w-4 bg-green-500 rounded-t h-[90%]"></div>
            </div>
            <h4 className="text-center font-bold text-[#0f2e60] text-sm">Profit & Loss Overview</h4>
          </motion.div>

          {/* Mockup 4: Cash Flow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200"
          >
            <div className="h-32 bg-slate-50 rounded mb-4 flex items-center justify-between p-2 relative">
               <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0,80 Q30,20 60,60 T120,40 T180,90 T240,30" fill="none" stroke="#2563eb" strokeWidth="3" />
               </svg>
            </div>
            <h4 className="text-center font-bold text-[#0f2e60] text-sm">Cash Flow Dashboard</h4>
          </motion.div>
        </div>

        <div className="text-center">
          <button className="bg-[#0f2e60] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#0f2e60]/90 transition-colors inline-flex items-center gap-2">
            View More Sample Reports
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
