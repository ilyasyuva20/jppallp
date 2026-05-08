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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md glass relative overflow-hidden rounded-3xl"
            >
              {/* Decorative shapes */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 rounded-full blur-[60px] opacity-20 pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-600 rounded-full blur-[60px] opacity-20 pointer-events-none" />
              
              <div className="p-8 relative z-10">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                
                <h2 className="text-3xl font-bold text-white mb-8 text-center">
                  Book Your Appointment
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">Your name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">*Your email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">*Your Phone</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 font-medium mb-2 text-sm">*Company Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1da1f2] text-white font-bold rounded-xl px-4 py-4 mt-4 hover:bg-[#1da1f2]/90 transition-colors shadow-[0_0_20px_rgba(29,161,242,0.3)] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
