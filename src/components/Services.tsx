"use client";

import { motion } from "framer-motion";
import { 
  FileBarChart, 
  PiggyBank, 
  Presentation, 
  Briefcase, 
  LayoutDashboard, 
  Coins, 
  Calculator, 
  LineChart, 
  TrendingUp, 
  FileCheck, 
  BookOpen, 
  Users, 
  PieChart, 
  FileText, 
  BarChart3, 
  Target, 
  ClipboardCheck, 
  Settings 
} from "lucide-react";

const services = [
  {
    title: "Virtual CFO Services",
    description: "Strategic financial leadership and business advisory support without the cost of a full-time CFO.",
    icon: Briefcase,
    color: "blue"
  },
  {
    title: "MIS Reporting",
    description: "Management Information System reports with actionable financial insights.",
    icon: FileBarChart,
    color: "purple"
  },
  {
    title: "KPI Dashboard Reporting",
    description: "Interactive dashboards showing business performance metrics and operational KPIs.",
    icon: LayoutDashboard,
    color: "cyan"
  },
  {
    title: "Cash Flow Management",
    description: "Monitor and optimize cash inflows and outflows for business stability.",
    icon: Coins,
    color: "indigo"
  },
  {
    title: "Budgeting & Forecasting",
    description: "Financial forecasting and strategic budget planning for future growth.",
    icon: Calculator,
    color: "blue"
  },
  {
    title: "Financial Analysis",
    description: "Detailed analysis of business performance, profitability, and operational efficiency.",
    icon: LineChart,
    color: "purple"
  },
  {
    title: "Profitability Monitoring",
    description: "Track gross profit, net margins, and business profitability trends.",
    icon: TrendingUp,
    color: "cyan"
  },
  {
    title: "Business Performance Review",
    description: "Comprehensive monthly and quarterly business performance assessments.",
    icon: FileCheck,
    color: "indigo"
  },
  {
    title: "Accounts Supervision",
    description: "Professional supervision of accounting systems and financial controls.",
    icon: BookOpen,
    color: "blue"
  },
  {
    title: "Management Reporting",
    description: "Executive-level reports for business owners and decision-makers.",
    icon: Users,
    color: "purple"
  },
  {
    title: "Cost Control Analysis",
    description: "Identify cost-saving opportunities and improve operational efficiency.",
    icon: PieChart,
    color: "cyan"
  },
  {
    title: "Financial Planning",
    description: "Strategic financial planning aligned with business growth goals.",
    icon: PiggyBank,
    color: "indigo"
  },
  {
    title: "Project Report",
    description: "Detailed project reports for feasibility analysis, business planning, investment evaluation, and financial projections.",
    icon: FileText,
    color: "blue"
  },
  {
    title: "Financial Modeling",
    description: "Advanced financial modeling and forecasting to support strategic decision-making and business growth planning.",
    icon: BarChart3,
    color: "purple"
  },
  {
    title: "Business Plan",
    description: "Professional business plan development with actionable strategies for startups and business expansion.",
    icon: Target,
    color: "cyan"
  },
  {
    title: "Presentation Service",
    description: "Professional presentation design and consulting to effectively communicate business ideas, financial insights, and strategies.",
    icon: Presentation,
    color: "indigo"
  },
  {
    title: "Registrations",
    description: "Assistance with business registrations, documentation, and compliance to ensure legal and regulatory adherence.",
    icon: ClipboardCheck,
    color: "blue"
  },
  {
    title: "ERP Systems Consulting",
    description: "ERP systems consulting and implementation support to streamline operations, improve collaboration, enhance reporting, and optimize business efficiency.",
    icon: Settings,
    color: "purple"
  }
];

const colorMap: { [key: string]: string } = {
  blue: "bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30",
  purple: "bg-purple-500/20 text-purple-400 group-hover:bg-purple-500/30",
  cyan: "bg-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/30",
  indigo: "bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30",
};

const gradientMap: { [key: string]: string } = {
  blue: "from-blue-500/10",
  purple: "from-purple-500/10",
  cyan: "from-cyan-500/10",
  indigo: "from-indigo-500/10",
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Comprehensive <span className="text-blue-500">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            JPPALLP offers a comprehensive suite of financial and operational services designed to empower your business. From strategic financial leadership to detailed performance analysis, our expert team provides tailored solutions to drive profitability and sustainable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-3xl group relative overflow-hidden"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${colorMap[service.color]}`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-white/50 leading-relaxed">
                {service.description}
              </p>
              
              {/* Subtle Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${gradientMap[service.color]}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
