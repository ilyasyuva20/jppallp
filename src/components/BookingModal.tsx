"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsSuccess(false);
      setIsOpen(true);
    };
    window.addEventListener("open-booking-modal", handleOpen);
    return () => window.removeEventListener("open-booking-modal", handleOpen);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const googleFormUrl = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf_zi44Weie8BxHz6cRaSpP0ug9n2wwcDUdWNbjbk0GK3LF8w/formResponse";

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      alert("Something went wrong. Please try again later.");
    }
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
                  {isSuccess ? "Success!" : "Book Your Appointment"}
                </h2>
                
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="relative mb-8">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-24 h-24 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <motion.path 
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" 
                          />
                        </svg>
                      </motion.div>
                      
                      {/* Decorative elements */}
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute -inset-4 bg-green-500/20 rounded-full -z-10"
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0f2e60] mb-4">Submission Successful!</h3>
                    <p className="text-slate-600 mb-8 max-w-[280px] mx-auto leading-relaxed">
                      Thank you for choosing <span className="font-bold text-blue-600">JPPA Consultants</span>. 
                      One of our experts will contact you shortly.
                    </p>
                    
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="bg-[#0f2e60] text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-md"
                    >
                      Close Window
                    </button>
                    
                    <p className="text-xs text-slate-400 mt-6 italic">Closing automatically in a few seconds...</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">Your name</label>
                      <input 
                        type="text" 
                        name="entry.61405063"
                        required
                        placeholder="Enter your full name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">*Your email</label>
                      <input 
                        type="email" 
                        name="entry.430976715"
                        required
                        placeholder="example@email.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">*Your Phone</label>
                      <input 
                        type="tel" 
                        name="entry.1146990674"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-slate-600 font-semibold mb-2.5 text-sm ml-1">Message</label>
                      <textarea 
                        name="entry.1419757304"
                        placeholder="How can we help you?"
                        rows={3}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm resize-none"
                      ></textarea>
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
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
