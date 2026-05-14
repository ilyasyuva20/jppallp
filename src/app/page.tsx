import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import About from "@/components/About";
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
      <HowWeWork />

      <About />

      <CTA />
      <Footer />
      <BookingModal />
    </main>
  );
}
