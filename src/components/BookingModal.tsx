"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      alert("Form submitted successfully! We will get back to you soon.");
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-[#0f2e60]/70 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-white relative overflow-hidden rounded-[40px] shadow-2xl"
            >
              <div className="p-10 md:p-12 relative z-10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 p-1.5 rounded-full z-20"
                >
                  <X size={20} />
                </button>
                
                <h2 className="text-xl md:text-2xl font-bold text-[#0f2e60] mb-10 pr-12 leading-tight whitespace-nowrap">
                  Book Your Appointment
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">Your name</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">*Your email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="example@email.com"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">*Your Phone</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">*Company Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your organization name"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#2563eb] text-white font-bold rounded-2xl px-6 py-5 mt-4 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-70 flex items-center justify-center gap-2 text-lg"
                  >
                    {isSubmitting ? (
                      <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      "Request A Call Back"
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
