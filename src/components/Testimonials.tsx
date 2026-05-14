"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Director, Retail Business",
    text: "JP P & Associates LLP has been instrumental in managing our finances. Their reports and insights helped us improve profitability significantly.",
    rating: 5,
  },
  {
    name: "Neha Shah",
    role: "Founder, E-commerce Brand",
    text: "The team is highly professional, responsive and provides excellent CFO support. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Mehta",
    role: "CEO, Manufacturing Company",
    text: "Accurate MIS reports and cash flow management support have helped our business scale smoothly.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0f2e60] mb-4"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <p className="text-slate-600 mb-6 italic leading-relaxed text-sm lg:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="text-right">
                <h4 className="font-bold text-[#0f2e60]">{testimonial.name}</h4>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
