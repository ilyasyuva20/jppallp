import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import DashboardPreview from "@/components/DashboardPreview";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <DashboardPreview />
      
      <div className="grid md:grid-cols-2 gap-0 max-w-7xl mx-auto items-stretch">
        <Industries />
        <About />
      </div>

      <Testimonials />
      <CTA />
      <Footer />
      <BookingModal />
    </main>
  );
}
